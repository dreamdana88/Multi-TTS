import { EXTENSION_SETTINGS_KEY, LOG_PREFIX } from './extension-meta';
import type { ExtensionSettings } from './extension-settings';
import type { ExtensionHost } from './extension-lifecycle';
import { findSettingsRoot } from './extension-lifecycle';
import type { ChatMessageRecord, ChatRuntimeHost } from './message-tts/chat-runtime';

type EventListener = (...args: unknown[]) => void;

type EventSourceLike = {
  on(event_name: string, listener: EventListener): unknown;
  removeListener(event_name: string, listener: EventListener): unknown;
};

type SillyTavernContext = {
  extensionSettings: Record<string, unknown>;
  saveSettingsDebounced: () => void;
  eventSource?: EventSourceLike;
  eventTypes?: {
    APP_READY?: string;
    MESSAGE_RECEIVED?: string;
    CHARACTER_MESSAGE_RENDERED?: string;
    MESSAGE_UPDATED?: string;
    MESSAGE_SWIPED?: string;
    MORE_MESSAGES_LOADED?: string;
    CHAT_CHANGED?: string;
  };
  chat?: unknown;
  setExtensionPrompt?: (
    key: string,
    value: string,
    position: number,
    depth: number,
    scan: boolean,
    role: number,
  ) => void;
  extensionPrompts?: Record<string, unknown>;
};

type SillyTavernApi = {
  getContext: () => unknown;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function asEventSource(value: unknown): EventSourceLike | undefined {
  if (!isRecord(value)) {
    return undefined;
  }
  if (typeof value.on !== 'function' || typeof value.removeListener !== 'function') {
    return undefined;
  }
  return value as EventSourceLike;
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

  const event_source = asEventSource(value.eventSource);
  const raw_event_types = isRecord(value.eventTypes)
    ? value.eventTypes
    : isRecord(value.event_types)
      ? value.event_types
      : undefined;
  const event_types = raw_event_types
    ? {
        APP_READY:
          typeof raw_event_types.APP_READY === 'string' ? raw_event_types.APP_READY : undefined,
        MESSAGE_RECEIVED:
          typeof raw_event_types.MESSAGE_RECEIVED === 'string'
            ? raw_event_types.MESSAGE_RECEIVED
            : undefined,
        CHARACTER_MESSAGE_RENDERED:
          typeof raw_event_types.CHARACTER_MESSAGE_RENDERED === 'string'
            ? raw_event_types.CHARACTER_MESSAGE_RENDERED
            : undefined,
        MESSAGE_UPDATED:
          typeof raw_event_types.MESSAGE_UPDATED === 'string'
            ? raw_event_types.MESSAGE_UPDATED
            : undefined,
        MESSAGE_SWIPED:
          typeof raw_event_types.MESSAGE_SWIPED === 'string'
            ? raw_event_types.MESSAGE_SWIPED
            : undefined,
        MORE_MESSAGES_LOADED:
          typeof raw_event_types.MORE_MESSAGES_LOADED === 'string'
            ? raw_event_types.MORE_MESSAGES_LOADED
            : undefined,
        CHAT_CHANGED:
          typeof raw_event_types.CHAT_CHANGED === 'string'
            ? raw_event_types.CHAT_CHANGED
            : undefined,
      }
    : undefined;

  return {
    extensionSettings: value.extensionSettings,
    saveSettingsDebounced: value.saveSettingsDebounced as () => void,
    eventSource: event_source,
    eventTypes: event_types,
    chat: value.chat,
    setExtensionPrompt:
      typeof value.setExtensionPrompt === 'function'
        ? (value.setExtensionPrompt as SillyTavernContext['setExtensionPrompt'])
        : undefined,
    extensionPrompts: isRecord(value.extensionPrompts)
      ? (value.extensionPrompts as Record<string, unknown>)
      : undefined,
  };
}

export function getSillyTavernContext(): SillyTavernContext {
  const api = asSillyTavernApi((globalThis as { SillyTavern?: unknown }).SillyTavern);
  if (!api) {
    throw new Error('SillyTavern.getContext() 不可用。请在 SillyTavern 中加载此扩展');
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
      const event_source = context.eventSource;
      if (!event_source) {
        throw new Error('SillyTavern eventSource 缺少 on/removeListener，无法注册 APP_READY 监听');
      }
      event_source.on(event_name, listener);
      return () => {
        event_source.removeListener(event_name, listener);
      };
    },
    onPageHide(listener) {
      const wrapped = () => listener();
      window.addEventListener('pagehide', wrapped);
      return () => window.removeEventListener('pagehide', wrapped);
    },
  };
}

function asChatMessage(value: unknown): ChatMessageRecord | null {
  if (!isRecord(value)) {
    return null;
  }
  return {
    mes: typeof value.mes === 'string' ? value.mes : undefined,
    is_user: typeof value.is_user === 'boolean' ? value.is_user : undefined,
    is_system: typeof value.is_system === 'boolean' ? value.is_system : undefined,
    swipe_id: typeof value.swipe_id === 'number' ? value.swipe_id : undefined,
  };
}

export function createSillyTavernChatHost(get_settings: () => ExtensionSettings): ChatRuntimeHost {
  const context = getSillyTavernContext();
  if (!context.eventSource) {
    throw new Error('SillyTavern eventSource 不可用，无法监听消息事件');
  }
  const event_source = context.eventSource;
  return {
    getSettings: get_settings,
    getChatMessage(message_id) {
      if (!Array.isArray(context.chat)) {
        return null;
      }
      return asChatMessage(context.chat[message_id]);
    },
    findMessageElement(message_id) {
      return document.querySelector<HTMLElement>(`#chat .mes[mesid="${message_id}"]`);
    },
    setExtensionPrompt(key, value, position, depth, scan, role) {
      if (!context.setExtensionPrompt) {
        throw new Error('SillyTavern.setExtensionPrompt 不可用，无法注入提示词');
      }
      context.setExtensionPrompt(key, value, position, depth, scan, role);
    },
    deleteExtensionPrompt(key) {
      if (context.extensionPrompts && key in context.extensionPrompts) {
        delete context.extensionPrompts[key];
        return;
      }
      context.setExtensionPrompt?.(key, '', 1, 0, false, 0);
    },
    eventSource: event_source,
    eventNames: {
      messageReceived: context.eventTypes?.MESSAGE_RECEIVED ?? 'message_received',
      messageRendered:
        context.eventTypes?.CHARACTER_MESSAGE_RENDERED ?? 'character_message_rendered',
      messageUpdated: context.eventTypes?.MESSAGE_UPDATED ?? 'message_updated',
      messageSwiped: context.eventTypes?.MESSAGE_SWIPED ?? 'message_swiped',
      moreMessagesLoaded: context.eventTypes?.MORE_MESSAGES_LOADED ?? 'more_messages_loaded',
      chatChanged: context.eventTypes?.CHAT_CHANGED ?? 'chat_id_changed',
    },
    warn(message) {
      const toastr = (
        globalThis as { toastr?: { warning?: (text: string, title?: string) => void } }
      ).toastr;
      if (typeof toastr?.warning === 'function') {
        toastr.warning(message, LOG_PREFIX);
        return;
      }
      console.warn(`${LOG_PREFIX} ${message}`);
    },
  };
}
