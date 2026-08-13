export const AUDIO_CACHE_DB_NAME = 'tavern_multi_tts_cache';
export const AUDIO_CACHE_STORE_NAME = 'audio_cache';
export const AUDIO_CACHE_DB_VERSION = 1;
export const MAX_CACHE_COUNT = 100;
export const MAX_CACHE_BYTES = 50 * 1024 * 1024;

export type AudioCacheRecord = {
  key: string;
  blob: Blob;
  created_at: number;
};

export type AudioCacheStats = {
  count: number;
  totalBytes: number;
};

export type AudioCacheListItem = {
  key: string;
  size: number;
  createdAt: number;
};

export type AudioCacheListResult = {
  items: AudioCacheListItem[];
  total: number;
  totalBytes: number;
};

export type AudioCacheKeyInput = {
  text: string;
  engine: 'minimax' | 'local_gsvi';
  minimax?: {
    region: 'international' | 'beijing';
    groupId: string;
    model: string;
    voiceId: string;
    speed: number;
    vol: number;
    format: 'mp3';
  };
  localGsvi?: {
    origin: string;
    model: string;
    format: 'mp3' | 'wav';
    useReferenceAudio: boolean;
    character: string;
    language: string;
    emotion: string;
    referenceText: string;
    speed: number;
    topK: number;
    topP: number;
    temperature: number;
    textLang: string;
    textSplitMethod: string;
  };
};

export type AudioCache = {
  get(cache_key: string): Promise<Blob | null>;
  set(cache_key: string, blob: Blob, created_at?: number): Promise<void>;
  delete(cache_key: string): Promise<void>;
  clear(): Promise<void>;
  stats(): Promise<AudioCacheStats>;
  list(page: number, page_size: number): Promise<AudioCacheListResult>;
};

type CacheBackend = {
  get(key: string): Promise<AudioCacheRecord | undefined>;
  put(record: AudioCacheRecord): Promise<void>;
  delete(key: string): Promise<void>;
  clear(): Promise<void>;
  getAll(): Promise<AudioCacheRecord[]>;
};

export function normalizeCacheOrigin(base_url: string): string {
  const trimmed = base_url.trim();
  try {
    return new URL(trimmed.includes('://') ? trimmed : `http://${trimmed}`).origin;
  } catch {
    return trimmed.replace(/\/+$/, '');
  }
}

export async function createAudioCacheKey(input: AudioCacheKeyInput): Promise<string> {
  const scoped =
    input.engine === 'minimax'
      ? {
          text: input.text,
          engine: input.engine,
          region: input.minimax?.region ?? '',
          groupId: input.minimax?.groupId ?? '',
          model: input.minimax?.model ?? '',
          voiceId: input.minimax?.voiceId ?? '',
          speed: input.minimax?.speed,
          vol: input.minimax?.vol,
          format: input.minimax?.format ?? 'mp3',
        }
      : {
          text: input.text,
          engine: input.engine,
          origin: input.localGsvi?.origin ?? '',
          model: input.localGsvi?.model ?? '',
          format: input.localGsvi?.format ?? 'mp3',
          useReferenceAudio: input.localGsvi?.useReferenceAudio ?? false,
          character: input.localGsvi?.character ?? '',
          language: input.localGsvi?.language ?? '',
          emotion: input.localGsvi?.emotion ?? '',
          referenceText: input.localGsvi?.referenceText ?? '',
          speed: input.localGsvi?.speed,
          topK: input.localGsvi?.topK,
          topP: input.localGsvi?.topP,
          temperature: input.localGsvi?.temperature,
          textLang: input.localGsvi?.textLang ?? '',
          textSplitMethod: input.localGsvi?.textSplitMethod ?? '',
        };

  const raw = JSON.stringify(scoped);
  if (
    Object.keys(scoped).some((key) => /api[_-]?key|authorization|token|secret|password/i.test(key))
  ) {
    throw new Error('音频缓存键不得包含密钥字段');
  }
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(raw));
  return [...new Uint8Array(digest)].map((value) => value.toString(16).padStart(2, '0')).join('');
}

function createMemoryBackend(): CacheBackend {
  const records = new Map<string, AudioCacheRecord>();
  return {
    async get(key) {
      return records.get(key);
    },
    async put(record) {
      records.set(record.key, record);
    },
    async delete(key) {
      records.delete(key);
    },
    async clear() {
      records.clear();
    },
    async getAll() {
      return [...records.values()];
    },
  };
}

export function createIndexedDbConnection(indexed_db: IDBFactory, db_name: string) {
  let db: IDBDatabase | null = null;
  let opening: Promise<IDBDatabase> | null = null;
  let open_count = 0;

  function attach(database: IDBDatabase) {
    db = database;
    database.onversionchange = () => {
      database.close();
      if (db === database) {
        db = null;
      }
    };
    const original_onclose = database.onclose;
    database.onclose = (event) => {
      if (db === database) {
        db = null;
      }
      if (typeof original_onclose === 'function') {
        original_onclose.call(database, event);
      }
    };
    return database;
  }

  async function getDb(): Promise<IDBDatabase> {
    if (db) {
      return db;
    }
    if (opening) {
      return await opening;
    }
    opening = new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexed_db.open(db_name, AUDIO_CACHE_DB_VERSION);
      open_count += 1;
      request.onupgradeneeded = () => {
        const next_db = request.result;
        if (!next_db.objectStoreNames.contains(AUDIO_CACHE_STORE_NAME)) {
          next_db.createObjectStore(AUDIO_CACHE_STORE_NAME, { keyPath: 'key' });
        }
      };
      request.onsuccess = () => resolve(attach(request.result));
      request.onerror = () => reject(request.error ?? Error('IndexedDB 打开失败'));
    }).finally(() => {
      opening = null;
    });
    return await opening;
  }

  return {
    getDb,
    close() {
      db?.close();
      db = null;
    },
    getOpenCount() {
      return open_count;
    },
  };
}

