import { describe, expect, it, vi } from 'vitest';
import {
  MINIMAX_TTS_ENDPOINTS,
  TtsRequestError,
  buildMinimaxAuthHeader,
  buildMinimaxT2aPayload,
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
  it('builds the same t2a payload shape as the old script', () => {
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

  it('sends Authorization and the constructed body to the first endpoint', async () => {
    const fetch_impl = vi.fn(async (url: string, init?: RequestInit) => {
      expect(url).toBe(MINIMAX_TTS_ENDPOINTS[0]);
      expect(init?.headers).toMatchObject({
        Authorization: 'Bearer test-key',
        'Content-Type': 'application/json',
      });
      const body = JSON.parse(String(init?.body)) as { text: string; group_id: string };
      expect(body).toMatchObject({ text: '你好', group_id: 'group-1' });
      return jsonResponse({
        data: { audio: '00ff' },
        base_resp: { status_code: 0 },
      });
    });

    const blob = await createMinimaxAdapter({ fetchImpl: fetch_impl }).synthesize(sampleRequest());
    expect(blob.size).toBe(2);
    expect(blob.type).toBe('audio/mpeg');
    expect(fetch_impl).toHaveBeenCalledTimes(1);
  });

  it('rejects missing fields without putting the key in the message', async () => {
    await expect(
      createMinimaxAdapter({ fetchImpl: vi.fn() }).synthesize(
        sampleRequest({ apiKey: '', groupId: '', voiceId: '' }),
      ),
    ).rejects.toMatchObject({ code: 'config' });
  });

  it('maps timeout, cancel, non-2xx, invalid JSON, and missing audio', async () => {
    const adapter = createMinimaxAdapter({
      fetchImpl: async () => new Promise(() => undefined),
    });
    await expect(adapter.synthesize(sampleRequest({ timeoutMs: 20 }))).rejects.toMatchObject({
      code: 'timeout',
    });

    const controller = new AbortController();
    const hanging = createMinimaxAdapter({
      fetchImpl: async (_url, init) =>
        new Promise((_, reject) => {
          init?.signal?.addEventListener('abort', () => reject(init.signal?.reason));
        }),
    }).synthesize(sampleRequest({ signal: controller.signal, timeoutMs: 1000 }));
    controller.abort('cancelled');
    await expect(hanging).rejects.toMatchObject({ code: 'cancelled' });

    await expect(
      createMinimaxAdapter({
        fetchImpl: async () =>
          jsonResponse({ base_resp: { status_code: 2013, status_msg: 'invalid token' } }, 401),
      }).synthesize(sampleRequest()),
    ).rejects.toBeInstanceOf(TtsRequestError);

    await expect(
      createMinimaxAdapter({
        fetchImpl: async () =>
          new Response('not-json', {
            status: 200,
            headers: { 'content-type': 'application/json' },
          }),
      }).synthesize(sampleRequest()),
    ).rejects.toMatchObject({ code: 'invalid_json' });

    await expect(
      createMinimaxAdapter({
        fetchImpl: async () => jsonResponse({ data: {}, base_resp: { status_code: 0 } }),
      }).synthesize(sampleRequest()),
    ).rejects.toMatchObject({ code: 'missing_audio' });
  });
});
