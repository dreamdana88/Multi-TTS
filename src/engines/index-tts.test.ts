import { describe, expect, it, vi } from 'vitest';
import {
  INDEX_TTS_MODEL,
  buildIndexTtsSpeechPayload,
  createIndexTtsAdapter,
  createLocalGsviAdapter,
  createMinimaxAdapter,
  createTtsAdapter,
} from '../engines';
import type { IndexTtsSynthesisRequest } from '../engines';

function sampleRequest(
  overrides: Partial<IndexTtsSynthesisRequest> = {},
): IndexTtsSynthesisRequest {
  return {
    engine: 'index_tts',
    text: '要生成的台词',
    baseUrl: 'http://127.0.0.1:7860',
    voiceId: 'mori',
    language: 'ZH',
    durationFactor: 1,
    emoWeight: 0.8,
    timeoutMs: 80,
    ...overrides,
  };
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

function wavResponse(bytes: Uint8Array = new Uint8Array([1, 2, 3, 4]), status = 200) {
  const body = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(body).set(bytes);
  return new Response(body, {
    status,
    headers: { 'content-type': 'audio/wav' },
  });
}

const HEALTH_OK = {
  ok: true,
  service: 'indextts',
  api_version: '1',
  model_version: '2.5',
  model_loaded: true,
};

describe('createTtsAdapter factory', () => {
  it('does not cross-wire MiniMax, Local-GSVI, and IndexTTS', () => {
    expect(createTtsAdapter('minimax').id).toBe('minimax');
    expect(createTtsAdapter('local_gsvi').id).toBe('local_gsvi');
    expect(createTtsAdapter('index_tts').id).toBe('index_tts');
    expect(createMinimaxAdapter().id).toBe('minimax');
    expect(createLocalGsviAdapter().id).toBe('local_gsvi');
    expect(createIndexTtsAdapter().id).toBe('index_tts');
  });
});

describe('IndexTTS health', () => {
  it('reports online when the frozen health payload is valid and the model is loaded', async () => {
    const fetch_impl = vi.fn(async (url: string, init?: RequestInit) => {
      expect(url).toBe('http://127.0.0.1:7860/v1/health');
      expect(init?.method).toBe('GET');
      return jsonResponse(HEALTH_OK);
    });
    await expect(
      createIndexTtsAdapter({ fetchImpl: fetch_impl }).checkHealth(sampleRequest()),
    ).resolves.toEqual({
      ok: true,
      message: 'IndexTTS 服务在线，模型已加载（IndexTTS-2.5）',
    });
  });

  it('reports model-not-loaded without treating the service as healthy', async () => {
    const fetch_impl = vi.fn(async () =>
      jsonResponse({
        ...HEALTH_OK,
        model_loaded: false,
      }),
    );
    await expect(
      createIndexTtsAdapter({ fetchImpl: fetch_impl }).checkHealth(sampleRequest()),
    ).resolves.toMatchObject({
      ok: false,
      message: expect.stringContaining('模型尚未加载'),
    });
  });

  it('maps non-2xx, timeout, cancel, and invalid JSON or structure', async () => {
    await expect(
      createIndexTtsAdapter({
        fetchImpl: async () =>
          jsonResponse({ error: { code: 'BUSY', message: 'service busy' } }, 503),
      }).checkHealth(sampleRequest()),
    ).resolves.toMatchObject({
      ok: false,
      message: expect.stringContaining('code=BUSY'),
    });

    await expect(
      createIndexTtsAdapter({
        fetchImpl: async () => new Promise(() => undefined),
      }).checkHealth(sampleRequest({ timeoutMs: 20 })),
    ).resolves.toMatchObject({
      ok: false,
      message: expect.stringContaining('超时'),
    });

    const controller = new AbortController();
    const hanging = createIndexTtsAdapter({
      fetchImpl: async (_url, init) =>
        new Promise((_, reject) => {
          init?.signal?.addEventListener('abort', () => reject(init.signal?.reason));
        }),
    }).checkHealth(sampleRequest({ signal: controller.signal, timeoutMs: 1000 }));
    controller.abort('cancelled');
    await expect(hanging).resolves.toMatchObject({
      ok: false,
      message: expect.stringContaining('取消'),
    });

    await expect(
      createIndexTtsAdapter({
        fetchImpl: async () =>
          new Response('not-json', {
            status: 200,
            headers: { 'content-type': 'application/json' },
          }),
      }).checkHealth(sampleRequest()),
    ).resolves.toMatchObject({
      ok: false,
      message: expect.stringContaining('JSON'),
    });

    await expect(
      createIndexTtsAdapter({
        fetchImpl: async () => jsonResponse({ ok: true }),
      }).checkHealth(sampleRequest()),
    ).resolves.toMatchObject({
      ok: false,
      message: expect.stringContaining('服务名无效'),
    });
  });
});

describe('IndexTTS voices', () => {
  it('parses multiple presets and keeps Chinese names', async () => {
    const fetch_impl = vi.fn(async (url: string, init?: RequestInit) => {
      expect(url).toBe('http://127.0.0.1:7860/v1/voices');
      expect(init?.method).toBe('GET');
      return jsonResponse({
        voices: [
          { id: 'mori', name: 'mori' },
          { id: 'sen', name: '森' },
        ],
      });
    });
    await expect(
      createIndexTtsAdapter({ fetchImpl: fetch_impl }).listVoices(sampleRequest()),
    ).resolves.toEqual([
      { id: 'mori', name: 'mori' },
      { id: 'sen', name: '森' },
    ]);
  });

  it('fails clearly on invalid JSON or structure instead of returning an empty list', async () => {
    await expect(
      createIndexTtsAdapter({
        fetchImpl: async () =>
          new Response('not-json', {
            status: 200,
            headers: { 'content-type': 'application/json' },
          }),
      }).listVoices(sampleRequest()),
    ).rejects.toMatchObject({ code: 'invalid_json' });

    await expect(
      createIndexTtsAdapter({
        fetchImpl: async () => jsonResponse({ items: [] }),
      }).listVoices(sampleRequest()),
    ).rejects.toMatchObject({ code: 'invalid_json' });

    await expect(
      createIndexTtsAdapter({
        fetchImpl: async () => jsonResponse({ voices: [{ name: 'missing-id' }] }),
      }).listVoices(sampleRequest()),
    ).rejects.toMatchObject({ code: 'invalid_json' });
  });
});

describe('IndexTTS speech', () => {
  it('sends exactly the frozen contract fields', async () => {
    const fetch_impl = vi.fn(async (url: string, init?: RequestInit) => {
      expect(url).toBe('http://127.0.0.1:7860/v1/audio/speech');
      expect(init?.method).toBe('POST');
      expect(init?.headers).toEqual({ 'Content-Type': 'application/json' });
      const body = JSON.parse(String(init?.body)) as Record<string, unknown>;
      expect(body).toEqual({
        model: INDEX_TTS_MODEL,
        input: '要生成的台词',
        voice: 'mori',
        response_format: 'wav',
        language: 'ZH',
        duration_factor: 1,
        emo_weight: 0.8,
      });
      expect(Object.keys(body).sort()).toEqual([
        'duration_factor',
        'emo_weight',
        'input',
        'language',
        'model',
        'response_format',
        'voice',
      ]);
      return wavResponse();
    });

    expect(buildIndexTtsSpeechPayload(sampleRequest())).toEqual({
      model: 'IndexTTS-2.5',
      input: '要生成的台词',
      voice: 'mori',
      response_format: 'wav',
      language: 'ZH',
      duration_factor: 1,
      emo_weight: 0.8,
    });
    expect(
      buildIndexTtsSpeechPayload(sampleRequest({ emotion: { 怒: 0.35, 厌恶: 0.15 } })),
    ).toEqual({
      model: 'IndexTTS-2.5',
      input: '要生成的台词',
      voice: 'mori',
      response_format: 'wav',
      language: 'ZH',
      duration_factor: 1,
      emo_weight: 0.8,
      emotion: { 怒: 0.35, 厌恶: 0.15 },
    });
    expect(
      Object.keys(buildIndexTtsSpeechPayload(sampleRequest({ emotion: undefined }))).sort(),
    ).toEqual([
      'duration_factor',
      'emo_weight',
      'input',
      'language',
      'model',
      'response_format',
      'voice',
    ]);
    const blob = await createIndexTtsAdapter({ fetchImpl: fetch_impl }).synthesize(sampleRequest());
    expect(blob.size).toBe(4);
    expect(fetch_impl).toHaveBeenCalledTimes(1);
  });

  it('sends IndexTTS duration_factor and emo_weight from the request', () => {
    expect(
      buildIndexTtsSpeechPayload(sampleRequest({ durationFactor: 1.25, emoWeight: 0.4 })),
    ).toMatchObject({
      duration_factor: 1.25,
      emo_weight: 0.4,
    });
  });

  it('adds emotion only when a sparse map is present', async () => {
    const fetch_impl = vi.fn(async (_url: string, init?: RequestInit) => {
      const body = JSON.parse(String(init?.body)) as Record<string, unknown>;
      expect(body.emotion).toEqual({ 怒: 0.35, 厌恶: 0.15 });
      expect(Object.keys(body).sort()).toEqual([
        'duration_factor',
        'emo_weight',
        'emotion',
        'input',
        'language',
        'model',
        'response_format',
        'voice',
      ]);
      return wavResponse();
    });
    await createIndexTtsAdapter({ fetchImpl: fetch_impl }).synthesize(
      sampleRequest({ emotion: { 怒: 0.35, 厌恶: 0.15 } }),
    );
    expect(fetch_impl).toHaveBeenCalledTimes(1);
  });

  it('accepts audio/wav with parameters and rejects empty or wrong content types', async () => {
    const adapter = createIndexTtsAdapter({
      fetchImpl: async () =>
        new Response(new Uint8Array([9, 8, 7]), {
          status: 200,
          headers: { 'content-type': 'audio/wav; charset=binary' },
        }),
    });
    await expect(adapter.synthesize(sampleRequest())).resolves.toMatchObject({ size: 3 });

    await expect(
      createIndexTtsAdapter({
        fetchImpl: async () =>
          new Response(new Uint8Array(), {
            status: 200,
            headers: { 'content-type': 'audio/wav' },
          }),
      }).synthesize(sampleRequest()),
    ).rejects.toMatchObject({ code: 'missing_audio' });

    await expect(
      createIndexTtsAdapter({
        fetchImpl: async () =>
          new Response(new Uint8Array([1, 2, 3]), {
            status: 200,
            headers: { 'content-type': 'application/json' },
          }),
      }).synthesize(sampleRequest()),
    ).rejects.toMatchObject({ code: 'missing_audio' });
  });

  it('maps frozen errors, illegal error bodies, timeout, and cancel', async () => {
    await expect(
      createIndexTtsAdapter({
        fetchImpl: async () =>
          jsonResponse({ error: { code: 'VOICE_NOT_FOUND', message: 'unknown voice' } }, 404),
      }).synthesize(sampleRequest()),
    ).rejects.toMatchObject({
      code: 'http',
      status: 404,
      message: expect.stringContaining('VOICE_NOT_FOUND'),
    });

    await expect(
      createIndexTtsAdapter({
        fetchImpl: async () => new Response('nope', { status: 502 }),
      }).synthesize(sampleRequest()),
    ).rejects.toMatchObject({
      code: 'http',
      status: 502,
      message: expect.stringContaining('HTTP 502'),
    });

    await expect(
      createIndexTtsAdapter({
        fetchImpl: async () => new Promise(() => undefined),
      }).synthesize(sampleRequest({ timeoutMs: 20 })),
    ).rejects.toMatchObject({ code: 'timeout' });

    const controller = new AbortController();
    const hanging = createIndexTtsAdapter({
      fetchImpl: async (_url, init) =>
        new Promise((_, reject) => {
          init?.signal?.addEventListener('abort', () => reject(init.signal?.reason));
        }),
    }).synthesize(sampleRequest({ signal: controller.signal, timeoutMs: 1000 }));
    controller.abort('cancelled');
    await expect(hanging).rejects.toMatchObject({ code: 'cancelled' });
  });

  it('rejects a request built for another engine', async () => {
    await expect(
      createIndexTtsAdapter({ fetchImpl: vi.fn() }).synthesize({
        engine: 'minimax',
        text: 'x',
        apiKey: 'k',
        groupId: 'g',
        voiceId: 'v',
        model: 'speech-2.8-hd',
        speed: 1,
        vol: 1,
        region: 'international',
        timeoutMs: 80,
      }),
    ).rejects.toMatchObject({ code: 'config' });
  });
});
