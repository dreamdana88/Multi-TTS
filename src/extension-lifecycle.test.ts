import { afterEach, describe, expect, it, vi } from 'vitest';
import { EXTENSION_ROOT_ID } from './extension-meta';
import {
  createExtensionRuntime,
  findSettingsRoot,
  type ExtensionHost,
} from './extension-lifecycle';
import { DEFAULT_EXTENSION_SETTINGS, type ExtensionSettings } from './extension-settings';

function createHost(options?: { delayAppReady?: boolean }): {
  host: ExtensionHost;
  stored: { value: unknown };
  fireAppReady: () => void;
  firePageHide: () => void;
} {
  const stored = { value: undefined as unknown };
  const app_ready_listeners = new Set<() => void>();
  const pagehide_listeners = new Set<() => void>();

  const host: ExtensionHost = {
    readRawSettings() {
      return stored.value;
    },
    writeSettings(settings: ExtensionSettings) {
      stored.value = { ...settings };
    },
    removeSettings() {
      stored.value = undefined;
    },
    findSettingsRoot() {
      return findSettingsRoot();
    },
    onAppReady(listener) {
      if (options?.delayAppReady) {
        app_ready_listeners.add(listener);
        return () => {
          app_ready_listeners.delete(listener);
        };
      }
      listener();
      return () => undefined;
    },
    onPageHide(listener) {
      pagehide_listeners.add(listener);
      return () => {
        pagehide_listeners.delete(listener);
      };
    },
  };

  return {
    host,
    stored,
    fireAppReady() {
      [...app_ready_listeners].forEach((listener) => listener());
    },
    firePageHide() {
      [...pagehide_listeners].forEach((listener) => listener());
    },
  };
}

function createPanel() {
  const mount = vi.fn((root: HTMLElement, settings: ExtensionSettings) => {
    const label = document.createElement('span');
    label.textContent = settings.enabled ? 'on' : 'off';
    root.append(label);
  });
  const unmount = vi.fn();
  return { mount, unmount };
}

describe('createExtensionRuntime', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('mounts the settings panel once and ignores a second activate', () => {
    document.body.innerHTML = '<div id="extensions_settings2"></div>';
    const { host, stored } = createHost();
    const panel = createPanel();
    const runtime = createExtensionRuntime(host, panel);

    runtime.activate();
    runtime.activate();

    expect(panel.mount).toHaveBeenCalledTimes(1);
    expect(document.querySelectorAll(`#${EXTENSION_ROOT_ID}`)).toHaveLength(1);
    expect(stored.value).toEqual(DEFAULT_EXTENSION_SETTINGS);
    expect(runtime.isActive()).toBe(true);
  });

  it('falls back to #extensions_settings when #extensions_settings2 is missing', () => {
    document.body.innerHTML = '<div id="extensions_settings"></div>';
    const { host } = createHost();
    const panel = createPanel();
    const runtime = createExtensionRuntime(host, panel);

    runtime.activate();

    expect(document.querySelector('#extensions_settings #tavern-multi-tts-root')).not.toBeNull();
  });

  it('waits for APP_READY when the settings container is not mounted yet', () => {
    const { host, fireAppReady } = createHost({ delayAppReady: true });
    const panel = createPanel();
    const runtime = createExtensionRuntime(host, panel);

    runtime.activate();
    expect(panel.mount).not.toHaveBeenCalled();

    document.body.innerHTML = '<div id="extensions_settings2"></div>';
    fireAppReady();

    expect(panel.mount).toHaveBeenCalledTimes(1);
    expect(runtime.isActive()).toBe(true);
  });

  it('does not mount after disable even if APP_READY fires later', () => {
    const { host, fireAppReady } = createHost({ delayAppReady: true });
    const panel = createPanel();
    const runtime = createExtensionRuntime(host, panel);

    runtime.activate();
    runtime.disable();
    document.body.innerHTML = '<div id="extensions_settings2"></div>';
    fireAppReady();

    expect(panel.mount).not.toHaveBeenCalled();
    expect(runtime.isActive()).toBe(false);
  });

  it('removes listeners and DOM on disable, and does not wipe settings', () => {
    document.body.innerHTML = '<div id="extensions_settings2"></div>';
    const { host, stored } = createHost();
    const panel = createPanel();
    const runtime = createExtensionRuntime(host, panel);

    runtime.activate();
    runtime.setEnabled(false);
    runtime.disable();

    expect(panel.unmount).toHaveBeenCalledTimes(1);
    expect(document.getElementById(EXTENSION_ROOT_ID)).toBeNull();
    expect(runtime.isActive()).toBe(false);
    expect(stored.value).toEqual({ schemaVersion: 1, enabled: false });
  });

  it('cleans settings on clean and delete', () => {
    document.body.innerHTML = '<div id="extensions_settings2"></div>';
    const { host, stored } = createHost();
    const panel = createPanel();
    const runtime = createExtensionRuntime(host, panel);

    runtime.activate();
    runtime.clean();
    expect(stored.value).toBeUndefined();
    expect(document.getElementById(EXTENSION_ROOT_ID)).toBeNull();

    runtime.activate();
    runtime.delete();
    expect(stored.value).toBeUndefined();
    expect(document.getElementById(EXTENSION_ROOT_ID)).toBeNull();
  });

  it('tears down on pagehide', () => {
    document.body.innerHTML = '<div id="extensions_settings2"></div>';
    const { host, firePageHide } = createHost();
    const panel = createPanel();
    const runtime = createExtensionRuntime(host, panel);

    runtime.activate();
    firePageHide();

    expect(panel.unmount).toHaveBeenCalledTimes(1);
    expect(runtime.isActive()).toBe(false);
    expect(document.getElementById(EXTENSION_ROOT_ID)).toBeNull();
  });
});
