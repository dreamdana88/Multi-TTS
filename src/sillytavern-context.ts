import { EXTENSION_SETTINGS_KEY } from './extension-meta';
import type { ExtensionSettings } from './extension-settings';
import type { ExtensionHost } from './extension-lifecycle';
import { findSettingsRoot } from './extension-lifecycle';

type EventSourceLike = {
  once?(event_name: string, listener: () => void): unknown;
};

type SillyTavernContext = {
  extensionSettings: Record<string, unknown>;
  saveSettingsDebounced: () => void;
  eventSource?: EventSourceLike;
  eventTypes?: {
    APP_READY?: string;
  };
};

type SillyTavernApi = {
  getContext: () => unknown;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function asSillyTavernApi(value: unknown): SillyTavernApi | null {
  if (!isRecord(value) || typeof value.getContext !== 'function') {
    return null;
  }
  return value as SillyTavernApi;
}

function asContext(value: unknown): SillyTavernContext {
  if (!isRecord(value)) {
    throw new Error('SillyTavern.getContext() 未返回对象');
  }
  if (!isRecord(value.extensionSettings)) {
    throw new Error('SillyTavern 上下文缺少 extensionSettings');
  }
  if (typeof value.saveSettingsDebounced !== 'function') {
    throw new Error('SillyTavern 上下文缺少 saveSettingsDebounced');
  }

  const event_source = isRecord(value.eventSource)
    ? (value.eventSource as EventSourceLike)
    : undefined;
  const event_types = isRecord(value.eventTypes)
    ? {
        APP_READY:
          typeof value.eventTypes.APP_READY === 'string' ? value.eventTypes.APP_READY : undefined,
      }
    : undefined;

  return {
    extensionSettings: value.extensionSettings,
    saveSettingsDebounced: value.saveSettingsDebounced as () => void,
    eventSource: event_source,
    eventTypes: event_types,
  };
}

export function getSillyTavernContext(): SillyTavernContext {
  const api = asSillyTavernApi((globalThis as { SillyTavern?: unknown }).SillyTavern);
  if (!api) {
    throw new Error(
      'SillyTavern.getContext() 不可用。此扩展需要在 SillyTavern 1.18.0 或更高版本中运行',
    );
  }
  return asContext(api.getContext());
}

export function createSillyTavernHost(): ExtensionHost {
  const context = getSillyTavernContext();

  return {
    readRawSettings() {
      return context.extensionSettings[EXTENSION_SETTINGS_KEY];
    },
    writeSettings(settings: ExtensionSettings) {
      context.extensionSettings[EXTENSION_SETTINGS_KEY] = settings;
      context.saveSettingsDebounced();
    },
    removeSettings() {
      delete context.extensionSettings[EXTENSION_SETTINGS_KEY];
      context.saveSettingsDebounced();
    },
    findSettingsRoot,
    onAppReady(listener) {
      const event_name = context.eventTypes?.APP_READY ?? 'app_ready';
      if (typeof context.eventSource?.once === 'function') {
        context.eventSource.once(event_name, listener);
        return () => undefined;
      }
      listener();
      return () => undefined;
    },
    onPageHide(listener) {
      const wrapped = () => listener();
      window.addEventListener('pagehide', wrapped);
      return () => window.removeEventListener('pagehide', wrapped);
    },
  };
}
