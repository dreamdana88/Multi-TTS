import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  FISH_AUDIO_BRIDGE_API_VERSION,
  FISH_AUDIO_BRIDGE_HEALTH_ENDPOINT,
  FISH_AUDIO_BRIDGE_INCOMPATIBLE_MESSAGE,
  FISH_AUDIO_BRIDGE_MODELS_ENDPOINT,
  FISH_AUDIO_BRIDGE_SPEECH_ENDPOINT,
  FISH_AUDIO_BRIDGE_UNAVAILABLE_MESSAGE,
  buildFishAudioModelUrl,
  buildFishAudioSpeechPayload,
  createFishAudioAdapter,
  createTtsAdapter,
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

function healthResponse(version = FISH_AUDIO_BRIDGE_API_VERSION) {
  return jsonResponse({
    ok: true,
    service: 'multi-tts-fish-bridge',
    api_version: version,
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
  const previous_get_request_headers = (
    globalThis as typeof globalThis & {
      getRequestHeaders?: (options?: { omitContentType?: boolean }) => unknown;
    }
  ).getRequestHeaders;

  beforeEach(() => {
    (
      globalThis as typeof globalThis & {
        getRequestHeaders?: (options?: { omitContentType?: boolean }) => unknown;
      }
    ).getRequestHeaders = () => ({ 'X-CSRF-Token': 'csrf-test' });
  });

  afterEach(() => {
    (
      globalThis as typeof globalThis & {
        getRequestHeaders?: (options?: { omitContentType?: boolean }) => unknown;
      }
    ).getRequestHeaders = previous_get_request_headers;
  });

  it('is independently created by the adapter factory', () => {
    expect(createTtsAdapter('fish_audio').id).toBe('fish_audio');
    expect(createFishAudioAdapter().id).toBe('fish_audio');
  });

  it('uses the same-origin Bridge models route', () => {
    expect(buildFishAudioModelUrl()).toBe(FISH_AUDIO_BRIDGE_MODELS_ENDPOINT);
    expect(buildFishAudioModelUrl()).not.toContain('api.fish.audio');
    expect(buildFishAudioModelUrl()).not.toContain('/proxy/');
  });

  it('checks Bridge health first, then models, without putting the Fish key on health', async () => {
    const calls: Array<{ url: string; init?: RequestInit }> = [];
    const fetch_impl = vi.fn(async (url: string, init?: RequestInit) => {
      calls.push({ url, init });
      if (url === FISH_AUDIO_BRIDGE_HEALTH_ENDPOINT) {
        return healthResponse();
      }
      expect(url).toBe(FISH_AUDIO_BRIDGE_MODELS_ENDPOINT);
      expect(init?.method).toBe('POST');
      expect(init?.credentials).toBe('same-origin');
      expect(init?.headers).toEqual({
        'X-CSRF-Token': 'csrf-test',
        'X-Fish-API-Key': 'fish-secret',
      });
      expect(JSON.stringify(init?.headers)).not.toContain('Authorization');
      return jsonResponse({ items: [] });
    });

    await expect(
      createFishAudioAdapter({ fetchImpl: fetch_impl }).checkHealth(sampleRequest()),
    ).resolves.toEqual({
      ok: true,
      message: 'Fish Audio 服务在线，可用音色模型 0 个',
    });

    expect(calls.map((call) => call.url)).toEqual([
      FISH_AUDIO_BRIDGE_HEALTH_ENDPOINT,
      FISH_AUDIO_BRIDGE_MODELS_ENDPOINT,
    ]);
    expect(calls[0]?.init?.method).toBe('GET');
    expect(calls[0]?.init?.headers).toEqual({ 'X-CSRF-Token': 'csrf-test' });
  });

  it('keeps created models and accepts missing, null, or non-string type values', async () => {
    const listed = await createFishAudioAdapter({
      fetchImpl: async (url: string) =>
        url === FISH_AUDIO_BRIDGE_HEALTH_ENDPOINT
          ? healthResponse()
          : jsonResponse({
              items: [
                { _id: 'tts-1', type: 'tts', state: 'trained', title: '森' },
                { _id: 'tts-created', type: 'tts', state: 'created', title: '快速音色' },
                { _id: 'missing-type', state: 'created', title: '缺省类型' },
                { _id: 'null-type', type: null, state: 'created', title: '空类型' },
                { _id: 'number-type', type: 1, state: 'created', title: '非字符串类型' },
                { _id: 'tts-2', type: 'tts', state: 'failed', title: '失败' },
                { _id: 'tts-5', type: 'tts', state: 'training', title: '训练中' },
                { _id: 'svc-1', type: 'svc', state: 'trained', title: '服务' },
                { _id: '', type: 'tts', state: 'trained', title: '缺少 ID' },
                { _id: 'dmca-1', type: 'tts', state: 'trained', dmca_taken_down: true },
                { _id: 'retiring-1', type: 'tts', state: 'trained', pvc_release_state: 'retiring' },
              ],
            }),
    }).listVoices(sampleRequest());

    expect(listed.map((voice) => voice.id)).toEqual([
      'tts-1',
      'tts-created',
      'missing-type',
      'null-type',
      'number-type',
    ]);
  });

  it('sends the frozen MP3 synthesis fields through Bridge and preserves bracket prompts', async () => {
    const fetch_impl = vi.fn(async (url: string, init?: RequestInit) => {
      expect(url).toBe(FISH_AUDIO_BRIDGE_SPEECH_ENDPOINT);
      expect(init?.method).toBe('POST');
      expect(init?.credentials).toBe('same-origin');
      expect(init?.headers).toEqual({
        'X-CSRF-Token': 'csrf-test',
        'Content-Type': 'application/json',
        'X-Fish-API-Key': 'fish-secret',
      });
      expect(JSON.stringify(init?.headers)).not.toContain('Authorization');
      const body = JSON.parse(String(init?.body)) as Record<string, unknown>;
      expect(body).toEqual({
        text: '[laughing]你居然真的来了。',
        reference_id: 'voice-model-1',
        model: 's2.1-pro',
        format: 'mp3',
        normalize: true,
        latency: 'normal',
        prosody: {
          speed: 1.25,
          volume: -2,
          normalize_loudness: true,
        },
      });
      expect('input' in body).toBe(false);
      expect('voice' in body).toBe(false);
      expect('response_format' in body).toBe(false);
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

  it('reports missing Bridge and incompatible Bridge versions clearly', async () => {
    await expect(
      createFishAudioAdapter({
        fetchImpl: async () => {
          throw new TypeError('Failed to fetch');
        },
      }).synthesize(sampleRequest()),
    ).rejects.toMatchObject({ code: 'config', message: FISH_AUDIO_BRIDGE_UNAVAILABLE_MESSAGE });

    await expect(
      createFishAudioAdapter({
        fetchImpl: async () => new Response('<html>not found</html>', { status: 404 }),
      }).checkHealth(sampleRequest()),
    ).resolves.toEqual({ ok: false, message: FISH_AUDIO_BRIDGE_UNAVAILABLE_MESSAGE });

    await expect(
      createFishAudioAdapter({
        fetchImpl: async () => jsonResponse({ ok: true, api_version: '2' }),
      }).checkHealth(sampleRequest()),
    ).resolves.toEqual({ ok: false, message: FISH_AUDIO_BRIDGE_INCOMPATIBLE_MESSAGE });
  });

  it('maps Bridge-preserved Fish statuses without exposing authorization data', async () => {
    const cases = [
      [401, 'fish_auth_failed', 'API Key 无效'],
      [402, 'fish_billing_unavailable', '余额或套餐不可用'],
      [404, 'fish_reference_not_found', 'reference_id 不存在'],
      [422, 'fish_invalid_request', '请求参数错误'],
      [429, 'fish_rate_limited', '请求频率限制'],
      [503, 'fish_upstream_error', 'Fish Audio 服务异常'],
    ] as const;
    for (const [status, code, message] of cases) {
      await expect(
        createFishAudioAdapter({
          fetchImpl: async () =>
            jsonResponse({ ok: false, code, message: `safe ${message}` }, status),
        }).synthesize(sampleRequest()),
      ).rejects.toMatchObject({
        status,
        message: expect.stringContaining(message),
      });
    }
  });

  it('maps malformed Bridge errors, timeout, and cancellation', async () => {
    await expect(
      createFishAudioAdapter({
        fetchImpl: async () => new Response('not-json', { status: 500 }),
      }).synthesize(sampleRequest()),
    ).rejects.toMatchObject({ code: 'config', message: FISH_AUDIO_BRIDGE_UNAVAILABLE_MESSAGE });

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

  it('performs the health handshake before reporting a missing API key', async () => {
    const fetch_impl = vi.fn(async (_url: string) => healthResponse());
    await expect(
      createFishAudioAdapter({ fetchImpl: fetch_impl }).checkHealth(sampleRequest({ apiKey: '' })),
    ).resolves.toEqual({ ok: false, message: '请先填写 Fish Audio API Key' });
    expect(fetch_impl).toHaveBeenCalledTimes(1);
    expect(fetch_impl.mock.calls[0]?.[0]).toBe(FISH_AUDIO_BRIDGE_HEALTH_ENDPOINT);
  });
});
