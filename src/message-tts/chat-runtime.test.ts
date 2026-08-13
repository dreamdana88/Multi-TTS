import { afterEach, describe, expect, it, vi } from 'vitest';
import { DEFAULT_EXTENSION_SETTINGS } from '../extension-settings';
import { PROMPT_INJECTION_ID } from '../prompt-injection';
import { MESSAGE_SWIPE_ATTR, SEGMENT_CLASS, buildSegmentPlaybackKey } from './message-decoration';
import { createChatRuntime, type ChatMessageRecord, type ChatRuntimeHost } from './chat-runtime';

type SynthesisCall = {
  text: string;
  voiceId?: string;
};

const { cache_store, synthesize, playback_stop } = vi.hoisted(() => ({
  cache_store: new Map<string, Blob>(),
  synthesize: vi.fn<(request: SynthesisCall) => Promise<Blob>>(async () => new Blob(['audio'])),
  playback_stop: vi.fn(),
}));

vi.mock('../engines', () => ({
  createTtsAdapter: () => ({
    id: 'minimax',
    checkHealth: vi.fn(),
    listVoices: vi.fn(),
    synthesize,
  }),
}));

vi.mock('../audio-cache', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../audio-cache')>();
  return {
    ...actual,
    getCachedAudio: vi.fn(async (key: string) => cache_store.get(key) ?? null),
    setCachedAudio: vi.fn(async (key: string, blob: Blob) => {
      cache_store.set(key, blob);
    }),
    clearDefaultAudioCache: vi.fn(async () => {
      cache_store.clear();
    }),
  };
});

vi.mock('../audio-playback', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../audio-playback')>();
  return {
    ...actual,
    playAudioBlob: vi.fn(() => ({
      stop: playback_stop,
      pause: vi.fn(),
      resume: vi.fn(async () => undefined),
      restart: vi.fn(async () => undefined),
      getState: () => 'playing' as const,
    })),
  };
});

type ChatState = Record<number, ChatMessageRecord>;

function mappedSettings() {
  return {
    apiKey: 'k',
    groupId: 'g',
    voiceId: 'default-voice',
    characterMappings: [{ characterName: '爱丽丝', minimaxVoiceId: 'mapped-voice' }],
  };
}

function createHost(
  overrides: Partial<ChatRuntimeHost> = {},
  chat: ChatState = {
    1: {
      mes: '旁白 <say char="爱丽丝">你好</say>',
      is_user: false,
      is_system: false,
      swipe_id: 0,
    },
  },
) {
  const listeners = new Map<string, Set<(...args: unknown[]) => void>>();
  const prompts = new Map<string, string>();
  const settings = {
    ...DEFAULT_EXTENSION_SETTINGS,
    enabled: true,
    prefetchMode: 'manual' as const,
  };
  const host: ChatRuntimeHost = {
    getSettings: () => settings,
    getChatMessage: (id) => chat[id] ?? null,
    findMessageElement: (id) => document.querySelector<HTMLElement>(`.mes[mesid="${id}"]`),
    setExtensionPrompt(key, value) {
      prompts.set(key, value);
    },
    deleteExtensionPrompt(key) {
      prompts.delete(key);
    },
    eventSource: {
      on(name, listener) {
        const bucket = listeners.get(name) ?? new Set<(...args: unknown[]) => void>();
        bucket.add(listener);
        listeners.set(name, bucket);
      },
      removeListener(name, listener) {
        listeners.get(name)?.delete(listener);
      },
    },
    eventNames: {
      messageReceived: 'message_received',
      messageRendered: 'character_message_rendered',
      messageUpdated: 'message_updated',
      messageSwiped: 'message_swiped',
      moreMessagesLoaded: 'more_messages_loaded',
      chatChanged: 'chat_id_changed',
    },
    warn: vi.fn(),
    ...overrides,
  };
  return { host, listeners, prompts, settings, chat };
}

function mountChat(html: string) {
  document.body.innerHTML = `<div id="chat">${html}</div>`;
}

