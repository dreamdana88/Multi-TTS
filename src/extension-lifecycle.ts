import { EXTENSION_ROOT_ID, LOG_PREFIX } from './extension-meta';
import { parseExtensionSettings, type ExtensionSettings } from './extension-settings';

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
    console.info(`${LOG_PREFIX} settings panel mounted`);
    return true;
  }

  function teardown(options: { removeSettings: boolean }) {
    side_effects.stopPlayback?.();
    stop_app_ready?.();
    stop_app_ready = null;
    pending_app_ready = false;

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
      return;
    }

    ensureSettingsPersisted();

    if (mountIfPossible()) {
      return;
    }

    pending_app_ready = true;
    stop_app_ready = host.onAppReady(() => {
      const should_mount = pending_app_ready;
      pending_app_ready = false;
      const stop = stop_app_ready;
      stop_app_ready = null;
      stop?.();
      if (!should_mount) {
        return;
      }
      if (!mountIfPossible()) {
        console.error(
          `${LOG_PREFIX} 未找到扩展设置容器 (#extensions_settings2 / #extensions_settings)，无法挂载设置面板`,
        );
      }
    });
  }

  function setEnabled(enabled: boolean) {
    const settings = currentSettings();
    settings.enabled = enabled;
    host.writeSettings(settings);
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
    setEnabled,
    isActive() {
      return active;
    },
  };
}

export function findSettingsRoot(): HTMLElement | null {
  return (
    document.querySelector<HTMLElement>('#extensions_settings2') ??
    document.querySelector<HTMLElement>('#extensions_settings')
  );
}
