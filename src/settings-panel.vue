<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  displayName: string;
  version: string;
  enabled: boolean;
  injectEnabled: boolean;
  onEnabledChange: (enabled: boolean) => void;
  onInjectEnabledChange: (enabled: boolean) => void;
  onImportFile: (text: string) => string;
}>();

const import_status = ref('');

function handleImport(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) {
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    import_status.value = props.onImportFile(String(reader.result ?? ''));
    input.value = '';
  };
  reader.readAsText(file);
}
</script>

<template>
  <div class="tavern-multi-tts-settings">
    <div class="inline-drawer">
      <div class="inline-drawer-toggle inline-drawer-header">
        <b>{{ displayName }}</b>
        <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
      </div>
      <div class="inline-drawer-content">
        <div class="tavern-multi-tts-block">
          <small class="tavern-multi-tts-version">版本 {{ version }}</small>
        </div>
        <div class="tavern-multi-tts-block">
          <label class="checkbox_label">
            <input
              type="checkbox"
              :checked="enabled"
              @change="onEnabledChange(($event.target as HTMLInputElement).checked)"
            />
            <span>启用 TTS 功能</span>
          </label>
        </div>
        <div class="tavern-multi-tts-block">
          <label class="checkbox_label">
            <input
              type="checkbox"
              :checked="injectEnabled"
              @change="onInjectEnabledChange(($event.target as HTMLInputElement).checked)"
            />
            <span>启用提示词注入</span>
          </label>
        </div>
        <div class="tavern-multi-tts-block">
          <label class="tavern-multi-tts-import-label">
            导入旧酒馆助手设置
            <input type="file" accept="application/json,.json" @change="handleImport" />
          </label>
          <small class="tavern-multi-tts-version">{{
            import_status || '选择从旧脚本导出的 JSON。未知字段会被忽略。'
          }}</small>
        </div>
      </div>
    </div>
  </div>
</template>
