import { afterEach, describe, expect, it, vi } from 'vitest';
import { DEFAULT_EXTENSION_SETTINGS } from '../extension-settings';
import { PROMPT_INJECTION_ID } from '../prompt-injection';
import { SEGMENT_CLASS } from './message-decoration';
import { createChatRuntime, type ChatRuntimeHost } from './chat-runtime';

function createHost(overrides: Partial<ChatRuntimeHost> = {}) {
  const listeners = new Map<string, Set<(...args: unknown[]) => void>>();
  const prompts = new Map<string, string>();
  const settings = {
    ...DEFAULT_EXTENSION_SETTINGS,
    enabled: true,
    prefetchMode: 'manual' as const,
  };
  const host: ChatRuntimeHost = {
    getSettings: () => settings,
    getChatMessage: (id) =>
      id === 1
        ? { mes: '旁白 <say char="爱丽丝">你好</say>', is_user: false, is_system: false }
        : null,
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
      chatChanged: 'chat_id_changed',
    },
    warn: vi.fn(),
    ...overrides,
  };
  return { host, listeners, prompts, settings };
}

describe('createChatRuntime', () => {
  afterEach(() => {
    document.body.innerHTML = '';
    vi.useRealTimers();
  });

  it('decorates an assistant message once and cleans listeners on stop', () => {
    vi.useFakeTimers();
    document.body.innerHTML =
      '<div id="chat"><div class="mes" mesid="1" is_user="false"><div class="mes_text">旁白 你好</div></div></div>';
    const { host, listeners, prompts } = createHost();
    const runtime = createChatRuntime(host);
    runtime.start();
    expect(prompts.has(PROMPT_INJECTION_ID)).toBe(true);

    listeners.get('character_message_rendered')?.forEach((listener) => listener(1));
    vi.runAllTimers();
    expect(document.querySelectorAll(`.${SEGMENT_CLASS}`)).toHaveLength(1);

    listeners.get('character_message_rendered')?.forEach((listener) => listener(1));
    vi.runAllTimers();
    expect(document.querySelectorAll(`.${SEGMENT_CLASS}`)).toHaveLength(1);

    runtime.stop();
    expect(listeners.get('character_message_rendered')?.size ?? 0).toBe(0);
    expect(prompts.has(PROMPT_INJECTION_ID)).toBe(false);
    expect(document.querySelector(`.${SEGMENT_CLASS}`)).toBeNull();
  });

  it('skips user messages', () => {
    vi.useFakeTimers();
    document.body.innerHTML =
      '<div id="chat"><div class="mes" mesid="2" is_user="true"><div class="mes_text">你好</div></div></div>';
    const { host, listeners } = createHost({
      getChatMessage: () => ({ mes: '<say char="我">你好</say>', is_user: true }),
    });
    const runtime = createChatRuntime(host);
    runtime.start();
    listeners.get('message_received')?.forEach((listener) => listener(2));
    vi.runAllTimers();
    expect(document.querySelector(`.${SEGMENT_CLASS}`)).toBeNull();
    runtime.stop();
  });
});
