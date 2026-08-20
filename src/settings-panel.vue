<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue';
import { getDefaultAudioCacheStats, clearDefaultAudioCache } from './audio-cache';
import { playAudioBlob } from './audio-playback';
import {
  INDEX_TTS_LANGUAGES,
  createTtsAdapter,
  isTtsRequestError,
  type TtsEngineId,
} from './engines';
import {
  DEFAULT_EXTENSION_SETTINGS,
  TTS_MODELS,
  parseExtensionSettings,
  type ExtensionSettings,
} from './extension-settings';
import { buildSynthesisRequest, buildVoiceCatalogRequest } from './message-tts/synthesis-request';
import {
  deleteNamedPreset,
  duplicateNames,
  loadNamedPreset,
  saveNamedPreset,
  sortPresets,
} from './settings-panel/mapping-presets';
import {
  GSVI_SPLIT_METHOD_OPTIONS,
  GSVI_TEXT_LANG_OPTIONS,
  testUtterance,
} from './settings-panel/test-utterance';
import { createEngineCatalogs, setEngineCatalogVoices } from './settings-panel/catalog-state';
import {
  filterVoiceCatalog,
  formatCacheSize,
  formatVoiceOption,
  gsviEmotions,
  gsviLanguages,
  uniqueVoiceLanguages,
} from './settings-panel/voice-catalog-filter';

const props = defineProps<{
  displayName: string;
  version: string;
  settings: ExtensionSettings;
  onSettingsChange: (settings: ExtensionSettings) => void;
}>();

type ConnectionKind = 'unchecked' | 'connecting' | 'online' | 'offline';
type SaveStatus = 'saving' | 'saved' | 'error';
type EngineConnection = { kind: ConnectionKind; detail: string };

const draft = reactive<ExtensionSettings>(parseExtensionSettings(props.settings));
const notice = ref('');
const notice_is_error = ref(false);
const busy = ref(false);
const catalogs = reactive(createEngineCatalogs());
const mapping_preset_name = ref('');
const selected_mapping_preset = ref('');
const cache_count = ref(0);
const cache_bytes = ref(0);
const save_status = ref<SaveStatus>('saved');
const color_scheme = ref<'light' | 'dark'>('light');
const connection_by_engine = reactive<Record<TtsEngineId, EngineConnection>>({
  minimax: { kind: 'unchecked', detail: '' },
  local_gsvi: { kind: 'unchecked', detail: '' },
  index_tts: { kind: 'unchecked', detail: '' },
});

let save_timer: number | undefined;
let hydrating = true;
let media_query: MediaQueryList | null = null;

const is_minimax = computed(() => draft.ttsEngine === 'minimax');
const is_gsvi = computed(() => draft.ttsEngine === 'local_gsvi');
const is_index_tts = computed(() => draft.ttsEngine === 'index_tts');
const minimax_voices = computed(() => catalogs.minimax.voices);
const gsvi_voices = computed(() => catalogs.local_gsvi.voices);
const index_tts_voices = computed(() => catalogs.index_tts.voices);
const filtered_voices = computed(() =>
  filterVoiceCatalog(catalogs.minimax.voices, catalogs.minimax.filter),
);
const language_options = computed(() => uniqueVoiceLanguages(catalogs.minimax.voices));
const selected_gsvi_model = computed(() =>
  catalogs.local_gsvi.voices.find((item) => item.id === draft.localGsviModel),
);
const gsvi_language_options = computed(() => gsviLanguages(selected_gsvi_model.value));
const gsvi_emotion_options = computed(() =>
  gsviEmotions(selected_gsvi_model.value, draft.localGsviLanguage),
);
const mapping_count = computed(() => {
  if (is_index_tts.value) {
    return draft.indexTtsCharacterMappings.length;
  }
  if (is_gsvi.value) {
    return draft.gsviCharacterMappings.length;
  }
  return draft.characterMappings.length;
});
const mapping_presets = computed(() => {
  if (is_index_tts.value) {
    return sortPresets(draft.indexTtsCharacterMappingPresets);
  }
  if (is_gsvi.value) {
    return sortPresets(draft.gsviCharacterMappingPresets);
  }
  return sortPresets(draft.characterMappingPresets);
});
const duplicated_mapping_names = computed(() =>
  duplicateNames(
    (is_index_tts.value
      ? draft.indexTtsCharacterMappings
      : is_gsvi.value
        ? draft.gsviCharacterMappings
        : draft.characterMappings
    ).map((item) => item.characterName),
  ),
);
const test_voice_label = computed(() => {
  if (is_minimax.value) {
    return '试听默认音色（消耗额度）';
  }
  if (is_gsvi.value) {
    return '试听默认模型';
  }
  return '试听默认音色';
});
const cache_size_text = computed(() => formatCacheSize(cache_bytes.value));
const engine_name = computed(() => {
  if (is_index_tts.value) {
    return 'IndexTTS';
  }
  if (is_gsvi.value) {
    return 'GSVI';
  }
  return 'MiniMax';
});
const connection = computed(() => connection_by_engine[draft.ttsEngine]);
const connection_text = computed(() => {
  const item = connection.value;
  if (item.kind === 'connecting') {
    return '正在连接';
  }
  if (item.kind === 'online') {
    return item.detail ? `${engine_name.value} 在线 · ${item.detail}` : `${engine_name.value} 在线`;
  }
  if (item.kind === 'offline') {
    return item.detail ? `服务离线 · ${item.detail}` : '服务离线';
  }
  return '尚未检查';
});
const save_text = computed(() => {
  if (save_status.value === 'saving') {
    return '正在保存…';
  }
  if (save_status.value === 'error') {
    return '保存失败，请重试';
  }
  return '✓ 所有修改已自动保存';
});

