export type PlaybackHandle = {
  stop: () => void;
  pause: () => void;
  resume: () => Promise<void>;
  restart: () => Promise<void>;
  getState: () => 'playing' | 'paused' | 'ended' | 'error';
};

let current_audio: HTMLAudioElement | null = null;
let current_release: (() => void) | null = null;

export function stopCurrentPlayback() {
  if (!current_audio) {
    return;
  }
  current_audio.pause();
  current_release?.();
}

export function playAudioBlob(
  blob: Blob,
  on_started?: () => void,
  on_ended?: () => void,
  on_error?: (error: unknown) => void,
  on_paused?: () => void,
): PlaybackHandle {
  const object_url = URL.createObjectURL(blob);
  const audio = new Audio(object_url);
  let state: 'playing' | 'paused' | 'ended' | 'error' = 'paused';

  const release = () => {
    URL.revokeObjectURL(object_url);
    if (current_audio === audio) {
      current_audio = null;
      current_release = null;
    }
  };

  const activate = () => {
    if (current_audio && current_audio !== audio) {
      current_audio.pause();
      current_release?.();
    }
    current_audio = audio;
    current_release = release;
  };

  audio.onplay = () => {
    state = 'playing';
    on_started?.();
  };
  audio.onpause = () => {
    if (state === 'ended' || state === 'error') {
      return;
    }
    state = 'paused';
    on_paused?.();
  };
  audio.onended = () => {
    state = 'ended';
    release();
    on_ended?.();
  };
  audio.onerror = (event) => {
    state = 'error';
    release();
    on_error?.(event);
  };

  const resume = async () => {
    activate();
    try {
      await audio.play();
    } catch (error) {
      state = 'error';
      release();
      on_error?.(error);
      throw error;
    }
  };

  void resume().catch(() => undefined);

  return {
    stop: () => {
      state = 'ended';
      audio.pause();
      release();
    },
    pause: () => {
      if (state === 'playing') {
        audio.pause();
      }
    },
    resume,
    restart: async () => {
      audio.currentTime = 0;
      await resume();
    },
    getState: () => state,
  };
}

export function sanitizeDownloadFilename(name: string): string {
  const cleaned = [...name]
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code < 32 || '<>:"/\\|?*'.includes(char)) {
        return '_';
      }
      return char;
    })
    .join('')
    .trim();
  return cleaned || 'audio.mp3';
}

export function buildAudioFilename(
  message_id: number,
  index: number,
  format: 'mp3' | 'wav' = 'mp3',
): string {
  return sanitizeDownloadFilename(`tavern_multi_tts_${message_id}_${index}.${format}`);
}

export function downloadBlob(blob: Blob, filename: string) {
  const safe_name = sanitizeDownloadFilename(filename);
  const object_url = URL.createObjectURL(blob);
  const revoke = URL.revokeObjectURL.bind(URL);
  const anchor = document.createElement('a');
  anchor.href = object_url;
  anchor.download = safe_name;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => revoke(object_url), 0);
}
