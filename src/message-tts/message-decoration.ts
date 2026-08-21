import { playAudioBlob, type PlaybackHandle } from '../audio-playback';
import type { SaySegment } from './say-parser';

export const MESSAGE_RENDERED_ATTR = 'data-tavern-multi-tts-rendered';
export const MESSAGE_SWIPE_ATTR = 'data-tavern-multi-tts-swipe';
export const SEGMENT_CLASS = 'tavern-multi-tts-segment';
export const FALLBACK_CLASS = 'tavern-multi-tts-fallback-list';

export function buildSegmentPlaybackKey(
  message_id: number,
  swipe_id: number,
  index: number,
): string {
  return `${message_id}:${swipe_id}:${index}`;
}

export function parseSegmentPlaybackKey(key: string): {
  message_id: number;
  swipe_id: number;
  index: number;
} | null {
  const parts = key.split(':');
  if (parts.length !== 3) {
    return null;
  }
  const message_id = Number(parts[0]);
  const swipe_id = Number(parts[1]);
  const index = Number(parts[2]);
  if (![message_id, swipe_id, index].every(Number.isFinite)) {
    return null;
  }
  return { message_id, swipe_id, index };
}

export type SegmentState = 'idle' | 'loading' | 'ready' | 'playing' | 'error';

export type EnsureAudioResult = {
  blob?: Blob | null;
  cancelled?: boolean;
};

export type EnsureAudioOptions = {
  force?: boolean;
};

export type DecoratedSegmentHandlers = {
  ensureAudio: (
    segment: SaySegment,
    display_text: string,
    tts_text: string,
    options?: EnsureAudioOptions,
  ) => Promise<EnsureAudioResult>;
  downloadAudio: (blob: Blob, message_id: number, index: number) => void;
};

export function findMessageElement(message_id: number): HTMLElement | null {
  return document.querySelector<HTMLElement>(`#chat .mes[mesid="${message_id}"]`);
}

export function findMessageTextRoot(message_root: HTMLElement): HTMLElement | null {
  return message_root.querySelector<HTMLElement>('.mes_text');
}

export function isMessageDecorated(message_root: HTMLElement, swipe_id?: number): boolean {
  const marked = message_root.getAttribute(MESSAGE_RENDERED_ATTR) === 'true';
  const has_segments = message_root.querySelector(`.${SEGMENT_CLASS}`) !== null;
  if (!marked || !has_segments) {
    return false;
  }
  if (swipe_id === undefined) {
    return true;
  }
  return message_root.getAttribute(MESSAGE_SWIPE_ATTR) === String(swipe_id);
}

export function removeMessageDecorations(root: ParentNode = document) {
  root.querySelectorAll(`.${SEGMENT_CLASS}`).forEach((node) => {
    const text = node.querySelector('.tavern-multi-tts-text')?.textContent ?? '';
    node.replaceWith(document.createTextNode(text));
  });
  root.querySelectorAll(`.${FALLBACK_CLASS}`).forEach((node) => node.remove());
  root.querySelectorAll(`[${MESSAGE_RENDERED_ATTR}]`).forEach((node) => {
    node.removeAttribute(MESSAGE_RENDERED_ATTR);
    node.removeAttribute(MESSAGE_SWIPE_ATTR);
  });
}

function setSegmentState(segment: HTMLElement, state: SegmentState) {
  segment.classList.remove('is-loading', 'is-ready', 'is-playing', 'is-error');
  if (state !== 'idle') {
    segment.classList.add(`is-${state}`);
  }
  const indicator = segment.querySelector('.tavern-multi-tts-indicator');
  if (indicator) {
    indicator.textContent =
      state === 'loading'
        ? '⏳'
        : state === 'ready'
          ? '▶'
          : state === 'playing'
            ? '⏸'
            : state === 'error'
              ? '⚠'
              : '▶';
  }
}

function compactForMatch(text: string) {
  return text.replace(/\s+/g, '').trim();
}

function replaceTextNode(node: Text, start: number, length: number, replacement: HTMLElement) {
  const matched = node.splitText(start);
  matched.splitText(length);
  matched.replaceWith(replacement);
}