watch(
  draft,
  () => {
    try {
      props.onSettingsChange(parseExtensionSettings(draft));
      if (hydrating) {
        hydrating = false;
        save_status.value = 'saved';
        return;
      }
      save_status.value = 'saving';
      window.clearTimeout(save_timer);
      save_timer = window.setTimeout(() => {
        save_status.value = 'saved';
      }, 180);
    } catch {
      save_status.value = 'error';
    }
  },
  { deep: true },
);

function setNotice(message: string, is_error = false) {
  notice.value = message;
  notice_is_error.value = is_error;
}

function setConnection(kind: ConnectionKind, detail = '') {
  connection_by_engine[draft.ttsEngine] = { kind, detail };
}

function selectEngine(engine: TtsEngineId) {
  draft.ttsEngine = engine;
}

function presetNotice(text: string) {
  return text.replaceAll('存档', '方案');
}

function onColorSchemeChange() {
  color_scheme.value = detectColorScheme();
}

function detectColorScheme(): 'light' | 'dark' {
  const explicit = (
    document.documentElement.getAttribute('data-theme') ||
    document.body.getAttribute('data-theme') ||
    ''
  ).toLowerCase();
  if (explicit.includes('dark')) {
    return 'dark';
  }
  if (explicit.includes('light')) {
    return 'light';
  }
  if (
    document.documentElement.classList.contains('dark') ||
    document.body.classList.contains('dark')
  ) {
    return 'dark';
  }
  const bg = getComputedStyle(document.body).backgroundColor;
  const parts = bg.match(/[\d.]+/g);
  if (parts && parts.length >= 3) {
    const luminance =
      (0.2126 * Number(parts[0]) + 0.7152 * Number(parts[1]) + 0.0722 * Number(parts[2])) / 255;
    return luminance < 0.45 ? 'dark' : 'light';
  }
  if (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }
  return 'light';
}

function fail(error: unknown, fallback: string) {
  if (isTtsRequestError(error)) {
    setNotice(error.message, true);
    return;
  }
  setNotice(error instanceof Error ? error.message : fallback, true);
}

function completeMinimaxMappings() {
  return draft.characterMappings
    .map((item) => ({
      characterName: item.characterName.trim(),
      minimaxVoiceId: item.minimaxVoiceId.trim(),
    }))
    .filter((item) => item.characterName && item.minimaxVoiceId);
}

function completeGsviMappings() {
  return draft.gsviCharacterMappings
    .map((item) => ({
      characterName: item.characterName.trim(),
      gsviVoiceId: item.gsviVoiceId.trim(),
      gsviLanguage: item.gsviLanguage.trim(),
      gsviEmotion: item.gsviEmotion.trim(),
    }))
    .filter(
      (item) => item.characterName && item.gsviVoiceId && item.gsviLanguage && item.gsviEmotion,
    );
}

function completeIndexTtsMappings() {
  return draft.indexTtsCharacterMappings
    .map((item) => ({
      characterName: item.characterName.trim(),
      indexTtsVoiceId: item.indexTtsVoiceId.trim(),
      indexTtsLanguage: item.indexTtsLanguage,
    }))
    .filter((item) => item.characterName && item.indexTtsVoiceId && item.indexTtsLanguage);
}

function catalogMissingMessage() {
  if (draft.ttsEngine === 'minimax') {
    return '请先填写 API Key';
  }
  if (draft.ttsEngine === 'local_gsvi') {
    return '请先填写 Local-GSVI 服务地址';
  }
  return '请先填写 IndexTTS 服务地址';
}

function catalogLoadedMessage(count: number) {
  if (draft.ttsEngine === 'local_gsvi') {
    return `已加载 ${count} 个模型`;
  }
  return `已加载 ${count} 个音色`;
}

async function withBusy(action: () => Promise<void>, pending: string, failed: string) {
  if (busy.value) {
    return;
  }
  busy.value = true;
  if (pending) {
    setNotice(pending);
  }
  try {
    await action();
  } catch (error) {
    fail(error, failed);
  } finally {
    busy.value = false;
  }
}

async function loadCatalog(force = false) {
  await withBusy(
    async () => {
      setConnection('connecting');
      const request = buildVoiceCatalogRequest(draft);
      if (!request) {
        const message = catalogMissingMessage();
        setConnection('offline', message);
        setNotice(message, true);
        return;
      }
      if (request.engine === 'minimax') {
        request.forceRefresh = force;
      }
      const engine = draft.ttsEngine;
      try {
        const listed = await createTtsAdapter(engine).listVoices(request);
        setEngineCatalogVoices(catalogs, engine, listed);
        const detail = catalogLoadedMessage(listed.length);
        setConnection('online', detail);
        setNotice(detail);
      } catch (error) {
        setConnection('offline');
        throw error;
      }
    },
    '',
    '拉取列表失败',
  );
}

function applyCatalogVoice(voice_id: string) {
  draft.voiceId = voice_id;
  draft.voiceCatalogSelectedId = voice_id;
}

