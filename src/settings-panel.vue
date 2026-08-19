<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import { getDefaultAudioCacheStats, clearDefaultAudioCache } from './audio-cache';
import { playAudioBlob } from './audio-playback';
import { INDEX_TTS_LANGUAGES, createTtsAdapter, isTtsRequestError } from './engines';
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

const draft = reactive<ExtensionSettings>(parseExtensionSettings(props.settings));
const status = ref('');
const busy = ref(false);
const catalogs = reactive(createEngineCatalogs());
const mapping_preset_name = ref('');
const selected_mapping_preset = ref('');
const cache_count = ref(0);
const cache_bytes = ref(0);

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
    return '测试默认音色（消耗额度）';
  }
  if (is_gsvi.value) {
    return '测试默认模型';
  }
  return '测试默认音色';
});
const cache_size_text = computed(() => formatCacheSize(cache_bytes.value));

watch(
  draft,
  () => {
    props.onSettingsChange(parseExtensionSettings(draft));
  },
  { deep: true },
);

function setStatus(message: string) {
  status.value = message;
}

function fail(error: unknown, fallback: string) {
  if (isTtsRequestError(error)) {
    setStatus(error.message);
    return;
  }
  setStatus(error instanceof Error ? error.message : fallback);
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
  setStatus(pending);
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
      const request = buildVoiceCatalogRequest(draft);
      if (!request) {
        setStatus(catalogMissingMessage());
        return;
      }
      if (request.engine === 'minimax') {
        request.forceRefresh = force;
      }
      const engine = draft.ttsEngine;
      const listed = await createTtsAdapter(engine).listVoices(request);
      setEngineCatalogVoices(catalogs, engine, listed);
      setStatus(catalogLoadedMessage(listed.length));
    },
    '正在拉取列表…',
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
  if (exists && !window.confirm(`存档「${name.trim()}」已存在，要覆盖吗？`)) {
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
    setStatus(result.error);
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
  setStatus(result.message);
}

