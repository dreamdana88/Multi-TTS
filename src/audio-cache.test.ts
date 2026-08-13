import { describe, expect, it } from 'vitest';
import {
  AUDIO_CACHE_DB_NAME,
  MAX_CACHE_COUNT,
  createAudioCache,
  createAudioCacheKey,
} from './audio-cache';

function sampleKeyInput(overrides: Partial<{ text: string; voiceId: string; speed: number }> = {}) {
  return {
    text: overrides.text ?? '你好',
    engine: 'minimax' as const,
    minimax: {
      model: 'speech-2.8-hd',
      voiceId: overrides.voiceId ?? 'male-qn-qingse',
      speed: overrides.speed ?? 1,
      vol: 1,
      format: 'mp3' as const,
    },
    localGsvi: {
      model: '',
      format: 'mp3' as const,
      useReferenceAudio: false,
      character: '',
      language: 'ja',
      emotion: '',
      referenceText: '',
      speed: 1,
      topK: 20,
      topP: 0.7,
      temperature: 0.7,
      textLang: '多语种混合',
      textSplitMethod: '按标点符号切',
    },
  };
}

describe('createAudioCacheKey', () => {
  it('is stable for the same audio-affecting fields', async () => {
    const first = await createAudioCacheKey(sampleKeyInput());
    const second = await createAudioCacheKey(sampleKeyInput());
    expect(first).toBe(second);
    expect(first).toMatch(/^[0-9a-f]{64}$/);
  });

  it('changes when text, voice, or speed changes', async () => {
    const base = await createAudioCacheKey(sampleKeyInput());
    expect(await createAudioCacheKey(sampleKeyInput({ text: '另一句' }))).not.toBe(base);
    expect(await createAudioCacheKey(sampleKeyInput({ voiceId: 'other' }))).not.toBe(base);
    expect(await createAudioCacheKey(sampleKeyInput({ speed: 1.2 }))).not.toBe(base);
  });
});

describe('memory audio cache', () => {
  it('round-trips blobs and reports stats', async () => {
    const cache = createAudioCache({ backend: 'memory' });
    const blob = new Blob(['abc'], { type: 'audio/mpeg' });
    await cache.set('k1', blob);

    const stored = await cache.get('k1');
    expect(stored).toBeTruthy();
    expect(stored?.size).toBe(3);
    expect(stored?.type).toBe('audio/mpeg');
    expect(await cache.stats()).toEqual({ count: 1, totalBytes: 3 });
  });

  it('evicts oldest entries when the count limit is exceeded', async () => {
    const cache = createAudioCache({ backend: 'memory' });
    for (let index = 0; index < MAX_CACHE_COUNT + 2; index += 1) {
      await cache.set(`k${index}`, new Blob(['x'], { type: 'audio/mpeg' }), index + 1);
    }

    expect(await cache.get('k0')).toBeNull();
    expect(await cache.get('k1')).toBeNull();
    expect(await cache.get('k2')).toBeTruthy();
    expect((await cache.stats()).count).toBe(MAX_CACHE_COUNT);
  });

  it('clears all entries', async () => {
    const cache = createAudioCache({ backend: 'memory' });
    await cache.set('k1', new Blob(['a']));
    await cache.clear();
    expect(await cache.get('k1')).toBeNull();
    expect(await cache.stats()).toEqual({ count: 0, totalBytes: 0 });
  });

  it('uses a new database name that does not collide with the old script', () => {
    expect(AUDIO_CACHE_DB_NAME).toBe('tavern_multi_tts_cache');
    expect(AUDIO_CACHE_DB_NAME).not.toBe('minimax_tts_cache');
  });
});