function addMapping() {
  if (is_minimax.value) {
    draft.characterMappings.push({ characterName: '', minimaxVoiceId: '' });
    return;
  }
  if (is_gsvi.value) {
    draft.gsviCharacterMappings.push({
      characterName: '',
      gsviVoiceId: '',
      gsviLanguage: '',
      gsviEmotion: '',
    });
    return;
  }
  draft.indexTtsCharacterMappings.push({
    characterName: '',
    indexTtsVoiceId: '',
    indexTtsLanguage: draft.indexTtsLanguage,
  });
}

function removeMapping(index: number) {
  if (is_minimax.value) {
    draft.characterMappings.splice(index, 1);
    return;
  }
  if (is_gsvi.value) {
    draft.gsviCharacterMappings.splice(index, 1);
    return;
  }
  draft.indexTtsCharacterMappings.splice(index, 1);
}

function savePreset() {
  const name = mapping_preset_name.value;
  const exists = mapping_presets.value.some((item) => item.name === name.trim());
  if (exists && !window.confirm(`方案「${name.trim()}」已存在，要覆盖吗？`)) {
    return;
  }
  const result = is_minimax.value
    ? saveNamedPreset(draft.characterMappingPresets, name, completeMinimaxMappings(), exists)
    : is_gsvi.value
      ? saveNamedPreset(draft.gsviCharacterMappingPresets, name, completeGsviMappings(), exists)
      : saveNamedPreset(
          draft.indexTtsCharacterMappingPresets,
          name,
          completeIndexTtsMappings(),
          exists,
        );
  if ('error' in result) {
    setNotice(presetNotice(result.error), true);
    return;
  }
  if (is_minimax.value) {
    draft.characterMappingPresets = result.presets as ExtensionSettings['characterMappingPresets'];
  } else if (is_gsvi.value) {
    draft.gsviCharacterMappingPresets =
      result.presets as ExtensionSettings['gsviCharacterMappingPresets'];
  } else {
    draft.indexTtsCharacterMappingPresets =
      result.presets as ExtensionSettings['indexTtsCharacterMappingPresets'];
  }
  selected_mapping_preset.value = name.trim();
  setNotice(presetNotice(result.message));
}

function loadPreset() {
  const result = is_minimax.value
    ? loadNamedPreset(draft.characterMappingPresets, selected_mapping_preset.value)
    : is_gsvi.value
      ? loadNamedPreset(draft.gsviCharacterMappingPresets, selected_mapping_preset.value)
      : loadNamedPreset(draft.indexTtsCharacterMappingPresets, selected_mapping_preset.value);
  if ('error' in result) {
    setNotice(presetNotice(result.error), true);
    return;
  }
  const has_current = is_minimax.value
    ? completeMinimaxMappings().length > 0
    : is_gsvi.value
      ? completeGsviMappings().length > 0
      : completeIndexTtsMappings().length > 0;
  if (has_current && !window.confirm('载入方案会覆盖当前映射，确定继续吗？')) {
    return;
  }
  if (is_minimax.value) {
    draft.characterMappings = result.mappings as ExtensionSettings['characterMappings'];
  } else if (is_gsvi.value) {
    draft.gsviCharacterMappings = result.mappings as ExtensionSettings['gsviCharacterMappings'];
  } else {
    draft.indexTtsCharacterMappings =
      result.mappings as ExtensionSettings['indexTtsCharacterMappings'];
  }
  setNotice(`已载入方案：${selected_mapping_preset.value}`);
}

function deletePreset() {
  if (!window.confirm(`确定删除方案「${selected_mapping_preset.value}」吗？`)) {
    return;
  }
  const result = is_minimax.value
    ? deleteNamedPreset(draft.characterMappingPresets, selected_mapping_preset.value)
    : is_gsvi.value
      ? deleteNamedPreset(draft.gsviCharacterMappingPresets, selected_mapping_preset.value)
      : deleteNamedPreset(draft.indexTtsCharacterMappingPresets, selected_mapping_preset.value);
  if ('error' in result) {
    setNotice(presetNotice(result.error), true);
    return;
  }
  if (is_minimax.value) {
    draft.characterMappingPresets = result.presets as ExtensionSettings['characterMappingPresets'];
  } else if (is_gsvi.value) {
    draft.gsviCharacterMappingPresets =
      result.presets as ExtensionSettings['gsviCharacterMappingPresets'];
  } else {
    draft.indexTtsCharacterMappingPresets =
      result.presets as ExtensionSettings['indexTtsCharacterMappingPresets'];
  }
  selected_mapping_preset.value = '';
  setNotice(presetNotice(result.message));
}

async function checkConnection() {
  if (draft.ttsEngine !== 'index_tts') {
    await loadCatalog(true);
    return;
  }
  await withBusy(
    async () => {
      setConnection('connecting');
      const request = buildVoiceCatalogRequest(draft);
      if (!request || request.engine !== 'index_tts') {
        const message = '请先填写 IndexTTS 服务地址';
        setConnection('offline', message);
        setNotice(message, true);
        return;
      }
      const adapter = createTtsAdapter('index_tts');
      try {
        const health = await adapter.checkHealth(request);
        if (!health.ok) {
          setConnection('offline', health.message);
          setNotice(health.message, true);
          return;
        }
        try {
          const listed = await adapter.listVoices(request);
          setEngineCatalogVoices(catalogs, 'index_tts', listed);
          const detail = catalogLoadedMessage(listed.length);
          setConnection('online', detail);
          setNotice(health.message);
        } catch (error) {
          setConnection('online', health.message);
          fail(error, '拉取音色失败');
        }
      } catch (error) {
        setConnection('offline');
        throw error;
      }
    },
    '',
    '检查 IndexTTS 连接失败',
  );
}