function createIndexedDbBackend(indexed_db: IDBFactory, db_name: string): CacheBackend {
  const connection = createIndexedDbConnection(indexed_db, db_name);

  async function openDb(): Promise<IDBDatabase> {
    return await connection.getDb();
  }

  return {
    async get(key) {
      const db = await openDb();
      return await new Promise((resolve, reject) => {
        const tx = db.transaction(AUDIO_CACHE_STORE_NAME, 'readonly');
        const request = tx.objectStore(AUDIO_CACHE_STORE_NAME).get(key);
        request.onsuccess = () => resolve(request.result as AudioCacheRecord | undefined);
        request.onerror = () => reject(request.error ?? Error('读取缓存失败'));
      });
    },
    async put(record) {
      const db = await openDb();
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(AUDIO_CACHE_STORE_NAME, 'readwrite');
        tx.objectStore(AUDIO_CACHE_STORE_NAME).put(record);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error ?? Error('写入缓存失败'));
      });
    },
    async delete(key) {
      const db = await openDb();
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(AUDIO_CACHE_STORE_NAME, 'readwrite');
        tx.objectStore(AUDIO_CACHE_STORE_NAME).delete(key);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error ?? Error('删除缓存失败'));
      });
    },
    async clear() {
      const db = await openDb();
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(AUDIO_CACHE_STORE_NAME, 'readwrite');
        tx.objectStore(AUDIO_CACHE_STORE_NAME).clear();
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error ?? Error('清空缓存失败'));
      });
    },
    async getAll() {
      const db = await openDb();
      return await new Promise((resolve, reject) => {
        const tx = db.transaction(AUDIO_CACHE_STORE_NAME, 'readonly');
        const request = tx.objectStore(AUDIO_CACHE_STORE_NAME).openCursor();
        const records: AudioCacheRecord[] = [];
        request.onsuccess = () => {
          const cursor = request.result;
          if (!cursor) {
            resolve(records);
            return;
          }
          records.push(cursor.value as AudioCacheRecord);
          cursor.continue();
        };
        request.onerror = () => reject(request.error ?? Error('读取缓存记录失败'));
      });
    },
  };
}

async function enforceCacheLimit(backend: CacheBackend) {
  const records = await backend.getAll();
  let total_bytes = records.reduce((sum, item) => sum + (item.blob?.size ?? 0), 0);
  if (records.length <= MAX_CACHE_COUNT && total_bytes <= MAX_CACHE_BYTES) {
    return;
  }

  const sorted = [...records].sort((left, right) => left.created_at - right.created_at);
  let current_count = records.length;
  for (const record of sorted) {
    if (current_count <= MAX_CACHE_COUNT && total_bytes <= MAX_CACHE_BYTES) {
      break;
    }
    await backend.delete(record.key);
    current_count -= 1;
    total_bytes -= record.blob?.size ?? 0;
  }
}

export function createAudioCache(options?: {
  backend?: 'memory' | 'indexeddb';
  indexedDB?: IDBFactory;
  dbName?: string;
}): AudioCache {
  const backend =
    options?.backend === 'memory'
      ? createMemoryBackend()
      : createIndexedDbBackend(
          options?.indexedDB ?? indexedDB,
          options?.dbName ?? AUDIO_CACHE_DB_NAME,
        );

  return {
    async get(cache_key) {
      const record = await backend.get(cache_key);
      return record?.blob ?? null;
    },
    async set(cache_key, blob, created_at = Date.now()) {
      await backend.put({
        key: cache_key,
        blob,
        created_at,
      });
      await enforceCacheLimit(backend);
    },
    async delete(cache_key) {
      await backend.delete(cache_key);
    },
    async clear() {
      await backend.clear();
    },
    async stats() {
      const records = await backend.getAll();
      return {
        count: records.length,
        totalBytes: records.reduce((sum, item) => sum + (item.blob?.size ?? 0), 0),
      };
    },
    async list(page, page_size) {
      const records = await backend.getAll();
      const sorted = records.sort((left, right) => right.created_at - left.created_at);
      const start = Math.max(0, (page - 1) * page_size);
      return {
        items: sorted.slice(start, start + page_size).map((item) => ({
          key: item.key,
          size: item.blob?.size ?? 0,
          createdAt: item.created_at,
        })),
        total: sorted.length,
        totalBytes: sorted.reduce((sum, item) => sum + (item.blob?.size ?? 0), 0),
      };
    },
  };
}

const default_audio_cache = createAudioCache({
  backend: typeof indexedDB === 'undefined' ? 'memory' : 'indexeddb',
});

export function getCachedAudio(cache_key: string): Promise<Blob | null> {
  return default_audio_cache.get(cache_key);
}

export function setCachedAudio(cache_key: string, blob: Blob): Promise<void> {
  return default_audio_cache.set(cache_key, blob);
}

export function clearDefaultAudioCache(): Promise<void> {
  return default_audio_cache.clear();
}

export function getDefaultAudioCacheStats(): Promise<AudioCacheStats> {
  return default_audio_cache.stats();
}
