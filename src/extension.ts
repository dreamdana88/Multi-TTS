import { createApp, type App } from 'vue';
import { createExtensionRuntime } from './extension-lifecycle';
import { EXTENSION_DISPLAY_NAME, EXTENSION_VERSION, LOG_PREFIX } from './extension-meta';
import { createSillyTavernHost } from './sillytavern-context';
import type { ExtensionSettings } from './extension-settings';
import SettingsPanel from './settings-panel.vue';

let vue_app: App<Element> | null = null;
let runtime: ReturnType<typeof createExtensionRuntime> | null = null;

function getRuntime() {
  if (runtime) {
    return runtime;
  }

  runtime = createExtensionRuntime(createSillyTavernHost(), {
    mount(root: HTMLElement, settings: ExtensionSettings) {
      vue_app?.unmount();
      vue_app = createApp(SettingsPanel, {
        displayName: EXTENSION_DISPLAY_NAME,
        version: EXTENSION_VERSION,
        enabled: settings.enabled,
        onEnabledChange(enabled: boolean) {
          runtime?.setEnabled(enabled);
        },
      });
      vue_app.mount(root);
    },
    unmount() {
      vue_app?.unmount();
      vue_app = null;
    },
  });

  return runtime;
}

function runHook(name: string, action: () => void) {
  try {
    action();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`${LOG_PREFIX} ${name} failed: ${message}`);
    throw error;
  }
}

export function onInstall() {
  runHook('onInstall', () => getRuntime().install());
}

export function onActivate() {
  runHook('onActivate', () => getRuntime().activate());
}

export function onEnable() {
  runHook('onEnable', () => getRuntime().activate());
}

export function onDisable() {
  runHook('onDisable', () => getRuntime().disable());
}

export function onClean() {
  runHook('onClean', () => getRuntime().clean());
}

export function onDelete() {
  runHook('onDelete', () => getRuntime().delete());
}