async function testVoice(char?: string) {
  await withBusy(
    async () => {
      const text = testUtterance(draft.ttsEngine, draft.testLanguage);
      const request = buildSynthesisRequest(draft, text, char);
      if (!request) {
        setNotice(
          char ? `角色「${char}」未完整映射，无法测试` : '请先补全当前引擎的默认音色/模型后再测试',
          true,
        );
        return;
      }
      const blob = await createTtsAdapter(draft.ttsEngine).synthesize(request);
      playAudioBlob(blob);
      setNotice(char ? `正在试听「${char}」` : '正在试听默认音色');
    },
    '正在合成测试语音…',
    '测试语音失败',
  );
}

async function refreshCache() {
  await withBusy(
    async () => {
      const stats = await getDefaultAudioCacheStats();
      cache_count.value = stats.count;
      cache_bytes.value = stats.totalBytes;
      setNotice(`缓存 ${stats.count} 条，${formatCacheSize(stats.totalBytes)}`);
    },
    '正在读取缓存…',
    '读取缓存失败',
  );
}

async function clearCache() {
  if (!window.confirm('确定清空本扩展的音频缓存吗？')) {
    return;
  }
  await withBusy(
    async () => {
      await clearDefaultAudioCache();
      cache_count.value = 0;
      cache_bytes.value = 0;
      setNotice('已清空音频缓存');
    },
    '正在清空缓存…',
    '清空缓存失败',
  );
}

function resetSettings() {
  if (!window.confirm('确定恢复默认设置吗？当前映射和密钥都会被清空。')) {
    return;
  }
  Object.assign(draft, parseExtensionSettings(DEFAULT_EXTENSION_SETTINGS));
  Object.assign(catalogs, createEngineCatalogs());
  setNotice('已恢复默认设置');
}

function onGsviModelChange() {
  if (!gsvi_language_options.value.includes(draft.localGsviLanguage)) {
    draft.localGsviLanguage = '';
    draft.localGsviEmotion = '';
  }
}

function gsviRowLanguages(model_id: string) {
  return gsviLanguages(catalogs.local_gsvi.voices.find((item) => item.id === model_id));
}

function gsviRowEmotions(model_id: string, language: string) {
  return gsviEmotions(
    catalogs.local_gsvi.voices.find((item) => item.id === model_id),
    language,
  );
}

onMounted(() => {
  color_scheme.value = detectColorScheme();
  if (typeof window.matchMedia !== 'function') {
    return;
  }
  media_query = window.matchMedia('(prefers-color-scheme: dark)');
  media_query.addEventListener('change', onColorSchemeChange);
});

onUnmounted(() => {
  window.clearTimeout(save_timer);
  media_query?.removeEventListener('change', onColorSchemeChange);
  media_query = null;
});

void refreshCache().catch((error) => fail(error, '读取缓存失败'));
</script>

