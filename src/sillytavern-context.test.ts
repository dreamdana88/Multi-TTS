import { afterEach, describe, expect, it, vi } from 'vitest';
import { createExtensionRuntime } from './extension-lifecycle';
import { EXTENSION_ROOT_ID } from './extension-meta';
import { createSillyTavernChatHost, createSillyTavernHost } from './sillytavern-context';
import { DEFAULT_EXTENSION_SETTINGS, type ExtensionSettings } from './extension-settings';

const APP_READY = 'app_ready';

type Listener = () => void;

function createFakeEventSource() {
  const listeners = new Map<string, Set<Listener>>();

  return {
    on(event_name: string, listener: Listener) {
      const bucket = listeners.get(event_name) ?? new Set<Listener>();
      bucket.add(listener);
      listeners.set(event_name, bucket);
    },
    removeListener(event_name: string, listener: Listener) {
      listeners.get(event_name)?.delete(listener);
    },
    emit(event_name: string) {
      [...(listeners.get(event_name) ?? [])].forEach((listener) => listener());
    },
    listenerCount(event_name: string) {
      return listeners.get(event_name)?.size ?? 0;
    },
  };
}

function installFakeSillyTavern(event_source = createFakeEventSource()) {
  const extensionSettings: Record<string, unknown> = {};
  const saveSettingsDebounced = vi.fn();

  (globalThis as { SillyTavern?: unknown }).SillyTavern = {
    getContext() {
      return {
        extensionSettings,
        saveSettingsDebounced,
        eventSource: event_source,
        eventTypes: {
          APP_READY,
          MESSAGE_SWIPED: 'message_swiped',
          MORE_MESSAGES_LOADED: 'more_messages_loaded',
        },
        chat: [],
      };
    },
  };

  return { event_source, extensionSettings, saveSettingsDebounced };
}

function createPanel() {
  return {
    mount: vi.fn((root: HTMLElement, settings: ExtensionSettings) => {
      root.textContent = settings.enabled ? 'on' : 'off';
    }),
    unmount: vi.fn(),
  };
}

describe('createSillyTavernHost APP_READY adapter', () => {
  afterEach(() => {
    delete (globalThis as { SillyTavern?: unknown }).SillyTavern;
    document.body.innerHTML = '';
  });

  it('registers an APP_READY listener with eventSource.on', () => {
    const { event_source } = installFakeSillyTavern();
    const host = createSillyTavernHost();
    const listener = vi.fn();

    host.onAppReady(listener);

    expect(event_source.listenerCount(APP_READY)).toBe(1);
    event_source.emit(APP_READY);
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('removes the APP_READY listener when the cleanup function runs', () => {
    const { event_source } = installFakeSillyTavern();
    const host = createSillyTavernHost();
    const listener = vi.fn();

    const stop = host.onAppReady(listener);
    stop();

    expect(event_source.listenerCount(APP_READY)).toBe(0);
    event_source.emit(APP_READY);
    expect(listener).not.toHaveBeenCalled();
  });

  it('does not mount the panel if APP_READY fires after disable', () => {
    const { event_source } = installFakeSillyTavern();
    const host = createSillyTavernHost();
    const panel = createPanel();
    const runtime = createExtensionRuntime(host, panel);

    runtime.activate();
    expect(event_source.listenerCount(APP_READY)).toBe(1);
    expect(panel.mount).not.toHaveBeenCalled();

    runtime.disable();
    expect(event_source.listenerCount(APP_READY)).toBe(0);

    document.body.innerHTML = '<div id="extensions_settings2"></div>';
    event_source.emit(APP_READY);

    expect(panel.mount).not.toHaveBeenCalled();
    expect(document.getElementById(EXTENSION_ROOT_ID)).toBeNull();
    expect(runtime.isActive()).toBe(false);
  });

  it('does not leave an APP_READY listener after clean or delete', () => {
    const { event_source } = installFakeSillyTavern();
    const host = createSillyTavernHost();
    const panel = createPanel();
    const runtime = createExtensionRuntime(host, panel);

    runtime.activate();
    runtime.clean();
    expect(event_source.listenerCount(APP_READY)).toBe(0);

    runtime.activate();
    runtime.delete();
    expect(event_source.listenerCount(APP_READY)).toBe(0);

    document.body.innerHTML = '<div id="extensions_settings2"></div>';
    event_source.emit(APP_READY);
    expect(panel.mount).not.toHaveBeenCalled();
    expect(document.getElementById(EXTENSION_ROOT_ID)).toBeNull();
  });
});

describe('createSillyTavernChatHost event mapping', () => {
  afterEach(() => {
    delete (globalThis as { SillyTavern?: unknown }).SillyTavern;
    document.body.innerHTML = '';
  });

  it('listens for ST 1.18.0 MESSAGE_SWIPED and MORE_MESSAGES_LOADED names', () => {
    installFakeSillyTavern();
    const host = createSillyTavernChatHost(() => ({
      ...DEFAULT_EXTENSION_SETTINGS,
    }));
    expect(host.eventNames.messageSwiped).toBe('message_swiped');
    expect(host.eventNames.moreMessagesLoaded).toBe('more_messages_loaded');
  });
});
