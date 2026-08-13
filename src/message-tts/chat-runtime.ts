import { createAudioCacheKey, getCachedAudio, setCachedAudio } from '../audio-cache';
import {
  buildAudioFilename,
  downloadBlob,
  stopCurrentPlayback,
  type PlaybackHandle,
} from '../audio-playback';
import { createTtsAdapter } from '../engines';
import type { ExtensionSettings } from '../extension-settings';
import { LOG_PREFIX } from '../extension-meta';
import {
  applyPromptInjection,
  clearPromptInjection,
  type PromptInjectionHost,
} from '../prompt-injection';
import { extractSaySegments } from './say-parser';
import { buildTtsInputText, normalizeSayTextForDisplay } from './interjection';
import { runWithConcurrency } from './prefetch-queue';
import {
  decorateMessageElement,
  findMessageElement,
  isMessageDecorated,
  parseSegmentPlaybackKey,
  removeMessageDecorations,
} from './message-decoration';
import {
  buildAudioCacheKeyInput,
  buildSynthesisRequest,
  hasCharacterMapping,
} from './synthesis-request';

export type ChatMessageRecord = {
  mes?: string;
  is_user?: boolean;
  is_system?: boolean;
  swipe_id?: number;
};

export type ChatEventSource = {
  on(event_name: string, listener: (...args: unknown[]) => void): unknown;
  removeListener(event_name: string, listener: (...args: unknown[]) => void): unknown;
};

export type ChatRuntimeHost = PromptInjectionHost & {
  getSettings(): ExtensionSettings;
  getChatMessage(message_id: number): ChatMessageRecord | null;
  findMessageElement(message_id: number): HTMLElement | null;
  eventSource: ChatEventSource;
  eventNames: {
    messageReceived: string;
    messageRendered: string;
    messageUpdated: string;
    messageSwiped: string;
    moreMessagesLoaded: string;
    chatChanged: string;
  };
  warn?(message: string): void;
};

const MAX_DOM_ATTEMPTS = 15;