function loadPreset() {
  const result = is_minimax.value
    ? loadNamedPreset(draft.characterMappingPresets, selected_mapping_preset.value)
    : is_gsvi.value
      ? loadNamedPreset(draft.gsviCharacterMappingPresets, selected_mapping_preset.value)
      : loadNamedPreset(draft.indexTtsCharacterMappingPresets, selected_mapping_preset.value);
  if ('error' in result) {
    setStatus(result.error);
    return;
  }
  const has_current = is_minimax.value
    ? completeMinimaxMappings().length > 0
    : is_gsvi.value
      ? completeGsviMappings().length > 0
      : completeIndexTtsMappings().length > 0;
  if (has_current && !window.confirm('读取存档会覆盖当前映射，确定继续吗？')) {
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
  setStatus(`已读取存档：${selected_mapping_preset.value}`);
}

function deletePreset() {
  if (!window.confirm(`确定删除存档「${selected_mapping_preset.value}」吗？`)) {
    return;
  }
  const result = is_minimax.value
    ? deleteNamedPreset(draft.characterMappingPresets, selected_mapping_preset.value)
    : is_gsvi.value
      ? deleteNamedPreset(draft.gsviCharacterMappingPresets, selected_mapping_preset.value)
      : deleteNamedPreset(draft.indexTtsCharacterMappingPresets, selected_mapping_preset.value);
  if ('error' in result) {
    setStatus(result.error);
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
  setStatus(result.message);
}

async function checkIndexTtsConnection() {
  await withBusy(
    async () => {
      const request = buildVoiceCatalogRequest(draft);
      if (!request || request.engine !== 'index_tts') {
        setStatus('请先填写 IndexTTS 服务地址');
        return;
      }
      const health = await createTtsAdapter('index_tts').checkHealth(request);
      setStatus(health.message);
    },
    '正在检查 IndexTTS 连接…',
    '检查 IndexTTS 连接失败',
  );
}

async function testVoice(char?: string) {
  await withBusy(
    async () => {
      const text = testUtterance(draft.ttsEngine, draft.testLanguage);
      const request = buildSynthesisRequest(draft, text, char);
      if (!request) {
        setStatus(
          char ? `角色「${char}」未完整映射，无法测试` : '请先补全当前引擎的默认音色/模型后再测试',
        );
        return;
      }
      const blob = await createTtsAdapter(draft.ttsEngine).synthesize(request);
      playAudioBlob(blob);
      setStatus(char ? `正在试听「${char}」` : '正在试听默认音色');
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
      setStatus(`缓存 ${stats.count} 条，${formatCacheSize(stats.totalBytes)}`);
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
      setStatus('已清空音频缓存');
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
  setStatus('已恢复默认设置');
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

void refreshCache().catch((error) => fail(error, '读取缓存失败'));
</script>

<template>
  <div class="tavern-multi-tts-settings">
    <div class="inline-drawer">
      <div class="inline-drawer-toggle inline-drawer-header">
        <b>{{ displayName }}</b>
        <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
      </div>
      <div class="inline-drawer-content">
        <div class="tavern-multi-tts-toolbar">
          <small class="tavern-multi-tts-version">{{ version }}</small>
          <small class="tavern-multi-tts-status" :class="{ 'is-busy': busy }">{{
            status || '更改会自动保存'
          }}</small>
        </div>

        <div class="tavern-multi-tts-row">
          <label class="checkbox_label">
            <input v-model="draft.enabled" type="checkbox" />
            <span>启用</span>
          </label>
          <select v-model="draft.ttsEngine" class="text_pole tavern-multi-tts-engine">
            <option value="minimax">MiniMax</option>
            <option value="local_gsvi">Local-GSVI</option>
            <option value="index_tts">IndexTTS-2.5</option>
          </select>
        </div>

        <template v-if="is_minimax">
          <label class="tavern-multi-tts-field">
            API Key
            <input v-model="draft.apiKey" class="text_pole" type="password" autocomplete="off" />
          </label>
          <div class="tavern-multi-tts-grid">
            <label class="tavern-multi-tts-field">
              Group ID
              <input v-model="draft.groupId" class="text_pole" type="text" />
            </label>
            <label class="tavern-multi-tts-field">
              区域
              <select v-model="draft.minimaxRegion" class="text_pole">
                <option value="international">国际</option>
                <option value="beijing">北京</option>
              </select>
            </label>
          </div>
          <label class="tavern-multi-tts-field">
            默认音色
            <input
              v-model="draft.voiceId"
              class="text_pole"
              type="text"
              placeholder="无 char 的台词使用"
            />
          </label>
          <div class="tavern-multi-tts-actions">
            <button class="menu_button" type="button" :disabled="busy" @click="loadCatalog(false)">
              拉取音色
            </button>
            <button class="menu_button" type="button" :disabled="busy" @click="loadCatalog(true)">
              刷新音色
            </button>
          </div>
          <template v-if="minimax_voices.length > 0">
            <div class="tavern-multi-tts-grid">
              <input
                v-model="catalogs.minimax.filter.search"
                class="text_pole"
                type="search"
                placeholder="搜索音色"
              />
              <select v-model="catalogs.minimax.filter.language" class="text_pole">
                <option value="all">全部语言</option>
                <option v-for="item in language_options" :key="item" :value="item">
                  {{ item }}
                </option>
              </select>
              <select v-model="catalogs.minimax.filter.gender" class="text_pole">
                <option value="all">全部性别</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Unknown">Unknown</option>
              </select>
              <select v-model="catalogs.minimax.filter.source" class="text_pole">
                <option value="all">全部来源</option>
                <option value="system">system</option>
                <option value="voice_cloning">voice_cloning</option>
                <option value="voice_generation">voice_generation</option>
              </select>
            </div>
            <label class="tavern-multi-tts-field">
              从列表填入默认音色
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
          </template>
          <div class="tavern-multi-tts-grid">
            <label class="tavern-multi-tts-field">
              模型
              <select v-model="draft.model" class="text_pole">
                <option v-for="model in TTS_MODELS" :key="model" :value="model">{{ model }}</option>
              </select>
            </label>
            <label class="tavern-multi-tts-field">
              语速 {{ draft.speed.toFixed(2) }}
              <input v-model.number="draft.speed" type="range" min="0.5" max="2" step="0.05" />
            </label>
            <label class="tavern-multi-tts-field">
              音量 {{ draft.vol.toFixed(2) }}
              <input v-model.number="draft.vol" type="range" min="0" max="10" step="0.1" />
            </label>
          </div>
        </template>

        <template v-else-if="is_index_tts">
          <label class="tavern-multi-tts-field">
            服务地址
            <input
              v-model="draft.indexTtsBaseUrl"
              class="text_pole"
              type="url"
              placeholder="http://127.0.0.1:7860"
            />
          </label>
          <div class="tavern-multi-tts-actions">
            <button
              class="menu_button"
              type="button"
              :disabled="busy"
              @click="checkIndexTtsConnection"
            >
              检查连接
            </button>
            <button class="menu_button" type="button" :disabled="busy" @click="loadCatalog(false)">
              拉取音色
            </button>
            <button class="menu_button" type="button" :disabled="busy" @click="loadCatalog(true)">
              刷新音色
            </button>
          </div>
          <div class="tavern-multi-tts-grid">
            <label class="tavern-multi-tts-field">
              默认音色
              <select v-model="draft.indexTtsVoiceId" class="text_pole">
                <option value="">
                  {{ index_tts_voices.length > 0 ? '请选择音色预设' : '先拉取音色预设' }}
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
            <label class="tavern-multi-tts-field">
              默认语言
              <select v-model="draft.indexTtsLanguage" class="text_pole">
                <option v-for="item in INDEX_TTS_LANGUAGES" :key="item" :value="item">
                  {{ item }}
                </option>
              </select>
            </label>
          </div>
        </template>

        <template v-else-if="is_gsvi">
          <label class="tavern-multi-tts-field">
            服务地址
            <input
              v-model="draft.localGsviBaseUrl"
              class="text_pole"
              type="url"
              placeholder="http://127.0.0.1:9880"
            />
          </label>
          <div class="tavern-multi-tts-actions">
            <button class="menu_button" type="button" :disabled="busy" @click="loadCatalog(false)">
              拉取模型
            </button>
          </div>
          <div class="tavern-multi-tts-grid">
            <label class="tavern-multi-tts-field">
              默认模型
              <select v-model="draft.localGsviModel" class="text_pole" @change="onGsviModelChange">
                <option value="">{{ gsvi_voices.length > 0 ? '请选择' : '先拉取模型' }}</option>
                <option v-for="item in gsvi_voices" :key="item.id" :value="item.id">
                  {{ item.name }}
                </option>
              </select>
            </label>
            <label class="tavern-multi-tts-field">
              语种
              <select v-model="draft.localGsviLanguage" class="text_pole">
                <option value="">请选择</option>
                <option v-for="item in gsvi_language_options" :key="item" :value="item">
                  {{ item }}
                </option>
              </select>
            </label>
            <label class="tavern-multi-tts-field">
              情绪
              <select v-model="draft.localGsviEmotion" class="text_pole">
                <option value="">请选择</option>
                <option v-for="item in gsvi_emotion_options" :key="item" :value="item">
                  {{ item }}
                </option>
              </select>
            </label>
          </div>
          <label class="tavern-multi-tts-field">
            语速 {{ draft.speed.toFixed(2) }}
            <input v-model.number="draft.speed" type="range" min="0.5" max="2" step="0.05" />
          </label>
        </template>

        <details class="tavern-multi-tts-section" open>
          <summary>角色映射 {{ mapping_count }}</summary>
          <p class="tavern-multi-tts-hint">只给映射名单里的角色生成语音；名单外的台词会跳过。</p>
          <div class="tavern-multi-tts-actions">
            <input
              v-model="mapping_preset_name"
              class="text_pole"
              type="text"
              placeholder="存档名"
            />
            <button class="menu_button" type="button" @click="savePreset">保存</button>
            <select v-model="selected_mapping_preset" class="text_pole">
              <option value="">读取存档</option>
              <option v-for="item in mapping_presets" :key="item.name" :value="item.name">
                {{ item.name }}（{{ item.mappings.length }}）
              </option>
            </select>
            <button
              class="menu_button"
              type="button"
              :disabled="!selected_mapping_preset"
              @click="loadPreset"
            >
              读取
            </button>
            <button
              class="menu_button"
              type="button"
              :disabled="!selected_mapping_preset"
              @click="deletePreset"
            >
              删除
            </button>
          </div>

          <template v-if="is_minimax">
            <div
              v-for="(mapping, index) in draft.characterMappings"
              :key="`mm-${index}`"
              class="tavern-multi-tts-mapping"
            >
              <input
                v-model="mapping.characterName"
                class="text_pole"
                type="text"
                placeholder="角色名"
              />
              <input
                v-model="mapping.minimaxVoiceId"
                class="text_pole"
                type="text"
                placeholder="Voice ID"
              />
              <select
                v-if="minimax_voices.length > 0"
                class="text_pole"
                :value="mapping.minimaxVoiceId"
                @change="mapping.minimaxVoiceId = ($event.target as HTMLSelectElement).value"
              >
                <option value="">从列表选择</option>
                <option v-for="item in filtered_voices" :key="item.id" :value="item.id">
                  {{ formatVoiceOption(item) }}
                </option>
              </select>
              <button
                class="menu_button"
                type="button"
                :disabled="busy"
                @click="testVoice(mapping.characterName)"
              >
                试听
              </button>
              <button class="menu_button" type="button" @click="removeMapping(index)">删除</button>
            </div>
          </template>
          <template v-else-if="is_index_tts">
            <div
              v-for="(mapping, index) in draft.indexTtsCharacterMappings"
              :key="`index-${index}`"
              class="tavern-multi-tts-mapping is-index-tts"
            >
              <input
                v-model="mapping.characterName"
                class="text_pole"
                type="text"
                placeholder="角色名"
              />
              <select v-model="mapping.indexTtsVoiceId" class="text_pole">
                <option value="">
                  {{ index_tts_voices.length > 0 ? '音色预设' : '先拉取音色' }}
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
              <select v-model="mapping.indexTtsLanguage" class="text_pole">
                <option v-for="item in INDEX_TTS_LANGUAGES" :key="item" :value="item">
                  {{ item }}
                </option>
              </select>
              <button
                class="menu_button"
                type="button"
                :disabled="busy"
                @click="testVoice(mapping.characterName)"
              >
                试听
              </button>
              <button class="menu_button" type="button" @click="removeMapping(index)">删除</button>
            </div>
          </template>
          <template v-else-if="is_gsvi">
            <div
              v-for="(mapping, index) in draft.gsviCharacterMappings"
              :key="`gsvi-${index}`"
              class="tavern-multi-tts-mapping is-gsvi"
            >
              <input
                v-model="mapping.characterName"
                class="text_pole"
                type="text"
                placeholder="角色名"
              />
              <select v-model="mapping.gsviVoiceId" class="text_pole">
                <option value="">{{ gsvi_voices.length > 0 ? '模型' : '先拉取模型' }}</option>
                <option v-for="item in gsvi_voices" :key="item.id" :value="item.id">
                  {{ item.name }}
                </option>
              </select>
              <select v-model="mapping.gsviLanguage" class="text_pole">
                <option value="">语种</option>
                <option
                  v-for="item in gsviRowLanguages(mapping.gsviVoiceId)"
                  :key="item"
                  :value="item"
                >
                  {{ item }}
                </option>
              </select>
              <select v-model="mapping.gsviEmotion" class="text_pole">
                <option value="">情绪</option>
                <option
                  v-for="item in gsviRowEmotions(mapping.gsviVoiceId, mapping.gsviLanguage)"
                  :key="item"
                  :value="item"
                >
                  {{ item }}
                </option>
              </select>
              <button
                class="menu_button"
                type="button"
                :disabled="busy"
                @click="testVoice(mapping.characterName)"
              >
                试听
              </button>
              <button class="menu_button" type="button" @click="removeMapping(index)">删除</button>
            </div>
          </template>
          <div class="tavern-multi-tts-actions">
            <button class="menu_button" type="button" @click="addMapping">添加角色</button>
          </div>
          <p v-if="duplicated_mapping_names.length > 0" class="tavern-multi-tts-hint">
            重复角色名：{{ duplicated_mapping_names.join('、') }}，最后一条完整映射生效。
          </p>
        </details>

        <div class="tavern-multi-tts-row">
          <label class="checkbox_label">
            <input v-model="draft.injectEnabled" type="checkbox" />
            <span>注入 &lt;say&gt; 提示</span>
          </label>
          <select v-model="draft.testLanguage" class="text_pole">
            <option value="ja">试听：日</option>
            <option value="zh">试听：中</option>
            <option value="en">试听：英</option>
          </select>
          <button class="menu_button" type="button" :disabled="busy" @click="testVoice()">
            {{ test_voice_label }}
          </button>
        </div>

        <details class="tavern-multi-tts-section">
          <summary>高级</summary>
          <label class="tavern-multi-tts-field">
            预取
            <select v-model="draft.prefetchMode" class="text_pole">
              <option value="manual">只在点击时生成</option>
              <option value="auto_all">自动预取全部</option>
              <option value="auto_first_n">自动预取前 N 句</option>
            </select>
          </label>
          <div v-if="draft.prefetchMode !== 'manual'" class="tavern-multi-tts-grid">
            <label v-if="draft.prefetchMode === 'auto_first_n'" class="tavern-multi-tts-field">
              前 N 句
              <input
                v-model.number="draft.prefetchFirstCount"
                class="text_pole"
                type="number"
                min="1"
                max="10"
              />
            </label>
            <label class="tavern-multi-tts-field">
              并发
              <input
                v-model.number="draft.maxConcurrency"
                class="text_pole"
                type="number"
                min="1"
                max="10"
              />
            </label>
          </div>
          <label class="tavern-multi-tts-field">
            注入深度 D{{ draft.injectDepth }}
            <input v-model.number="draft.injectDepth" type="range" min="0" max="10" step="1" />
          </label>
          <label class="tavern-multi-tts-field">
            注入角色
            <select v-model="draft.injectRole" class="text_pole">
              <option value="system">system</option>
              <option value="user">user</option>
              <option value="assistant">assistant</option>
            </select>
          </label>
          <label class="tavern-multi-tts-field">
            注入模板
            <textarea v-model="draft.injectTemplate" class="text_pole" rows="5"></textarea>
          </label>
          <template v-if="is_gsvi">
            <label class="tavern-multi-tts-field">
              鉴权 Token
              <input
                v-model="draft.localGsviAuthToken"
                class="text_pole"
                type="password"
                autocomplete="off"
              />
            </label>
            <div class="tavern-multi-tts-grid">
              <label class="tavern-multi-tts-field">
                文本语言
                <select v-model="draft.localGsviTextLang" class="text_pole">
                  <option v-for="item in GSVI_TEXT_LANG_OPTIONS" :key="item" :value="item">
                    {{ item }}
                  </option>
                </select>
              </label>
              <label class="tavern-multi-tts-field">
                切分
                <select v-model="draft.localGsviTextSplitMethod" class="text_pole">
                  <option v-for="item in GSVI_SPLIT_METHOD_OPTIONS" :key="item" :value="item">
                    {{ item }}
                  </option>
                </select>
              </label>
            </div>
            <label class="tavern-multi-tts-field">
              Batch {{ draft.localGsviBatchSize }}
              <input
                v-model.number="draft.localGsviBatchSize"
                type="range"
                min="1"
                max="8"
                step="1"
              />
            </label>
          </template>
          <div class="tavern-multi-tts-actions">
            <button class="menu_button" type="button" :disabled="busy" @click="refreshCache">
              刷新缓存
            </button>
            <button class="menu_button" type="button" :disabled="busy" @click="clearCache">
              清空缓存
            </button>
            <button class="menu_button" type="button" @click="resetSettings">恢复默认</button>
          </div>
          <p class="tavern-multi-tts-hint">
            缓存 {{ cache_count }} 条 / {{ cache_size_text }}，上限 100 条或 50MB。
          </p>
        </details>
      </div>
    </div>
  </div>
</template>
