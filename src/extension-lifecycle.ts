import { EXTENSION_ROOT_ID, LOG_PREFIX } from './extension-meta';
import { parseExtensionSettings, type ExtensionSettings } from './extension-settings';
import { planSettingsSync } from './settings-sync';

export type ExtensionHost = {
  readRawSettings(): unknown;
  writeSettings(settings: ExtensionSettings): void;
  removeSettings(): void;
  findSettingsRoot(): HTMLElement | null;
  onAppReady(listener: () => void): () => void;
  onPageHide(listener: () => void): () => void;
};

export type SettingsPanelMount = {
  mount(root: HTMLElement, settings: ExtensionSettings): void;
  unmount(): void;
};

export type RuntimeSideEffects = {
  stopPlayback?: () => void;
  clearCache?: () => void | Promise<void>;
  startRuntime?: () => void;
  stopRuntime?: () => void;
  syncInjection?: () => void;
  refreshDecorations?: () => void;
};

export function createExtensionRuntime(
  host: ExtensionHost,
  panel: SettingsPanelMount,
  side_effects: RuntimeSideEffects = {},
) {
  let active = false;
  let pending_app_ready = false;
  let stop_app_ready: (() => void) | null = null;
  let stop_pagehide: (() => void) | null = null;
  let root: HTMLElement | null = null;
  const relocate_timers: number[] = [];

  function currentSettings(): ExtensionSettings {
    return parseExtensionSettings(host.readRawSettings());
  }

  function ensureSettingsPersisted(): ExtensionSettings {
    const settings = currentSettings();
    host.writeSettings(settings);
    return settings;
  }

  function mountIfPossible(): boolean {
    if (active) {
      return true;
    }

    const existing = document.getElementById(EXTENSION_ROOT_ID);
    if (existing) {
      existing.remove();
    }

    const container = host.findSettingsRoot();
    if (!container) {
      return false;
    }

    root = document.createElement('div');
    root.id = EXTENSION_ROOT_ID;
    root.dataset.tavernMultiTts = 'settings';
    container.appendChild(root);
    panel.mount(root, currentSettings());

    stop_pagehide = host.onPageHide(() => {
      teardown({ removeSettings: false });
    });
    active = true;
    side_effects.startRuntime?.();
    console.info(`${LOG_PREFIX} settings panel mounted`);
    return true;
  }

  function relocateIfNeeded() {
    if (!root || !active) {
      return;
    }
    const preferred = host.findSettingsRoot();
    if (preferred && root.parentElement !== preferred) {
      preferred.appendChild(root);
      console.info(`${LOG_PREFIX} settings panel moved to the visible extensions list`);
    }
  }

  function scheduleRelocate() {
    for (const delay_ms of [0, 200, 800, 2000]) {
      relocate_timers.push(window.setTimeout(relocateIfNeeded, delay_ms));
    }
  }

  function teardown(options: { removeSettings: boolean }) {
    side_effects.stopRuntime?.();
    side_effects.stopPlayback?.();
    stop_app_ready?.();
    stop_app_ready = null;
    pending_app_ready = false;
    relocate_timers.splice(0).forEach((timer) => window.clearTimeout(timer));

    stop_pagehide?.();
    stop_pagehide = null;

    panel.unmount();

    const mounted = root ?? document.getElementById(EXTENSION_ROOT_ID);
    mounted?.remove();
    root = null;
    active = false;

    if (options.removeSettings) {
      host.removeSettings();
    }
  }

  function activate() {
    if (active || pending_app_ready) {
      relocateIfNeeded();
      return;
    }

    ensureSettingsPersisted();
    if (!mountIfPossible()) {
      pending_app_ready = true;
    }

    stop_app_ready = host.onAppReady(() => {
      if (pending_app_ready) {
        pending_app_ready = false;
        if (!mountIfPossible()) {
          console.error(
            `${LOG_PREFIX} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`,
          );
        }
      }
      relocateIfNeeded();
    });
    scheduleRelocate();
  }

  function setEnabled(enabled: boolean) {
    const settings = currentSettings();
    settings.enabled = enabled;
    host.writeSettings(settings);
    side_effects.syncInjection?.();
    side_effects.refreshDecorations?.();
  }

  function setInjectEnabled(inject_enabled: boolean) {
    const settings = currentSettings();
    settings.injectEnabled = inject_enabled;
    host.writeSettings(settings);
    side_effects.syncInjection?.();
  }

  return {
    activate,
    disable() {
      teardown({ removeSettings: false });
      console.info(`${LOG_PREFIX} disabled`);
    },
    destroy() {
      teardown({ removeSettings: false });
    },
    install() {
      ensureSettingsPersisted();
    },
    clean() {
      teardown({ removeSettings: true });
      console.info(`${LOG_PREFIX} settings cleaned`);
      return side_effects.clearCache?.();
    },
    delete() {
      teardown({ removeSettings: true });
      console.info(`${LOG_PREFIX} deleted`);
      return side_effects.clearCache?.();
    },
    updateSettings(next: ExtensionSettings) {
      const previous = currentSettings();
      host.writeSettings(parseExtensionSettings(next));
      const plan = planSettingsSync(previous, currentSettings());
      if (plan.syncInjection) {
        side_effects.syncInjection?.();
      }
      if (plan.refreshDecorations) {
        side_effects.refreshDecorations?.();
      }
    },
    setEnabled,
    setInjectEnabled,
    isActive() {
      return active;
    },
  };
}

function foreignDrawerCount(container: HTMLElement): number {
  let count = 0;
  const drawers = Array.from(container.querySelectorAll('.inline-drawer'));
  for (const drawer of drawers) {
    if (!drawer.closest(`#${EXTENSION_ROOT_ID}`)) {
      count += 1;
    }
  }
  return count;
}

export function findSettingsRoot(): HTMLElement | null {
  const settings2 = document.querySelector<HTMLElement>('#extensions_settings2');
  const settings = document.querySelector<HTMLElement>('#extensions_settings');
  const settings2_count = settings2 ? foreignDrawerCount(settings2) : -1;
  const settings_count = settings ? foreignDrawerCount(settings) : -1;
  if (settings2_count < 0 && settings_count < 0) {
    return null;
  }
  if (settings_count > settings2_count) {
    return settings;
  }
  if (settings2_count > settings_count) {
    return settings2;
  }
  return settings2 ?? settings;
}
