<script setup lang="ts">
defineProps<{
  displayName: string;
  version: string;
  enabled: boolean;
  injectEnabled: boolean;
  onEnabledChange: (enabled: boolean) => void;
  onInjectEnabledChange: (enabled: boolean) => void;
}>();
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
      </div>
    </div>
  </div>
</template>