function mountSegmentInline(
  text_root: HTMLElement,
  raw_text: string,
  display_text: string,
  segment: HTMLElement,
): boolean {
  const candidates = [raw_text, display_text].map((item) => item.trim()).filter(Boolean);
  const walker = document.createTreeWalker(text_root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode() as Text | null;
  while (node) {
    const parent = node.parentElement;
    if (
      parent &&
      !parent.closest(`.${SEGMENT_CLASS}`) &&
      !parent.closest(`.${FALLBACK_CLASS}`) &&
      !parent.closest('.mes_buttons')
    ) {
      const content = node.nodeValue ?? '';
      for (const candidate of candidates) {
        const exact_index = content.indexOf(candidate);
        if (exact_index >= 0) {
          replaceTextNode(node, exact_index, candidate.length, segment);
          return true;
        }
        if (compactForMatch(content) === compactForMatch(candidate)) {
          node.replaceWith(segment);
          return true;
        }
      }
    }
    node = walker.nextNode() as Text | null;
  }
  return false;
}

const DOWNLOAD_ICON = '<path d="M12 3v11m0 0 4-4m-4 4-4-4M5 21h14" />';
const REGENERATE_ICON =
  '<path d="M20 11a8 8 0 0 0-14.9-3.8L3 10m0 0V4m0 6h6M4 13a8 8 0 0 0 14.9 3.8L21 14m0 0v6m0-6h-6" />';

function createActionButton(label: string, icon: string) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'tavern-multi-tts-action';
  button.setAttribute('aria-label', label);
  button.title = label;
  button.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${icon}</svg>`;
  return button;
}

function createSegmentElement(
  message_id: number,
  swipe_id: number,
  segment: SaySegment,
  display_text: string,
  tts_text: string,
  handlers: DecoratedSegmentHandlers,
  playbacks: Map<string, PlaybackHandle>,
): HTMLElement {
  const key = buildSegmentPlaybackKey(message_id, swipe_id, segment.index);
  const root = document.createElement('span');
  root.className = SEGMENT_CLASS;
  root.dataset.tavernMultiTtsKey = key;

  const text = document.createElement('span');
  text.className = 'tavern-multi-tts-text';
  text.textContent = display_text;

  const indicator = document.createElement('span');
  indicator.className = 'tavern-multi-tts-indicator';
  indicator.textContent = '▶';

  const actions = document.createElement('span');
  actions.className = 'tavern-multi-tts-actions';
  const download = createActionButton('下载这句语音', DOWNLOAD_ICON);
  const regenerate_button = createActionButton('重新生成这句语音', REGENERATE_ICON);
  actions.append(download, regenerate_button);
  root.append(text, indicator, actions);
  setSegmentState(root, 'idle');

  let current = playbacks.get(key) ?? null;

  const ensure = async (options: EnsureAudioOptions = {}) => {
    setSegmentState(root, 'loading');
    try {
      const result = await handlers.ensureAudio(segment, display_text, tts_text, options);
      if (result.cancelled) {
        return null;
      }
      if (!result.blob) {
        setSegmentState(root, 'error');
        return null;
      }
      setSegmentState(root, 'ready');
      return result.blob;
    } catch {
      setSegmentState(root, 'error');
      return null;
    }
  };

  const discardCurrentPlayback = () => {
    current?.stop();
    current = null;
    playbacks.delete(key);
  };

  const restart = async () => {
    const blob = await ensure();
    if (!blob) {
      return;
    }
    discardCurrentPlayback();
    current = playAudioBlob(
      blob,
      () => setSegmentState(root, 'playing'),
      () => {
        current = null;
        playbacks.delete(key);
        setSegmentState(root, 'ready');
      },
      () => {
        current = null;
        playbacks.delete(key);
        setSegmentState(root, 'error');
      },
      () => setSegmentState(root, 'ready'),
    );
    playbacks.set(key, current);
  };

  const regenerateAudio = async () => {
    discardCurrentPlayback();
    await ensure({ force: true });
  };

  const toggle = async () => {
    if (!current) {
      return;
    }
    const state = current.getState();
    if (state === 'playing') {
      current.pause();
      return;
    }
    if (state === 'paused') {
      try {
        await current.resume();
      } catch {
        // playback callbacks handle the visual state
      }
    }
  };

  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    if (target?.closest('.tavern-multi-tts-indicator')) {
      void toggle();
      return;
    }
    if (target?.closest('.tavern-multi-tts-action')) {
      return;
    }
    void restart();
  });
  download.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    void (async () => {
      const blob = await ensure();
      if (blob) {
        handlers.downloadAudio(blob, message_id, segment.index);
      }
    })();
  });
  regenerate_button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    void regenerateAudio();
  });

  return root;
}

export function decorateMessageElement(
  message_root: HTMLElement,
  message_id: number,
  segments: Array<SaySegment & { displayText: string; ttsText: string }>,
  handlers: DecoratedSegmentHandlers,
  playbacks: Map<string, PlaybackHandle>,
  swipe_id = 0,
): number {
  if (isMessageDecorated(message_root, swipe_id)) {
    return 0;
  }
  if (message_root.getAttribute(MESSAGE_RENDERED_ATTR) === 'true') {
    removeMessageDecorations(message_root);
  }

  const text_root = findMessageTextRoot(message_root) ?? message_root;
  const fallback: HTMLElement[] = [];
  let mounted = 0;

  for (const segment of segments) {
    if (!segment.displayText || !segment.ttsText) {
      continue;
    }
    const node = createSegmentElement(
      message_id,
      swipe_id,
      segment,
      segment.displayText,
      segment.ttsText,
      handlers,
      playbacks,
    );
    if (mountSegmentInline(text_root, segment.text, segment.displayText, node)) {
      mounted += 1;
    } else {
      fallback.push(node);
    }
  }

  text_root.querySelectorAll(`.${FALLBACK_CLASS}`).forEach((node) => node.remove());
  if (fallback.length > 0) {
    const list = document.createElement('div');
    list.className = FALLBACK_CLASS;
    fallback.forEach((node) => list.append(node, document.createTextNode(' ')));
    text_root.append(list);
    mounted += fallback.length;
  }

  if (mounted > 0) {
    message_root.setAttribute(MESSAGE_RENDERED_ATTR, 'true');
    message_root.setAttribute(MESSAGE_SWIPE_ATTR, String(swipe_id));
  }
  return mounted;
}
