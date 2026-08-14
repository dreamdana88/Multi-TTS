import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  FALLBACK_CLASS,
  MESSAGE_SWIPE_ATTR,
  SEGMENT_CLASS,
  buildSegmentPlaybackKey,
  decorateMessageElement,
  findMessageElement,
  isMessageDecorated,
  parseSegmentPlaybackKey,
  removeMessageDecorations,
} from './message-decoration';

function createMessage(id: number, html: string) {
  document.body.innerHTML = `<div id="chat"><div class="mes" mesid="${id}" is_user="false"><div class="mes_text">${html}</div></div></div>`;
  return document.querySelector<HTMLElement>(`.mes[mesid="${id}"]`)!;
}

describe('message decoration', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('finds the official ST 1.18 message node', () => {
    createMessage(4, '你好');
    expect(findMessageElement(4)?.getAttribute('mesid')).toBe('4');
    expect(findMessageElement(9)).toBeNull();
  });

  it('wraps matching text once and ignores a second decorate', () => {
    const root = createMessage(1, '旁白 你好 结束');
    const handlers = {
      ensureAudio: vi.fn(async () => ({ blob: new Blob(['x']) })),
      downloadAudio: vi.fn(),
    };
    const playbacks = new Map();
    const first = decorateMessageElement(
      root,
      1,
      [{ index: 0, text: '你好', displayText: '你好', ttsText: '你好', char: '爱丽丝' }],
      handlers,
      playbacks,
    );
    const second = decorateMessageElement(
      root,
      1,
      [{ index: 0, text: '你好', displayText: '你好', ttsText: '你好', char: '爱丽丝' }],
      handlers,
      playbacks,
    );
    expect(first).toBe(1);
    expect(second).toBe(0);
    expect(root.querySelectorAll(`.${SEGMENT_CLASS}`)).toHaveLength(1);
    expect(isMessageDecorated(root)).toBe(true);
  });

  it('uses a fallback list when inline text cannot be found', () => {
    const root = createMessage(2, '完全不同的正文');
    decorateMessageElement(
      root,
      2,
      [{ index: 0, text: '你好', displayText: '你好', ttsText: '你好' }],
      { ensureAudio: vi.fn(async () => ({ blob: null })), downloadAudio: vi.fn() },
      new Map(),
    );
    expect(root.querySelector(`.${FALLBACK_CLASS}`)).not.toBeNull();
    expect(root.querySelector(`.${SEGMENT_CLASS}`)?.textContent).toContain('你好');
  });

  it('parses swipe-scoped playback keys and rejects invalid ones', () => {
    expect(buildSegmentPlaybackKey(5, 2, 1)).toBe('5:2:1');
    expect(parseSegmentPlaybackKey('5:2:1')).toEqual({
      message_id: 5,
      swipe_id: 2,
      index: 1,
    });
    expect(parseSegmentPlaybackKey('5:2')).toBeNull();
    expect(parseSegmentPlaybackKey('a:b:c')).toBeNull();
  });

  it('re-decorates when the swipe candidate changes', () => {
    const root = createMessage(5, '第一句');
    const playbacks = new Map();
    decorateMessageElement(
      root,
      5,
      [{ index: 0, text: '第一句', displayText: '第一句', ttsText: '第一句' }],
      { ensureAudio: vi.fn(async () => ({ blob: null })), downloadAudio: vi.fn() },
      playbacks,
      0,
    );
    expect(root.getAttribute(MESSAGE_SWIPE_ATTR)).toBe('0');
    expect(buildSegmentPlaybackKey(5, 0, 0)).toBe('5:0:0');

    root.querySelector('.mes_text')!.textContent = '第二句';
    const mounted = decorateMessageElement(
      root,
      5,
      [{ index: 0, text: '第二句', displayText: '第二句', ttsText: '第二句' }],
      { ensureAudio: vi.fn(async () => ({ blob: null })), downloadAudio: vi.fn() },
      playbacks,
      1,
    );
    expect(mounted).toBe(1);
    expect(root.getAttribute(MESSAGE_SWIPE_ATTR)).toBe('1');
    expect(root.querySelector(`.${SEGMENT_CLASS}`)?.textContent).toContain('第二句');
    expect(isMessageDecorated(root, 0)).toBe(false);
    expect(isMessageDecorated(root, 1)).toBe(true);
  });

  it('removes decorations and rendered flags', () => {
    const root = createMessage(3, '你好');
    decorateMessageElement(
      root,
      3,
      [{ index: 0, text: '你好', displayText: '你好', ttsText: '你好' }],
      { ensureAudio: vi.fn(async () => ({ blob: null })), downloadAudio: vi.fn() },
      new Map(),
    );
    removeMessageDecorations(root);
    expect(root.querySelector(`.${SEGMENT_CLASS}`)).toBeNull();
    expect(isMessageDecorated(root)).toBe(false);
  });

  it('does not mark a cancelled ensure as an error', async () => {
    const root = createMessage(6, '你好');
    decorateMessageElement(
      root,
      6,
      [{ index: 0, text: '你好', displayText: '你好', ttsText: '你好' }],
      { ensureAudio: vi.fn(async () => ({ cancelled: true })), downloadAudio: vi.fn() },
      new Map(),
    );
    root.querySelector<HTMLElement>(`.${SEGMENT_CLASS}`)?.click();
    await Promise.resolve();
    await Promise.resolve();
    expect(root.querySelector(`.${SEGMENT_CLASS}`)?.classList.contains('is-error')).toBe(false);
  });
});
