import { describe, expect, it, vi } from 'vitest';
import {
  FISH_AUDIO_MODEL_ENDPOINT,
  FISH_AUDIO_PROXY_ERROR_MESSAGE,
  FISH_AUDIO_TTS_ENDPOINT,
  buildFishAudioModelUrl,
  buildFishAudioSpeechPayload,
  createFishAudioAdapter,
  createTtsAdapter,
  toSillyTavernProxyUrl,
} from '../engines';
import type { FishAudioSynthesisRequest } from '../engines';

function sampleRequest(
  overrides: Partial<FishAudioSynthesisRequest> = {},
): FishAudioSynthesisRequest {
  return {
    engine: 'fish_audio',
    text: '需要生成的台词',
    apiKey: 'fish-secret',
    model: 's2.1-pro-free',
    referenceId: 'voice-model-1',
    speed: 1,
    volume: 0,
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

function mp3Response(bytes: Uint8Array = new Uint8Array([1, 2, 3])) {
  const body = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(body).set(bytes);
  return new Response(body, {
    status: 200,
    headers: { 'content-type': 'audio/mpeg; charset=binary' },
  });
}

describe('Fish Audio adapter', () => {
  it('is independently created by the adapter factory', () => {
    expect(createTtsAdapter('fish_audio').id).toBe('fish_audio');
    expect(createFishAudioAdapter().id).toBe('fish_audio');
  });

  it('builds the official private model-list query', () => {
    expect(buildFishAudioModelUrl()).toBe(
      `${FISH_AUDIO_MODEL_ENDPOINT}?self=true&page_size=100&page_number=1`,
    );
  });

  it('encodes the complete Fish target URL for the SillyTavern proxy', () => {
    const target = buildFishAudioModelUrl();
    const proxy_url = toSillyTavernProxyUrl(target);

    expect(proxy_url).toBe(`/proxy/${encodeURIComponent(target)}`);
    expect(decodeURIComponent(proxy_url.slice('/proxy/'.length))).toBe(target);
  });

  it('checks the connection through model listing with Bearer authorization', async () => {
    const fetch_impl = vi.fn(async (url: string, init?: RequestInit) => {
      expect(url).toBe(
        toSillyTavernProxyUrl(`${FISH_AUDIO_MODEL_ENDPOINT}?self=true&page_size=100&page_number=1`),
      );
      expect(init?.method).toBe('GET');
      expect(init?.headers).toEqual({ Authorization: 'Bearer fish-secret' });
      return jsonResponse({ items: [] });
    });

    await expect(
      createFishAudioAdapter({ fetchImpl: fetch_impl }).checkHealth(sampleRequest()),
    ).resolves.toEqual({
      ok: true,
      message: 'Fish Audio 服务在线，可用音色模型 0 个',
    });
  });

  it('keeps only TTS models with usable state and uses title before id', async () => {
    const listed = await createFishAudioAdapter({
      fetchImpl: async () =>
        jsonResponse({
          items: [
            { _id: 'tts-1', type: 'tts', state: 'trained', title: '森' },
            { _id: 'tts-created', type: 'tts', state: 'created', title: '快速音色' },
            { _id: 'tts-2', type: 'tts', state: 'failed', title: '失败' },
            { _id: 'tts-5', type: 'tts', state: 'training', title: '训练中' },
            { _id: 'svc-1', type: 'svc', state: 'trained', title: '服务' },
            { _id: '', type: 'tts', state: 'trained', title: '缺少 ID' },
            { _id: 'tts-3', type: 'tts', state: 'trained', dmca_taken_down: true },
            { _id: 'tts-4', type: 'tts', state: 'trained', pvc_release_state: 'retiring' },
          ],
        }),
    }).listVoices(sampleRequest());

    expect(listed).toEqual([
      {
        id: 'tts-1',
        name: '森',
        description: undefined,
        source: 'fish_audio',
        language: undefined,
        languages: undefined,
      },
      {
        id: 'tts-created',
        name: '快速音色',
        description: undefined,
        source: 'fish_audio',
        language: undefined,
        languages: undefined,
      },
    ]);
  });

  it('sends only the frozen MP3 synthesis fields and preserves bracket prompts', async () => {
    const fetch_impl = vi.fn(async (url: string, init?: RequestInit) => {
      expect(url).toBe(toSillyTavernProxyUrl(FISH_AUDIO_TTS_ENDPOINT));
      expect(init?.method).toBe('POST');
      expect(init?.headers).toEqual({
        Authorization: 'Bearer fish-secret',
        'Content-Type': 'application/json',
        model: 's2.1-pro',
      });
      const body = JSON.parse(String(init?.body)) as Record<string, unknown>;
      expect(body).toEqual({
        text: '[laughing]你居然真的来了。',
        reference_id: 'voice-model-1',
        format: 'mp3',
        normalize: true,
        latency: 'normal',
        prosody: {
          speed: 1.25,
          volume: -2,
          normalize_loudness: true,
        },
      });
      expect(Object.keys(body).sort()).toEqual([
        'format',
        'latency',
        'normalize',
        'prosody',
        'reference_id',
        'text',
      ]);
      return mp3Response();
    });

    const request = sampleRequest({
      text: '[laughing]你居然真的来了。',
      model: 's2.1-pro',
      speed: 1.25,
      volume: -2,
    });
    expect(buildFishAudioSpeechPayload(request)).toEqual({
      text: '[laughing]你居然真的来了。',
      reference_id: 'voice-model-1',
      format: 'mp3',
      normalize: true,
      latency: 'normal',
      prosody: {
        speed: 1.25,
        volume: -2,
        normalize_loudness: true,
      },
    });
    const blob = await createFishAudioAdapter({ fetchImpl: fetch_impl }).synthesize(request);
    expect(blob.type).toBe('audio/mpeg');
    expect(blob.size).toBe(3);
  });

  it('does not log the API key and rejects non-MP3 or empty audio', async () => {
    const log = vi.spyOn(console, 'info').mockImplementation(() => undefined);
    try {
      await expect(
        createFishAudioAdapter({
          fetchImpl: async () =>
            new Response(JSON.stringify({ ok: true }), {
              status: 200,
              headers: { 'content-type': 'application/json' },
            }),
        }).synthesize(sampleRequest()),
      ).rejects.toMatchObject({ code: 'missing_audio' });
      expect(log.mock.calls.flat().join(' ')).not.toContain('fish-secret');

      await expect(
        createFishAudioAdapter({
          fetchImpl: async () =>
            new Response(new Uint8Array(), {
              status: 200,
              headers: { 'content-type': 'audio/mpeg' },
            }),
        }).synthesize(sampleRequest()),
      ).rejects.toMatchObject({ code: 'missing_audio' });
    } finally {
      log.mockRestore();
    }
  });

  it('explains when the SillyTavern CORS proxy is unavailable', async () => {
    expect(FISH_AUDIO_PROXY_ERROR_MESSAGE).toBe(
      'Fish Audio 需要启用 SillyTavern CORS 代理。\n请在 config.yaml 中设置 enableCorsProxy: true，并重启 SillyTavern。',
    );

    await expect(
      createFishAudioAdapter({
        fetchImpl: async () => {
          throw new TypeError('Failed to fetch');
        },
      }).synthesize(sampleRequest()),
    ).rejects.toMatchObject({ code: 'config', message: FISH_AUDIO_PROXY_ERROR_MESSAGE });

    await expect(
      createFishAudioAdapter({
        fetchImpl: async () =>
          jsonResponse({ error: 'CORS proxy is not enabled; set enableCorsProxy: true' }, 502),
      }).checkHealth(sampleRequest()),
    ).resolves.toEqual({ ok: false, message: FISH_AUDIO_PROXY_ERROR_MESSAGE });
  });

  it('maps HTTP statuses without exposing authorization data', async () => {
    const cases = [
      [401, 'API Key 无效'],
      [402, '余额或套餐不可用'],
      [404, 'reference_id 不存在'],
      [422, '请求参数错误'],
      [429, '请求频率限制'],
      [503, 'Fish Audio 服务异常'],
    ] as const;
    for (const [status, message] of cases) {
      await expect(
        createFishAudioAdapter({
          fetchImpl: async () => jsonResponse({ message: 'server detail' }, status),
        }).synthesize(sampleRequest()),
      ).rejects.toMatchObject({ status, message: expect.stringContaining(message) });
    }
  });

  it('maps malformed error bodies, timeout, and cancellation', async () => {
    await expect(
      createFishAudioAdapter({
        fetchImpl: async () => new Response('not-json', { status: 500 }),
      }).synthesize(sampleRequest()),
    ).rejects.toMatchObject({ code: 'invalid_json', status: 500 });

    await expect(
      createFishAudioAdapter({ fetchImpl: async () => new Promise(() => undefined) }).synthesize(
        sampleRequest({ timeoutMs: 20 }),
      ),
    ).rejects.toMatchObject({ code: 'timeout' });

    const controller = new AbortController();
    const pending = createFishAudioAdapter({
      fetchImpl: async (_url, init) =>
        new Promise((_, reject) => {
          init?.signal?.addEventListener('abort', () => reject(init.signal?.reason));
        }),
    }).synthesize(sampleRequest({ signal: controller.signal, timeoutMs: 1000 }));
    controller.abort('cancelled');
    await expect(pending).rejects.toMatchObject({ code: 'cancelled' });
  });
});
