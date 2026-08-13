import { describe, expect, it, vi } from 'vitest';
import {
  buildLocalGsviSpeechAttempts,
  createLocalGsviAdapter,
  parseGsviModelSelection,
} from '../engines';
import type { LocalGsviSynthesisRequest } from '../engines';

function sampleRequest(
  overrides: Partial<LocalGsviSynthesisRequest> = {},
): LocalGsviSynthesisRequest {
  return {
    engine: 'local_gsvi',
    text: 'こんにちは',
    baseUrl: 'http://127.0.0.1:9880',
    authToken: 'gsvi-token',
    modelId: 'mori|v2Pro',
    language: 'ja',
    emotion: 'neutral',
    format: 'mp3',
    speed: 1,
    topK: 20,
    topP: 0.7,
    temperature: 0.7,
    textLang: '日语',
    textSplitMethod: '按标点符号切',
    batchSize: 1,
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

describe('Local-GSVI request construction', () => {
  it('parses modelName|version and builds the old candidate sequence', () => {
    expect(parseGsviModelSelection('mori|v2Pro')).toEqual({ modelName: 'mori', version: 'v2Pro' });
    const attempts = buildLocalGsviSpeechAttempts(sampleRequest());
    expect(attempts.url).toBe('http://127.0.0.1:9880/v1/audio/speech');
    expect(attempts.candidates.map((item) => item.label)).toEqual([
      'inline-ref-1',
      'inline-ref-2-voice-override',
      'gsvi-model-id-with-other-params',
      'raw-model-name-with-other-params',
      'legacy-extra-shape',
      'minimal-openai',
    ]);
    expect(attempts.candidates[0].payload).toMatchObject({
      model: 'GSVI-v2Pro',
      input: 'こんにちは',
      voice: 'mori',
      response_format: 'mp3',
      other_params: {
        prompt_lang: 'ja',
        emotion: 'neutral',
        text_lang: '日语',
      },
    });
  });

  it('posts the first candidate with an optional bearer token', async () => {
    const fetch_impl = vi.fn(async (url: string, init?: RequestInit) => {
      expect(url).toBe('http://127.0.0.1:9880/v1/audio/speech');
      expect(init?.headers).toMatchObject({
        Authorization: 'Bearer gsvi-token',
        'Content-Type': 'application/json',
      });
      const body = JSON.parse(String(init?.body)) as { model: string; input: string };
      expect(body.model).toBe('GSVI-v2Pro');
      expect(body.input).toBe('こんにちは');
      return jsonResponse({ audio: 'QUJDREVGR0hJSktMTU5PUA==' });
    });

    const blob = await createLocalGsviAdapter({ fetchImpl: fetch_impl }).synthesize(
      sampleRequest(),
    );
    expect(blob.type).toBe('audio/mpeg');
    expect(fetch_impl).toHaveBeenCalledTimes(1);
  });

  it('rejects incomplete mapping and missing URL', async () => {
    await expect(
      createLocalGsviAdapter({ fetchImpl: vi.fn() }).synthesize(sampleRequest({ baseUrl: '' })),
    ).rejects.toMatchObject({ code: 'config' });
    await expect(
      createLocalGsviAdapter({ fetchImpl: vi.fn() }).synthesize(
        sampleRequest({ language: '', emotion: '' }),
      ),
    ).rejects.toMatchObject({ code: 'config' });
  });

  it('maps timeout, cancel, non-2xx, invalid JSON, and missing audio', async () => {
    await expect(
      createLocalGsviAdapter({
        fetchImpl: async () => new Promise(() => undefined),
      }).synthesize(sampleRequest({ timeoutMs: 20 })),
    ).rejects.toMatchObject({ code: 'timeout' });

    const controller = new AbortController();
    const hanging = createLocalGsviAdapter({
      fetchImpl: async (_url, init) =>
        new Promise((_, reject) => {
          init?.signal?.addEventListener('abort', () => reject(init.signal?.reason));
        }),
    }).synthesize(sampleRequest({ signal: controller.signal, timeoutMs: 1000 }));
    controller.abort('cancelled');
    await expect(hanging).rejects.toMatchObject({ code: 'cancelled' });

    await expect(
      createLocalGsviAdapter({
        fetchImpl: async () => new Response('nope', { status: 503 }),
      }).synthesize(sampleRequest()),
    ).rejects.toMatchObject({ code: 'missing_audio' });

    await expect(
      createLocalGsviAdapter({
        fetchImpl: async () =>
          new Response('not-json', {
            status: 200,
            headers: { 'content-type': 'application/json' },
          }),
      }).synthesize(sampleRequest()),
    ).rejects.toMatchObject({ code: 'invalid_json' });

    await expect(
      createLocalGsviAdapter({
        fetchImpl: async () => jsonResponse({ message: 'no audio here' }),
      }).synthesize(sampleRequest()),
    ).rejects.toMatchObject({ code: 'missing_audio' });
  });
});