<template>
  <div class="tavern-multi-tts-settings" :data-color-scheme="color_scheme">
    <div class="inline-drawer">
      <div class="inline-drawer-toggle inline-drawer-header">
        <b>{{ displayName }}</b>
        <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
      </div>
      <div class="inline-drawer-content">
        <div class="mtts-card">
          <header class="mtts-card-head">
            <h2 class="mtts-title">{{ displayName }}</h2>
            <span class="mtts-version">{{ version }}</span>
          </header>

          <div
            class="mtts-capsule"
            :class="{
              'is-online': connection.kind === 'online',
              'is-connecting': connection.kind === 'connecting',
              'is-offline': connection.kind === 'offline',
            }"
            role="status"
            aria-live="polite"
          >
            <span class="mtts-dot" aria-hidden="true"></span>
            <span
              :key="connection_text"
              class="mtts-capsule-text mtts-fade"
              :title="connection_text"
              >{{ connection_text }}</span
            >
          </div>
          <p
            v-if="notice"
            :key="notice"
            class="mtts-notice mtts-fade"
            :class="{ 'is-error': notice_is_error }"
            role="status"
          >
            {{ notice }}
          </p>

          <label class="mtts-enable">
            <input v-model="draft.enabled" type="checkbox" />
            <span>启用</span>
          </label>

          <div class="mtts-tabs" role="tablist" aria-label="TTS 引擎">
            <button
              class="mtts-tab"
              type="button"
              role="tab"
              :class="{ 'is-active': is_minimax }"
              :aria-selected="is_minimax"
              @click="selectEngine('minimax')"
            >
              MiniMax
            </button>
            <button
              class="mtts-tab"
              type="button"
              role="tab"
              :class="{ 'is-active': is_gsvi }"
              :aria-selected="is_gsvi"
              @click="selectEngine('local_gsvi')"
            >
              GSVI
            </button>
            <button
              class="mtts-tab"
              type="button"
              role="tab"
              :class="{ 'is-active': is_index_tts }"
              :aria-selected="is_index_tts"
              @click="selectEngine('index_tts')"
            >
              IndexTTS
            </button>
          </div>

          <section class="mtts-section" aria-labelledby="mtts-service-title">
            <h3 id="mtts-service-title" class="mtts-section-title">语音服务</h3>

            <template v-if="is_minimax">
              <label class="mtts-field">
                <span class="mtts-label">API Key</span>
                <input
                  v-model="draft.apiKey"
                  class="text_pole"
                  type="password"
                  autocomplete="off"
                />
              </label>
              <div class="mtts-grid">
                <label class="mtts-field">
                  <span class="mtts-label">Group ID</span>
                  <input v-model="draft.groupId" class="text_pole" type="text" />
                </label>
                <label class="mtts-field">
                  <span class="mtts-label">区域</span>
                  <select v-model="draft.minimaxRegion" class="text_pole">
                    <option value="international">国际</option>
                    <option value="beijing">北京</option>
                  </select>
                </label>
              </div>
              <label class="mtts-field">
                <span class="mtts-label">默认音色</span>
                <input
                  v-model="draft.voiceId"
                  class="text_pole"
                  type="text"
                  placeholder="无 char 的台词使用"
                />
              </label>
              <div class="mtts-actions">
                <button
                  class="mtts-btn mtts-btn-primary"
                  type="button"
                  :disabled="busy"
                  @click="checkConnection"
                >
                  检查连接
                </button>
                <button
                  class="mtts-btn mtts-btn-secondary"
                  type="button"
                  :disabled="busy"
                  @click="loadCatalog(true)"
                >
                  刷新音色
                </button>
              </div>
              <template v-if="minimax_voices.length > 0">
                <details class="mtts-fold">
                  <summary>
                    <i class="fa-solid fa-chevron-right mtts-fold-icon" aria-hidden="true"></i>
                    筛选音色
                  </summary>
                  <div class="mtts-fold-body">
                    <div class="mtts-grid">
                      <label class="mtts-field">
                        <span class="mtts-label">搜索</span>
                        <input
                          v-model="catalogs.minimax.filter.search"
                          class="text_pole"
                          type="search"
                        />
                      </label>
                      <label class="mtts-field">
                        <span class="mtts-label">语言</span>
                        <select v-model="catalogs.minimax.filter.language" class="text_pole">
                          <option value="all">全部语言</option>
                          <option v-for="item in language_options" :key="item" :value="item">
                            {{ item }}
                          </option>
                        </select>
                      </label>
                      <label class="mtts-field">
                        <span class="mtts-label">性别</span>
                        <select v-model="catalogs.minimax.filter.gender" class="text_pole">
                          <option value="all">全部性别</option>
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                          <option value="Unknown">Unknown</option>
                        </select>
                      </label>
                      <label class="mtts-field">
                        <span class="mtts-label">来源</span>
                        <select v-model="catalogs.minimax.filter.source" class="text_pole">
                          <option value="all">全部来源</option>
                          <option value="system">system</option>
                          <option value="voice_cloning">voice_cloning</option>
                          <option value="voice_generation">voice_generation</option>
                        </select>
                      </label>
                    </div>
                    <label class="mtts-field">
                      <span class="mtts-label">从列表填入默认音色</span>
                      <select
                        class="text_pole"
                        :value="draft.voiceId"
                        @change="applyCatalogVoice(($event.target as HTMLSelectElement).value)"
                      >
                        <option value="">{{ filtered_voices.length }} 条可选</option>
                        <option v-for="item in filtered_voices" :key="item.id" :value="item.id">
                          {{ formatVoiceOption(item) }}
                        </option>
                      </select>
                    </label>
                  </div>
                </details>
              </template>
            </template>

            <template v-else-if="is_index_tts">
              <div class="mtts-control-row">
                <label class="mtts-field">
                  <span class="mtts-label">服务地址</span>
                  <input
                    v-model="draft.indexTtsBaseUrl"
                    class="text_pole"
                    type="url"
                    placeholder="http://127.0.0.1:7860"
                  />
                </label>
                <button
                  class="mtts-btn mtts-btn-primary"
                  type="button"
                  :disabled="busy"
                  @click="checkConnection"
                >
                  检查连接
                </button>
              </div>
              <div class="mtts-grid">
                <label class="mtts-field">
                  <span class="mtts-label">默认音色</span>
                  <select v-model="draft.indexTtsVoiceId" class="text_pole">
                    <option value="">
                      {{ index_tts_voices.length > 0 ? '请选择音色预设' : '先检查连接并拉取音色' }}
                    </option>
                    <option
                      v-if="
                        draft.indexTtsVoiceId &&
                        !index_tts_voices.some((item) => item.id === draft.indexTtsVoiceId)
                      "
                      :value="draft.indexTtsVoiceId"
                    >
                      {{ draft.indexTtsVoiceId }}
                    </option>
                    <option v-for="item in index_tts_voices" :key="item.id" :value="item.id">
                      {{ item.name }}
                    </option>
                  </select>
                </label>
                <label class="mtts-field">
                  <span class="mtts-label">语言</span>
                  <select v-model="draft.indexTtsLanguage" class="text_pole">
                    <option v-for="item in INDEX_TTS_LANGUAGES" :key="item" :value="item">
                      {{ item }}
                    </option>
                  </select>
                </label>
              </div>
            </template>

            <template v-else-if="is_gsvi">
              <div class="mtts-control-row">
                <label class="mtts-field">
                  <span class="mtts-label">服务地址</span>
                  <input
                    v-model="draft.localGsviBaseUrl"
                    class="text_pole"
                    type="url"
                    placeholder="http://127.0.0.1:9880"
                  />
                </label>
                <button
                  class="mtts-btn mtts-btn-primary"
                  type="button"
                  :disabled="busy"
                  @click="checkConnection"
                >
                  检查连接
                </button>
              </div>
              <div class="mtts-grid">
                <label class="mtts-field">
                  <span class="mtts-label">默认模型</span>
                  <select
                    v-model="draft.localGsviModel"
                    class="text_pole"
                    @change="onGsviModelChange"
                  >
                    <option value="">
                      {{ gsvi_voices.length > 0 ? '请选择' : '先检查连接并拉取模型' }}
                    </option>
                    <option v-for="item in gsvi_voices" :key="item.id" :value="item.id">
                      {{ item.name }}
                    </option>
                  </select>
                </label>
                <label class="mtts-field">
                  <span class="mtts-label">语种</span>
                  <select v-model="draft.localGsviLanguage" class="text_pole">
                    <option value="">请选择</option>
                    <option v-for="item in gsvi_language_options" :key="item" :value="item">
                      {{ item }}
                    </option>
                  </select>
                </label>
                <label class="mtts-field">
                  <span class="mtts-label">情绪</span>
                  <select v-model="draft.localGsviEmotion" class="text_pole">
                    <option value="">请选择</option>
                    <option v-for="item in gsvi_emotion_options" :key="item" :value="item">
                      {{ item }}
                    </option>
                  </select>
                </label>
              </div>
            </template>

            <div class="mtts-actions">
              <label class="mtts-field">
                <span class="mtts-label">试听语言</span>
                <select v-model="draft.testLanguage" class="text_pole">
                  <option value="ja">日语</option>
                  <option value="zh">中文</option>
                  <option value="en">英语</option>
                </select>
              </label>
              <button
                class="mtts-btn mtts-btn-secondary"
                type="button"
                :disabled="busy"
                @click="testVoice()"
              >
                {{ test_voice_label }}
              </button>
            </div>
          </section>

          <section class="mtts-section" aria-labelledby="mtts-mapping-title">
            <div class="mtts-section-head">
              <h3 id="mtts-mapping-title" class="mtts-section-title">
                角色映射 <span class="mtts-count">{{ mapping_count }}</span>
              </h3>
              <button class="mtts-btn mtts-btn-primary" type="button" @click="addMapping">
                + 添加角色
              </button>
            </div>

            <div v-if="mapping_count === 0" class="mtts-empty">
              <p class="mtts-empty-title">还没有角色映射</p>
              <p class="mtts-empty-copy">
                添加角色后，带有 <code>&lt;say char="角色名"&gt;</code> 的台词才会生成语音。
              </p>
              <button class="mtts-btn mtts-btn-primary" type="button" @click="addMapping">
                ＋添加第一个角色
              </button>
            </div>

            <template v-else>
              <template v-if="is_minimax">
                <article
                  v-for="(mapping, index) in draft.characterMappings"
                  :key="`mm-${index}`"
                  class="mtts-mapping-card"
                >
                  <label class="mtts-field">
                    <span class="mtts-label">角色名</span>
                    <input v-model="mapping.characterName" class="text_pole" type="text" />
                  </label>
                  <label class="mtts-field">
                    <span class="mtts-label">Voice ID</span>
                    <input v-model="mapping.minimaxVoiceId" class="text_pole" type="text" />
                  </label>
                  <label v-if="minimax_voices.length > 0" class="mtts-field">
                    <span class="mtts-label">音色预设</span>
                    <select
                      class="text_pole"
                      :value="mapping.minimaxVoiceId"
                      @change="mapping.minimaxVoiceId = ($event.target as HTMLSelectElement).value"
                    >
                      <option value="">从列表选择</option>
                      <option v-for="item in filtered_voices" :key="item.id" :value="item.id">
                        {{ formatVoiceOption(item) }}
                      </option>
                    </select>
                  </label>
                  <div class="mtts-mapping-actions">
                    <button
                      class="mtts-btn mtts-btn-secondary"
                      type="button"
                      :disabled="busy"
                      @click="testVoice(mapping.characterName)"
                    >
                      试听
                    </button>
                    <button
                      class="mtts-btn mtts-btn-danger"
                      type="button"
                      @click="removeMapping(index)"
                    >
                      删除
                    </button>
                  </div>
                </article>
              </template>
              <template v-else-if="is_index_tts">
                <article
                  v-for="(mapping, index) in draft.indexTtsCharacterMappings"
                  :key="`index-${index}`"
                  class="mtts-mapping-card"
                >
                  <label class="mtts-field">
                    <span class="mtts-label">角色名</span>
                    <input v-model="mapping.characterName" class="text_pole" type="text" />
                  </label>
                  <div class="mtts-grid">
                    <label class="mtts-field">
                      <span class="mtts-label">音色预设</span>
                      <select v-model="mapping.indexTtsVoiceId" class="text_pole">
                        <option value="">
                          {{ index_tts_voices.length > 0 ? '请选择' : '先检查连接' }}
                        </option>
                        <option
                          v-if="
                            mapping.indexTtsVoiceId &&
                            !index_tts_voices.some((item) => item.id === mapping.indexTtsVoiceId)
                          "
                          :value="mapping.indexTtsVoiceId"
                        >
                          {{ mapping.indexTtsVoiceId }}
                        </option>
                        <option v-for="item in index_tts_voices" :key="item.id" :value="item.id">
                          {{ item.name }}
                        </option>
                      </select>
                    </label>
                    <label class="mtts-field">
                      <span class="mtts-label">语言</span>
                      <select v-model="mapping.indexTtsLanguage" class="text_pole">
                        <option v-for="item in INDEX_TTS_LANGUAGES" :key="item" :value="item">
                          {{ item }}
                        </option>
                      </select>
                    </label>
                  </div>
                  <div class="mtts-mapping-actions">
                    <button
                      class="mtts-btn mtts-btn-secondary"
                      type="button"
                      :disabled="busy"
                      @click="testVoice(mapping.characterName)"
                    >
                      试听
                    </button>
                    <button
                      class="mtts-btn mtts-btn-danger"
                      type="button"
                      @click="removeMapping(index)"
                    >
                      删除
                    </button>
                  </div>
                </article>
              </template>
              <template v-else-if="is_gsvi">
                <article
                  v-for="(mapping, index) in draft.gsviCharacterMappings"
                  :key="`gsvi-${index}`"
                  class="mtts-mapping-card"
                >
                  <label class="mtts-field">
                    <span class="mtts-label">角色名</span>
                    <input v-model="mapping.characterName" class="text_pole" type="text" />
                  </label>
                  <div class="mtts-grid">
                    <label class="mtts-field">
                      <span class="mtts-label">模型</span>
                      <select v-model="mapping.gsviVoiceId" class="text_pole">
                        <option value="">
                          {{ gsvi_voices.length > 0 ? '请选择' : '先检查连接' }}
                        </option>
                        <option v-for="item in gsvi_voices" :key="item.id" :value="item.id">
                          {{ item.name }}
                        </option>
                      </select>
                    </label>
                    <label class="mtts-field">
                      <span class="mtts-label">语种</span>
                      <select v-model="mapping.gsviLanguage" class="text_pole">
                        <option value="">请选择</option>
                        <option
                          v-for="item in gsviRowLanguages(mapping.gsviVoiceId)"
                          :key="item"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </label>
                    <label class="mtts-field">
                      <span class="mtts-label">情绪</span>
                      <select v-model="mapping.gsviEmotion" class="text_pole">
                        <option value="">请选择</option>
                        <option
                          v-for="item in gsviRowEmotions(mapping.gsviVoiceId, mapping.gsviLanguage)"
                          :key="item"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </label>
                  </div>
                  <div class="mtts-mapping-actions">
                    <button
                      class="mtts-btn mtts-btn-secondary"
                      type="button"
                      :disabled="busy"
                      @click="testVoice(mapping.characterName)"
                    >
                      试听
                    </button>
                    <button
                      class="mtts-btn mtts-btn-danger"
                      type="button"
                      @click="removeMapping(index)"
                    >
                      删除
                    </button>
                  </div>
                </article>
              </template>
              <p v-if="duplicated_mapping_names.length > 0" class="mtts-hint">
                重复角色名：{{ duplicated_mapping_names.join('、') }}，最后一条完整映射生效。
              </p>
            </template>
          </section>

          <details class="mtts-fold">
            <summary>
              <i class="fa-solid fa-chevron-right mtts-fold-icon" aria-hidden="true"></i>
              映射方案（可选）
            </summary>
            <div class="mtts-fold-body">
              <p class="mtts-hint">角色映射会自动保存；这里仅用于保存多套可切换方案。</p>
              <label class="mtts-field">
                <span class="mtts-label">方案名称</span>
                <input
                  v-model="mapping_preset_name"
                  class="text_pole"
                  type="text"
                  placeholder="日语角色组"
                />
              </label>
              <div class="mtts-actions">
                <button class="mtts-btn mtts-btn-primary" type="button" @click="savePreset">
                  保存当前方案
                </button>
              </div>
              <label class="mtts-field">
                <span class="mtts-label">选择已有方案</span>
                <select v-model="selected_mapping_preset" class="text_pole">
                  <option value="">请选择方案</option>
                  <option v-for="item in mapping_presets" :key="item.name" :value="item.name">
                    {{ item.name }}（{{ item.mappings.length }}）
                  </option>
                </select>
              </label>
              <div class="mtts-actions">
                <button
                  class="mtts-btn mtts-btn-secondary"
                  type="button"
                  :disabled="!selected_mapping_preset"
                  @click="loadPreset"
                >
                  载入方案
                </button>
                <button
                  class="mtts-btn mtts-btn-danger"
                  type="button"
                  :disabled="!selected_mapping_preset"
                  @click="deletePreset"
                >
                  删除方案
                </button>
              </div>
            </div>
          </details>

          <details class="mtts-fold">
            <summary>
              <i class="fa-solid fa-chevron-right mtts-fold-icon" aria-hidden="true"></i>
              提示词注入
            </summary>
            <div class="mtts-fold-body">
              <label class="mtts-enable">
                <input v-model="draft.injectEnabled" type="checkbox" />
                <span>注入 &lt;say&gt; 提示</span>
              </label>
              <label class="mtts-field">
                <span class="mtts-label">注入深度 D{{ draft.injectDepth }}</span>
                <input v-model.number="draft.injectDepth" type="range" min="0" max="10" step="1" />
              </label>
              <label class="mtts-field">
                <span class="mtts-label">注入角色</span>
                <select v-model="draft.injectRole" class="text_pole">
                  <option value="system">system</option>
                  <option value="user">user</option>
                  <option value="assistant">assistant</option>
                </select>
              </label>
              <label class="mtts-field">
                <span class="mtts-label">注入模板</span>
                <textarea
                  v-if="is_index_tts"
                  v-model="draft.indexTtsInjectTemplate"
                  class="text_pole mtts-inject-template"
                  rows="12"
                ></textarea>
                <textarea
                  v-else
                  v-model="draft.injectTemplate"
                  class="text_pole mtts-inject-template"
                  rows="5"
                ></textarea>
              </label>
            </div>
          </details>

          <details class="mtts-fold">
            <summary>
              <i class="fa-solid fa-chevron-right mtts-fold-icon" aria-hidden="true"></i>
              生成与缓存
            </summary>
            <div class="mtts-fold-body">
              <label class="mtts-field">
                <span class="mtts-label">预取</span>
                <select v-model="draft.prefetchMode" class="text_pole">
                  <option value="manual">只在点击时生成</option>
                  <option value="auto_all">自动预取全部</option>
                  <option value="auto_first_n">自动预取前 N 句</option>
                </select>
              </label>
              <div v-if="draft.prefetchMode !== 'manual'" class="mtts-grid">
                <label v-if="draft.prefetchMode === 'auto_first_n'" class="mtts-field">
                  <span class="mtts-label">前 N 句</span>
                  <input
                    v-model.number="draft.prefetchFirstCount"
                    class="text_pole"
                    type="number"
                    min="1"
                    max="10"
                  />
                </label>
                <label class="mtts-field">
                  <span class="mtts-label">并发</span>
                  <input
                    v-model.number="draft.maxConcurrency"
                    class="text_pole"
                    type="number"
                    min="1"
                    max="10"
                  />
                </label>
              </div>
              <p class="mtts-hint">
                缓存 {{ cache_count }} 条 / {{ cache_size_text }}，上限 100 条或 50MB。
              </p>
              <div class="mtts-actions">
                <button
                  class="mtts-btn mtts-btn-secondary"
                  type="button"
                  :disabled="busy"
                  @click="refreshCache"
                >
                  刷新缓存
                </button>
                <button
                  class="mtts-btn mtts-btn-danger"
                  type="button"
                  :disabled="busy"
                  @click="clearCache"
                >
                  清空缓存
                </button>
              </div>
            </div>
          </details>

          <details class="mtts-fold">
            <summary>
              <i class="fa-solid fa-chevron-right mtts-fold-icon" aria-hidden="true"></i>
              高级设置
            </summary>
            <div class="mtts-fold-body">
              <template v-if="is_minimax">
                <label class="mtts-field">
                  <span class="mtts-label">模型</span>
                  <select v-model="draft.model" class="text_pole">
                    <option v-for="model in TTS_MODELS" :key="model" :value="model">
                      {{ model }}
                    </option>
                  </select>
                </label>
                <label class="mtts-field">
                  <span class="mtts-label">语速 {{ draft.speed.toFixed(2) }}</span>
                  <input v-model.number="draft.speed" type="range" min="0.5" max="2" step="0.05" />
                </label>
                <label class="mtts-field">
                  <span class="mtts-label">音量 {{ draft.vol.toFixed(2) }}</span>
                  <input v-model.number="draft.vol" type="range" min="0" max="10" step="0.1" />
                </label>
              </template>
              <template v-else-if="is_gsvi">
                <label class="mtts-field">
                  <span class="mtts-label">语速 {{ draft.speed.toFixed(2) }}</span>
                  <input v-model.number="draft.speed" type="range" min="0.5" max="2" step="0.05" />
                </label>
                <label class="mtts-field">
                  <span class="mtts-label">鉴权 Token</span>
                  <input
                    v-model="draft.localGsviAuthToken"
                    class="text_pole"
                    type="password"
                    autocomplete="off"
                  />
                </label>
                <div class="mtts-grid">
                  <label class="mtts-field">
                    <span class="mtts-label">文本语言</span>
                    <select v-model="draft.localGsviTextLang" class="text_pole">
                      <option v-for="item in GSVI_TEXT_LANG_OPTIONS" :key="item" :value="item">
                        {{ item }}
                      </option>
                    </select>
                  </label>
                  <label class="mtts-field">
                    <span class="mtts-label">切分</span>
                    <select v-model="draft.localGsviTextSplitMethod" class="text_pole">
                      <option v-for="item in GSVI_SPLIT_METHOD_OPTIONS" :key="item" :value="item">
                        {{ item }}
                      </option>
                    </select>
                  </label>
                </div>
                <label class="mtts-field">
                  <span class="mtts-label">Batch {{ draft.localGsviBatchSize }}</span>
                  <input
                    v-model.number="draft.localGsviBatchSize"
                    type="range"
                    min="1"
                    max="8"
                    step="1"
                  />
                </label>
              </template>
              <div class="mtts-actions">
                <button class="mtts-btn mtts-btn-danger" type="button" @click="resetSettings">
                  恢复默认
                </button>
              </div>
            </div>
          </details>

          <p
            class="mtts-savebar"
            :class="{
              'is-saved': save_status === 'saved',
              'is-error': save_status === 'error',
            }"
            role="status"
            aria-live="polite"
          >
            <span :key="save_status" class="mtts-fade">{{ save_text }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
