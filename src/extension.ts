import { createApp, type App } from 'vue';
import { clearDefaultAudioCache } from './audio-cache';
import { stopCurrentPlayback } from './audio-playback';
import { createExtensionRuntime } from './extension-lifecycle';
import { EXTENSION_DISPLAY_NAME, EXTENSION_VERSION, LOG_PREFIX } from './extension-meta';
import { parseExtensionSettings } from './extension-settings';
import { createChatRuntime } from './message-tts/chat-runtime';
import { createSillyTavernChatHost, createSillyTavernHost } from './sillytavern-context';
import type { ExtensionSettings } from './extension-settings';
import SettingsPanel from './settings-panel.vue';

let vue_app: App<Element> | null = null;
let runtime: ReturnType<typeof createExtensionRuntime> | null = null;
let chat_runtime: ReturnType<typeof createChatRuntime> | null = null;
function getSettings(): ExtensionSettings {
  return parseExtensionSettings(createSillyTavernHost().readRawSettings());
}

function getChatRuntime() {
  chat_runtime ??= createChatRuntime(createSillyTavernChatHost(getSettings));
  return chat_runtime;
}

function getRuntime() {
  if (runtime) {
    return runtime;
  }

  runtime = createExtensionRuntime(
    createSillyTavernHost(),
    {
      mount(root: HTMLElement, settings: ExtensionSettings) {
        vue_app?.unmount();
        vue_app = createApp(SettingsPanel, {
          displayName: EXTENSION_DISPLAY_NAME,
          version: EXTENSION_VERSION,
          enabled: settings.enabled,
          injectEnabled: settings.injectEnabled,
          onEnabledChange(enabled: boolean) {
            runtime?.setEnabled(enabled);
          },
          onInjectEnabledChange(enabled: boolean) {
            runtime?.setInjectEnabled(enabled);
          },
        });
        vue_app.mount(root);
      },
      unmount() {
        vue_app?.unmount();
        vue_app = null;
      },
    },
    {
      stopPlayback: stopCurrentPlayback,
      clearCache: clearDefaultAudioCache,
      startRuntime: () => getChatRuntime().start(),
      stopRuntime: () => chat_runtime?.stop(),
      syncRuntime: () => chat_runtime?.syncFromSettings(),
    },
  );

  return runtime;
}

async function runHook(name: string, action: () => void | Promise<void>) {
  try {
    await action();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`${LOG_PREFIX} ${name} failed: ${message}`);
    throw error;
  }
}

export async function onInstall() {
  await runHook('onInstall', () => getRuntime().install());
}

export async function onActivate() {
  await runHook('onActivate', () => getRuntime().activate());
}

export async function onEnable() {
  await runHook('onEnable', () => getRuntime().activate());
}

export async function onDisable() {
  await runHook('onDisable', () => getRuntime().disable());
}

export async function onClean() {
  await runHook('onClean', () => getRuntime().clean());
}

export async function onDelete() {
  await runHook('onDelete', () => getRuntime().delete());
}
