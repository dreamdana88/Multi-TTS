import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  FALLBACK_CLASS,
  SEGMENT_CLASS,
  decorateMessageElement,
  findMessageElement,
  isMessageDecorated,
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
      ensureAudio: vi.fn(async () => new Blob(['x'])),
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
      { ensureAudio: vi.fn(async () => null), downloadAudio: vi.fn() },
      new Map(),
    );
    expect(root.querySelector(`.${FALLBACK_CLASS}`)).not.toBeNull();
    expect(root.querySelector(`.${SEGMENT_CLASS}`)?.textContent).toContain('你好');
  });

  it('removes decorations and rendered flags', () => {
    const root = createMessage(3, '你好');
    decorateMessageElement(
      root,
      3,
      [{ index: 0, text: '你好', displayText: '你好', ttsText: '你好' }],
      { ensureAudio: vi.fn(async () => null), downloadAudio: vi.fn() },
      new Map(),
    );
    removeMessageDecorations(root);
    expect(root.querySelector(`.${SEGMENT_CLASS}`)).toBeNull();
    expect(isMessageDecorated(root)).toBe(false);
  });
});
