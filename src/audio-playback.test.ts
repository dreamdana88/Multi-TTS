import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  buildAudioFilename,
  downloadBlob,
  playAudioBlob,
  sanitizeDownloadFilename,
  stopCurrentPlayback,
} from './audio-playback';

class FakeAudio {
  src: string;
  currentTime = 0;
  onplay: (() => void) | null = null;
  onpause: (() => void) | null = null;
  onended: (() => void) | null = null;
  onerror: ((event: unknown) => void) | null = null;

  constructor(src: string) {
    this.src = src;
  }

  play() {
    this.onplay?.();
    return Promise.resolve();
  }

  pause() {
    this.onpause?.();
  }
}

describe('audio playback and download', () => {
  afterEach(() => {
    stopCurrentPlayback();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('plays a blob, revokes the object URL on stop, and stops the previous clip', () => {
    const create_url = vi.fn((blob: Blob) => `blob:${blob.size}`);
    const revoke_url = vi.fn();
    vi.stubGlobal('URL', {
      createObjectURL: create_url,
      revokeObjectURL: revoke_url,
    });
    vi.stubGlobal('Audio', FakeAudio);

    const started: string[] = [];
    const first = playAudioBlob(new Blob(['aaaa']), () => started.push('first'));
    const second = playAudioBlob(new Blob(['bbbbbb']), () => started.push('second'));

    expect(started).toEqual(['first', 'second']);
    expect(first.getState()).toBe('paused');
    expect(second.getState()).toBe('playing');
    expect(revoke_url).toHaveBeenCalledWith('blob:4');

    second.stop();
    expect(second.getState()).toBe('ended');
    expect(revoke_url).toHaveBeenCalledWith('blob:6');
  });

  it('sanitizes download file names and uses the new prefix', () => {
    expect(buildAudioFilename(3, 1)).toBe('tavern_multi_tts_3_1.mp3');
    expect(sanitizeDownloadFilename('a/b:c?.wav')).toBe('a_b_c_.wav');
    expect(sanitizeDownloadFilename('   ')).toBe('audio.mp3');
  });

  it('creates a download link with a sanitized name', () => {
    const click = vi.fn();
    vi.stubGlobal('URL', {
      createObjectURL: () => 'blob:dl',
      revokeObjectURL: vi.fn(),
    });
    const original_create = document.createElement.bind(document);
    vi.spyOn(document, 'createElement').mockImplementation((tag: string) => {
      const element = original_create(tag);
      if (tag === 'a') {
        element.click = click;
      }
      return element;
    });

    downloadBlob(new Blob(['x']), 'evil/name?.mp3');
    expect(click).toHaveBeenCalledTimes(1);
    const anchor = document.querySelector('a');
    expect(anchor).toBeNull();
  });
});
