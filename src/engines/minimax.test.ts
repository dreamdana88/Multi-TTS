import { describe, expect, it, vi } from 'vitest';
import {
  MINIMAX_API_URLS,
  buildMinimaxAuthHeader,
  buildMinimaxT2aPayload,
  buildVoiceCatalogCacheKey,
  createMinimaxAdapter,
  decodeMinimaxAudioString,
} from '../engines';
import type { MinimaxSynthesisRequest } from '../engines';

function sampleRequest(overrides: Partial<MinimaxSynthesisRequest> = {}): MinimaxSynthesisRequest {
  return {
    engine: 'minimax',
    text: '你好',
    apiKey: 'test-key',
    groupId: 'group-1',
    voiceId: 'male-qn-qingse',
    model: 'speech-2.8-hd',
    speed: 1,
    vol: 1,
    region: 'international',
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

describe('MiniMax request construction', () => {
  it('builds the confirmed t2a payload and region URL', () => {
    expect(buildMinimaxT2aPayload(sampleRequest())).toEqual({
      group_id: 'group-1',
      model: 'speech-2.8-hd',
      text: '你好',
      stream: false,
      output_format: 'hex',
      voice_setting: {
        voice_id: 'male-qn-qingse',
        speed: 1,
        vol: 1,
        pitch: 0,
      },
      audio_setting: {
        sample_rate: 32000,
        bitrate: 128000,
        format: 'mp3',
        channel: 1,
      },
    });
    expect(buildMinimaxAuthHeader('Bearer abc')).toBe('Bearer abc');
    expect(decodeMinimaxAudioString('00ff')).toEqual(Uint8Array.from([0, 255]));
  });

  it('sends Authorization to the selected region only', async () => {
    const fetch_impl = vi.fn(async (url: string, init?: RequestInit) => {
      expect(url).toBe(MINIMAX_API_URLS.beijing.tts);
      expect(init?.headers).toMatchObject({
        Authorization: 'Bearer test-key',
        'Content-Type': 'application/json',
      });
      return jsonResponse({
        data: { audio: '00ff' },
        base_resp: { status_code: 0 },
      });
    });

    const blob = await createMinimaxAdapter({ fetchImpl: fetch_impl }).synthesize(
      sampleRequest({ region: 'beijing' }),
    );
    expect(blob.size).toBe(2);
    expect(fetch_impl).toHaveBeenCalledTimes(1);
  });

  it('rejects missing fields without putting the key in the message', async () => {
    await expect(
      createMinimaxAdapter({ fetchImpl: vi.fn() }).synthesize(
        sampleRequest({ apiKey: '', groupId: '', voiceId: '' }),
      ),
    ).rejects.toMatchObject({ code: 'config' });
  });

  it('fails immediately on 401 and does not retry', async () => {
    const fetch_impl = vi.fn(async () =>
      jsonResponse({ base_resp: { status_code: 2013, status_msg: 'invalid token' } }, 401),
    );
    await expect(
      createMinimaxAdapter({ fetchImpl: fetch_impl }).synthesize(sampleRequest()),
    ).rejects.toMatchObject({ code: 'http', status: 401 });
    expect(fetch_impl).toHaveBeenCalledTimes(1);
  });

  it('retries only retryable HTTP statuses', async () => {
    const fetch_impl = vi
      .fn()
      .mockResolvedValueOnce(jsonResponse({ base_resp: { status_msg: 'busy' } }, 429))
      .mockResolvedValueOnce(
        jsonResponse({
          data: { audio: '00ff' },
          base_resp: { status_code: 0 },
        }),
      );

    const blob = await createMinimaxAdapter({ fetchImpl: fetch_impl }).synthesize(sampleRequest());
    expect(blob.size).toBe(2);
    expect(fetch_impl).toHaveBeenCalledTimes(2);
  });

  it('does not retry a cancelled request', async () => {
    const controller = new AbortController();
    const fetch_impl = vi.fn(async (_url, init) => {
      return await new Promise<Response>((_resolve, reject) => {
        init?.signal?.addEventListener('abort', () => reject(new Error('aborted')));
      });
    });
    const pending = createMinimaxAdapter({ fetchImpl: fetch_impl }).synthesize(
      sampleRequest({ signal: controller.signal, timeoutMs: 1000 }),
    );
    controller.abort('cancelled');
    await expect(pending).rejects.toMatchObject({ code: 'cancelled' });
    expect(fetch_impl).toHaveBeenCalledTimes(1);
  });

  it('maps timeout, invalid JSON, and missing audio without retrying missing audio', async () => {
    await expect(
      createMinimaxAdapter({
        fetchImpl: async () => new Promise(() => undefined),
      }).synthesize(sampleRequest({ timeoutMs: 20 })),
    ).rejects.toMatchObject({ code: 'timeout' });

    await expect(
      createMinimaxAdapter({
        fetchImpl: async () =>
          new Response('not-json', {
            status: 200,
            headers: { 'content-type': 'application/json' },
          }),
      }).synthesize(sampleRequest()),
    ).rejects.toMatchObject({ code: 'invalid_json' });

    const missing_audio = vi.fn(async () =>
      jsonResponse({ data: {}, base_resp: { status_code: 0 } }),
    );
    await expect(
      createMinimaxAdapter({ fetchImpl: missing_audio }).synthesize(sampleRequest()),
    ).rejects.toMatchObject({ code: 'missing_audio' });
    expect(missing_audio).toHaveBeenCalledTimes(1);
  });

  it('scopes the voice catalog cache by region and groupId, not by API key', async () => {
    localStorage.clear();
    const fetch_impl = vi.fn(async () =>
      jsonResponse({
        system_voice: [{ voice_id: 'v1', voice_name: 'One' }],
        base_resp: { status_code: 0 },
      }),
    );
    const adapter = createMinimaxAdapter({ fetchImpl: fetch_impl });
    await adapter.listVoices(sampleRequest({ apiKey: 'key-a', groupId: 'group-1' }));
    await adapter.listVoices(sampleRequest({ apiKey: 'key-b', groupId: 'group-1' }));
    expect(fetch_impl).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem(buildVoiceCatalogCacheKey('international', 'group-1'))).toContain(
      'v1',
    );
    expect(localStorage.getItem(buildVoiceCatalogCacheKey('international', 'group-1'))).not.toMatch(
      /key-a|key-b|test-key/i,
    );

    await adapter.listVoices(sampleRequest({ groupId: 'group-2' }));
    expect(fetch_impl).toHaveBeenCalledTimes(2);

    await adapter.listVoices(sampleRequest({ region: 'beijing', groupId: 'group-1' }));
    expect(fetch_impl).toHaveBeenCalledTimes(3);
    const last_url = fetch_impl.mock.lastCall as unknown as [string] | undefined;
    expect(last_url?.[0]).toBe(MINIMAX_API_URLS.beijing.voice);
    localStorage.clear();
  });
});