function messageHtml(id: number, text: string, swipe_id = 0) {
  return `<div class="mes" mesid="${id}" is_user="false" swipeid="${swipe_id}"><div class="mes_text">${text}</div></div>`;
}

function emit(
  listeners: Map<string, Set<(...args: unknown[]) => void>>,
  name: string,
  ...args: unknown[]
) {
  listeners.get(name)?.forEach((listener) => listener(...args));
}

function applySwipe(
  chat: ChatState,
  message_id: number,
  swipe_id: number,
  mes: string,
  display: string,
) {
  chat[message_id] = {
    ...chat[message_id],
    mes,
    swipe_id,
    is_user: false,
    is_system: false,
  };
  const root = document.querySelector<HTMLElement>(`.mes[mesid="${message_id}"]`);
  root?.setAttribute('swipeid', String(swipe_id));
  const text = root?.querySelector('.mes_text');
  if (text) {
    text.textContent = display;
  }
}

function segmentKeys() {
  return Array.from(
    document.querySelectorAll<HTMLElement>(`.${SEGMENT_CLASS}`),
    (node) => node.dataset.tavernMultiTtsKey,
  );
}

async function flushTimers() {
  await vi.runAllTimersAsync();
  await Promise.resolve();
  await Promise.resolve();
}

describe('createChatRuntime', () => {
  let runtime: ReturnType<typeof createChatRuntime> | null = null;

  afterEach(async () => {
    runtime?.stop();
    runtime = null;
    document.body.innerHTML = '';
    vi.useRealTimers();
    await Promise.resolve();
    await Promise.resolve();
    cache_store.clear();
    synthesize.mockReset();
    synthesize.mockImplementation(async () => new Blob(['audio']));
    playback_stop.mockClear();
  });

  it('decorates an assistant message once and cleans listeners on stop', async () => {
    vi.useFakeTimers();
    mountChat(messageHtml(1, '旁白 你好'));
    const { host, listeners, prompts, settings } = createHost();
    Object.assign(settings, mappedSettings());
    runtime = createChatRuntime(host);
    runtime.start();
    expect(prompts.has(PROMPT_INJECTION_ID)).toBe(true);
    expect(listeners.get('message_swiped')?.size).toBe(1);
    expect(listeners.get('more_messages_loaded')?.size).toBe(1);

    emit(listeners, 'character_message_rendered', 1);
    await flushTimers();
    expect(document.querySelectorAll(`.${SEGMENT_CLASS}`)).toHaveLength(1);

    emit(listeners, 'character_message_rendered', 1);
    await flushTimers();
    expect(document.querySelectorAll(`.${SEGMENT_CLASS}`)).toHaveLength(1);

    runtime.stop();
    runtime = null;
    expect(listeners.get('character_message_rendered')?.size ?? 0).toBe(0);
    expect(listeners.get('message_swiped')?.size ?? 0).toBe(0);
    expect(listeners.get('more_messages_loaded')?.size ?? 0).toBe(0);
    expect(prompts.has(PROMPT_INJECTION_ID)).toBe(false);
    expect(document.querySelector(`.${SEGMENT_CLASS}`)).toBeNull();
  });

  it('skips user messages', async () => {
    vi.useFakeTimers();
    mountChat(messageHtml(2, '你好'));
    const { host, listeners } = createHost({
      getChatMessage: () => ({ mes: '<say char="我">你好</say>', is_user: true }),
    });
    runtime = createChatRuntime(host);
    runtime.start();
    emit(listeners, 'message_received', 2);
    await flushTimers();
    expect(document.querySelector(`.${SEGMENT_CLASS}`)).toBeNull();
  });

  it('first generate decorates mapped lines and prefetches them once', async () => {
    vi.useFakeTimers();
    const chat: ChatState = {
      1: {
        mes: '<say char="爱丽丝">你好</say>',
        is_user: false,
        swipe_id: 0,
      },
    };
    const { host, listeners, settings } = createHost({}, chat);
    Object.assign(settings, mappedSettings(), { prefetchMode: 'auto_all' });
    runtime = createChatRuntime(host);
    runtime.start();

    mountChat(messageHtml(1, '你好', 0));
    emit(listeners, 'message_received', 1);
    emit(listeners, 'character_message_rendered', 1);
    await flushTimers();
    await vi.waitFor(() => expect(synthesize).toHaveBeenCalledTimes(1));

    expect(segmentKeys()).toEqual([buildSegmentPlaybackKey(1, 0, 0)]);
    expect(synthesize.mock.calls[0]?.[0]).toEqual(
      expect.objectContaining({
        text: '你好',
        voiceId: 'mapped-voice',
      }),
    );
  });

  it('silently skips unmapped chars and still decorates mapped lines in the same reply', async () => {
    vi.useFakeTimers();
    const chat: ChatState = {
      1: {
        mes: '<say char="爱丽丝">你好</say><say char="路人">走开</say><say>旁白句</say>',
        is_user: false,
        swipe_id: 0,
      },
    };
    const { host, listeners, settings } = createHost({}, chat);
    Object.assign(settings, mappedSettings(), { prefetchMode: 'auto_all' });
    runtime = createChatRuntime(host);
    runtime.start();

    mountChat(messageHtml(1, '你好走开旁白句', 0));
    emit(listeners, 'character_message_rendered', 1);
    await flushTimers();
    await vi.waitFor(() => expect(synthesize).toHaveBeenCalledTimes(2));

    const texts = Array.from(
      document.querySelectorAll('.tavern-multi-tts-text'),
      (node) => node.textContent,
    );
    expect(texts).toEqual(['你好', '旁白句']);
    expect(document.body.textContent).toContain('走开');
    expect(synthesize.mock.calls.map((call) => call[0].text).sort()).toEqual(['你好', '旁白句']);
    expect(host.warn).not.toHaveBeenCalled();
  });

  it('re-decorates after consecutive swipe changes with swipe-scoped playback keys', async () => {
    vi.useFakeTimers();
    const chat: ChatState = {
      1: {
        mes: '<say char="爱丽丝">第一句</say>',
        is_user: false,
        swipe_id: 0,
      },
    };
    const { host, listeners, settings } = createHost({}, chat);
    Object.assign(settings, mappedSettings());
    mountChat(messageHtml(1, '第一句', 0));
    runtime = createChatRuntime(host);
    runtime.start();
    expect(segmentKeys()).toEqual([buildSegmentPlaybackKey(1, 0, 0)]);
    expect(document.querySelector('.mes')?.getAttribute(MESSAGE_SWIPE_ATTR)).toBe('0');

    applySwipe(chat, 1, 1, '<say char="爱丽丝">第二句</say>', '第二句');
    emit(listeners, 'message_swiped', 1);
    await flushTimers();
    expect(segmentKeys()).toEqual([buildSegmentPlaybackKey(1, 1, 0)]);
    expect(document.querySelector(`.${SEGMENT_CLASS}`)?.textContent).toContain('第二句');

    applySwipe(chat, 1, 2, '<say char="爱丽丝">第三句</say>', '第三句');
    emit(listeners, 'message_swiped', 1);
    await flushTimers();
    expect(segmentKeys()).toEqual([buildSegmentPlaybackKey(1, 2, 0)]);
    expect(document.querySelector(`.${SEGMENT_CLASS}`)?.textContent).toContain('第三句');
    expect(synthesize).not.toHaveBeenCalled();
  });

  it('restores a previous swipe without resynthesizing and stops the old playback handle', async () => {
    vi.useFakeTimers();
    const chat: ChatState = {
      1: {
        mes: '<say char="爱丽丝">第一句</say>',
        is_user: false,
        swipe_id: 0,
      },
    };
    const { host, listeners, settings } = createHost({}, chat);
    Object.assign(settings, mappedSettings(), { prefetchMode: 'auto_all' });
    runtime = createChatRuntime(host);
    runtime.start();

    mountChat(messageHtml(1, '第一句', 0));
    emit(listeners, 'character_message_rendered', 1);
    await flushTimers();
    await vi.waitFor(() => expect(synthesize).toHaveBeenCalledTimes(1));

    document.querySelector<HTMLElement>(`.${SEGMENT_CLASS}`)?.click();
    await flushTimers();
    expect(playback_stop).not.toHaveBeenCalled();

    applySwipe(chat, 1, 1, '<say char="爱丽丝">第二句</say>', '第二句');
    emit(listeners, 'message_swiped', 1);
    await flushTimers();
    expect(playback_stop).toHaveBeenCalledTimes(1);
    expect(segmentKeys()).toEqual([buildSegmentPlaybackKey(1, 1, 0)]);
    expect(synthesize).toHaveBeenCalledTimes(1);

    applySwipe(chat, 1, 0, '<say char="爱丽丝">第一句</say>', '第一句');
    emit(listeners, 'message_swiped', 1);
    await flushTimers();
    expect(segmentKeys()).toEqual([buildSegmentPlaybackKey(1, 0, 0)]);
    expect(document.querySelector(`.${SEGMENT_CLASS}`)?.textContent).toContain('第一句');

    document.querySelector<HTMLElement>(`.${SEGMENT_CLASS}`)?.click();
    await flushTimers();
    expect(synthesize).toHaveBeenCalledTimes(1);
  });

  it('decorates history loaded later without prefetching uncached lines', async () => {
    vi.useFakeTimers();
    const chat: ChatState = {
      4: {
        mes: '<say char="爱丽丝">当前句</say>',
        is_user: false,
        swipe_id: 0,
      },
    };
    const { host, listeners, settings } = createHost({}, chat);
    Object.assign(settings, mappedSettings(), { prefetchMode: 'auto_all' });
    mountChat(messageHtml(4, '当前句', 0));
    runtime = createChatRuntime(host);
    runtime.start();
    expect(segmentKeys()).toEqual([buildSegmentPlaybackKey(4, 0, 0)]);
    expect(synthesize).not.toHaveBeenCalled();

    chat[1] = {
      mes: '<say char="爱丽丝">历史句</say>',
      is_user: false,
      swipe_id: 0,
    };
    document.querySelector('#chat')?.insertAdjacentHTML('afterbegin', messageHtml(1, '历史句', 0));
    emit(listeners, 'more_messages_loaded');
    emit(listeners, 'more_messages_loaded');
    await flushTimers();

    expect(segmentKeys().sort()).toEqual([
      buildSegmentPlaybackKey(1, 0, 0),
      buildSegmentPlaybackKey(4, 0, 0),
    ]);
    expect(synthesize).not.toHaveBeenCalled();

    document.querySelector<HTMLElement>(`.mes[mesid="1"] .${SEGMENT_CLASS}`)?.click();
    await flushTimers();
    await vi.waitFor(() => expect(synthesize).toHaveBeenCalledTimes(1));
    expect(synthesize.mock.calls[0]?.[0]).toEqual(expect.objectContaining({ text: '历史句' }));
  });

  it('reuses cache for a history line that was generated earlier', async () => {
    vi.useFakeTimers();
    const chat: ChatState = {
      5: {
        mes: '<say char="爱丽丝">同一句</say>',
        is_user: false,
        swipe_id: 0,
      },
    };
    const { host, listeners, settings } = createHost({}, chat);
    Object.assign(settings, mappedSettings(), { prefetchMode: 'auto_all' });
    runtime = createChatRuntime(host);
    runtime.start();

    mountChat(messageHtml(5, '同一句', 0));
    emit(listeners, 'character_message_rendered', 5);
    await flushTimers();
    await vi.waitFor(() => expect(synthesize).toHaveBeenCalledTimes(1));

    chat[2] = {
      mes: '<say char="爱丽丝">同一句</say>',
      is_user: false,
      swipe_id: 0,
    };
    document.querySelector('#chat')?.insertAdjacentHTML('afterbegin', messageHtml(2, '同一句', 0));
    emit(listeners, 'more_messages_loaded');
    await flushTimers();

    document.querySelector<HTMLElement>(`.mes[mesid="2"] .${SEGMENT_CLASS}`)?.click();
    await flushTimers();
    expect(synthesize).toHaveBeenCalledTimes(1);
  });
});
