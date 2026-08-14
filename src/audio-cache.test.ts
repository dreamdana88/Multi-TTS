import { describe, expect, it } from 'vitest';
import {
  AUDIO_CACHE_DB_NAME,
  AUDIO_CACHE_STORE_NAME,
  MAX_CACHE_COUNT,
  createAudioCache,
  createAudioCacheKey,
  createIndexedDbConnection,
} from './audio-cache';

function sampleKeyInput(
  overrides: Partial<{
    text: string;
    voiceId: string;
    speed: number;
    region: 'international' | 'beijing';
    groupId: string;
  }> = {},
) {
  return {
    text: overrides.text ?? '你好',
    engine: 'minimax' as const,
    minimax: {
      region: overrides.region ?? 'international',
      groupId: overrides.groupId ?? 'group-1',
      model: 'speech-2.8-hd',
      voiceId: overrides.voiceId ?? 'male-qn-qingse',
      speed: overrides.speed ?? 1,
      vol: 1,
      format: 'mp3' as const,
    },
  };
}

function gsviKeyInput(origin: string, batch_size = 1) {
  return {
    text: '你好',
    engine: 'local_gsvi' as const,
    localGsvi: {
      origin,
      model: 'mori|v2Pro',
      format: 'mp3' as const,
      useReferenceAudio: false,
      character: 'mori',
      language: 'ja',
      emotion: 'neutral',
      referenceText: '',
      speed: 1,
      topK: 20,
      topP: 0.7,
      temperature: 0.7,
      textLang: '日语',
      textSplitMethod: '按标点符号切',
      batchSize: batch_size,
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

  it('isolates MiniMax region and groupId without including the API key', async () => {
    const base = await createAudioCacheKey(sampleKeyInput());
    expect(await createAudioCacheKey(sampleKeyInput({ region: 'beijing' }))).not.toBe(base);
    expect(await createAudioCacheKey(sampleKeyInput({ groupId: 'group-2' }))).not.toBe(base);
    const raw = JSON.stringify(sampleKeyInput());
    expect(raw).not.toMatch(/apiKey|Authorization|token/i);
  });

  it('isolates Local-GSVI by normalized origin', async () => {
    const local = await createAudioCacheKey(gsviKeyInput('http://127.0.0.1:9880'));
    const other = await createAudioCacheKey(gsviKeyInput('http://192.168.1.8:9880'));
    expect(local).not.toBe(other);
  });

  it('changes when Local-GSVI batch size changes', async () => {
    const first = await createAudioCacheKey(gsviKeyInput('http://127.0.0.1:9880', 1));
    const second = await createAudioCacheKey(gsviKeyInput('http://127.0.0.1:9880', 4));
    expect(first).not.toBe(second);
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

function createFakeIndexedDb() {
  const records = new Map<string, unknown>();
  let open_count = 0;
  let current_db: {
    close: () => void;
    onversionchange: ((event: Event) => void) | null;
    onclose: ((event: Event) => void) | null;
  } | null = null;

  const factory = {
    open() {
      open_count += 1;
      const db = {
        objectStoreNames: { contains: () => true },
        onversionchange: null as ((event: Event) => void) | null,
        onclose: null as ((event: Event) => void) | null,
        close() {
          current_db = null;
          db.onclose?.(new Event('close'));
        },
        transaction() {
          const tx = {
            oncomplete: null as (() => void) | null,
            onerror: null as (() => void) | null,
            objectStore() {
              return {
                get(key: string) {
                  const request = {
                    result: records.get(key),
                    onsuccess: null as (() => void) | null,
                    onerror: null as (() => void) | null,
                  };
                  queueMicrotask(() => request.onsuccess?.());
                  return request;
                },
                put(record: { key: string }) {
                  records.set(record.key, record);
                  queueMicrotask(() => tx.oncomplete?.());
                  return {};
                },
                delete(key: string) {
                  records.delete(key);
                  queueMicrotask(() => tx.oncomplete?.());
                  return {};
                },
                clear() {
                  records.clear();
                  queueMicrotask(() => tx.oncomplete?.());
                  return {};
                },
                openCursor() {
                  const values = [...records.values()];
                  let index = 0;
                  const request: {
                    result: { value: unknown; continue: () => void } | null;
                    onsuccess: (() => void) | null;
                    onerror: (() => void) | null;
                  } = {
                    result: null,
                    onsuccess: null,
                    onerror: null,
                  };
                  const emit = () => {
                    if (index < values.length) {
                      const value = values[index];
                      index += 1;
                      request.result = {
                        value,
                        continue() {
                          queueMicrotask(emit);
                        },
                      };
                    } else {
                      request.result = null;
                    }
                    request.onsuccess?.();
                  };
                  queueMicrotask(emit);
                  return request;
                },
              };
            },
          };
          return tx;
        },
      };
      current_db = db;
      const request = {
        result: db,
        error: null,
        onsuccess: null as (() => void) | null,
        onerror: null as (() => void) | null,
        onupgradeneeded: null as (() => void) | null,
      };
      queueMicrotask(() => request.onsuccess?.());
      return request;
    },
  };

  return {
    factory: factory as unknown as IDBFactory,
    get openCount() {
      return open_count;
    },
    triggerVersionChange() {
      current_db?.onversionchange?.(new Event('versionchange'));
    },
  };
}

describe('IndexedDB connection reuse', () => {
  it('reuses one connection and reopens after versionchange', async () => {
    const fake = createFakeIndexedDb();
    const connection = createIndexedDbConnection(fake.factory, AUDIO_CACHE_DB_NAME);
    await connection.getDb();
    await connection.getDb();
    expect(fake.openCount).toBe(1);
    expect(AUDIO_CACHE_STORE_NAME).toBe('audio_cache');

    fake.triggerVersionChange();
    await connection.getDb();
    expect(fake.openCount).toBe(2);
    connection.close();
  });
});