export function createChatRuntime(host: ChatRuntimeHost) {
  const playbacks = new Map<string, PlaybackHandle>();
  const loading = new Set<string>();
  const memory_blobs = new Map<string, Blob>();
  const stops: Array<() => void> = [];
  let started = false;
  let conflict_warned = false;

  function settings() {
    return host.getSettings();
  }

  function warnConflictOnce() {
    if (conflict_warned || !document.querySelector('.minimax-tts-segment')) {
      return;
    }
    conflict_warned = true;
    host.warn?.('检测到旧酒馆助手 Multi-TTS 仍在装饰消息。请只启用其中一个，避免重复生成。');
  }

  async function ensureAudio(segment_text: string, tts_text: string, segment_char?: string) {
    const current = settings();
    const request = buildSynthesisRequest(current, tts_text, segment_char);
    if (!request) {
      return null;
    }
    const cache_input = buildAudioCacheKeyInput(current, tts_text, segment_char);
    const cache_key = await createAudioCacheKey(cache_input);
    const memory = memory_blobs.get(cache_key);
    if (memory) {
      return memory;
    }
    const cached = await getCachedAudio(cache_key);
    if (cached) {
      memory_blobs.set(cache_key, cached);
      return cached;
    }
    const adapter = createTtsAdapter(request.engine);
    const blob = await adapter.synthesize(request);
    await setCachedAudio(cache_key, blob);
    memory_blobs.set(cache_key, blob);
    return blob;
  }

  function resolveSwipeId(message: ChatMessageRecord, root: HTMLElement | null) {
    if (typeof message.swipe_id === 'number' && Number.isFinite(message.swipe_id)) {
      return message.swipe_id;
    }
    const from_dom = Number(root?.getAttribute('swipeid'));
    return Number.isFinite(from_dom) ? from_dom : 0;
  }

  function stopPlaybacksForOtherSwipes(message_id: number, swipe_id: number) {
    for (const [key, handle] of playbacks) {
      const parsed = parseSegmentPlaybackKey(key);
      if (parsed && parsed.message_id === message_id && parsed.swipe_id !== swipe_id) {
        handle.stop();
        playbacks.delete(key);
      }
    }
  }

  function decorate(
    message_id: number,
    options: { attempt?: number; skipPrefetch?: boolean } = {},
  ) {
    const attempt = options.attempt ?? 0;
    const current = settings();
    if (!current.enabled) {
      return;
    }
    const message = host.getChatMessage(message_id);
    if (!message || message.is_user || message.is_system) {
      return;
    }
    const raw = typeof message.mes === 'string' ? message.mes : '';
    const say_segments = extractSaySegments(raw).filter((segment) =>
      hasCharacterMapping(current, segment.char),
    );
    if (say_segments.length === 0) {
      return;
    }

    const root = host.findMessageElement(message_id) ?? findMessageElement(message_id);
    if (!root) {
      if (attempt < MAX_DOM_ATTEMPTS) {
        window.setTimeout(() => decorate(message_id, { ...options, attempt: attempt + 1 }), 120);
      }
      return;
    }
    const swipe_id = resolveSwipeId(message, root);
    if (isMessageDecorated(root, swipe_id)) {
      return;
    }
    if (root.getAttribute('data-tavern-multi-tts-rendered') === 'true') {
      removeMessageDecorations(root);
    }
    stopPlaybacksForOtherSwipes(message_id, swipe_id);
    warnConflictOnce();

    const prepared = say_segments.map((segment) => ({
      ...segment,
      displayText: normalizeSayTextForDisplay(segment.text),
      ttsText: buildTtsInputText(segment.text, current.ttsEngine),
    }));
    const prefetch_tasks: Array<() => Promise<void>> = [];
    const should_prefetch = (index: number) => {
      if (options.skipPrefetch) {
        return false;
      }
      if (current.prefetchMode === 'auto_all') {
        return true;
      }
      if (current.prefetchMode === 'auto_first_n') {
        return index < current.prefetchFirstCount;
      }
      return false;
    };

    decorateMessageElement(
      root,
      message_id,
      prepared,
      {
        ensureAudio: async (segment, _display, tts_text) => {
          const key = `${message_id}:${swipe_id}:${segment.index}`;
          if (loading.has(key)) {
            return null;
          }
          loading.add(key);
          try {
            return await ensureAudio(segment.text, tts_text, segment.char);
          } catch {
            console.error(`${LOG_PREFIX} synthesize failed`);
            return null;
          } finally {
            loading.delete(key);
          }
        },
        downloadAudio(blob, id, index) {
          downloadBlob(blob, buildAudioFilename(id, index));
        },
      },
      playbacks,
      swipe_id,
    );

    prepared.forEach((segment, index) => {
      if (should_prefetch(index) && segment.ttsText) {
        prefetch_tasks.push(async () => {
          try {
            await ensureAudio(segment.text, segment.ttsText, segment.char);
          } catch {
            // prefetch failures stay on the segment when the user clicks
          }
        });
      }
    });
    if (prefetch_tasks.length > 0) {
      void runWithConcurrency(prefetch_tasks, current.maxConcurrency);
    }
  }

  function handleMessageEvent(...args: unknown[]) {
    const message_id = Number(args[0]);
    if (!Number.isFinite(message_id)) {
      return;
    }
    window.setTimeout(() => decorate(message_id), 0);
  }

  function handleSwipeEvent(...args: unknown[]) {
    const message_id = Number(args[0]);
    if (!Number.isFinite(message_id)) {
      return;
    }
    window.setTimeout(() => decorate(message_id, { skipPrefetch: true }), 0);
  }

  function decorateVisibleMessages(options: { skipPrefetch?: boolean } = {}) {
    document.querySelectorAll<HTMLElement>('#chat .mes[mesid]').forEach((node) => {
      const message_id = Number(node.getAttribute('mesid'));
      if (Number.isFinite(message_id)) {
        decorate(message_id, options);
      }
    });
  }

  function listen(event_name: string, listener: (...args: unknown[]) => void) {
    host.eventSource.on(event_name, listener);
    stops.push(() => host.eventSource.removeListener(event_name, listener));
  }

  function start() {
    if (started) {
      return;
    }
    started = true;
    applyPromptInjection(host, settings());
    listen(host.eventNames.messageReceived, handleMessageEvent);
    listen(host.eventNames.messageRendered, handleMessageEvent);
    listen(host.eventNames.messageUpdated, handleMessageEvent);
    listen(host.eventNames.messageSwiped, handleSwipeEvent);
    listen(host.eventNames.moreMessagesLoaded, () => {
      decorateVisibleMessages({ skipPrefetch: true });
    });
    listen(host.eventNames.chatChanged, () => {
      applyPromptInjection(host, settings());
      decorateVisibleMessages({ skipPrefetch: true });
    });
    decorateVisibleMessages({ skipPrefetch: true });
    console.info(`${LOG_PREFIX} chat runtime started`);
  }

  function stop() {
    stops.splice(0).forEach((stop) => stop());
    playbacks.forEach((handle) => handle.stop());
    playbacks.clear();
    loading.clear();
    memory_blobs.clear();
    stopCurrentPlayback();
    clearPromptInjection(host);
    removeMessageDecorations(document);
    started = false;
    console.info(`${LOG_PREFIX} chat runtime stopped`);
  }

  function syncFromSettings() {
    applyPromptInjection(host, settings());
    if (settings().enabled) {
      decorateVisibleMessages();
    }
  }

  return { start, stop, syncFromSettings, decorate };
}
