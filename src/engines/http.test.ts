import { describe, expect, it } from 'vitest';
import { fetchWithTimeout } from './http';

function hangingBodyResponse(content_type: string) {
  return {
    ok: true,
    status: 200,
    statusText: 'OK',
    headers: new Headers({ 'content-type': content_type }),
    text: () => new Promise<string>(() => undefined),
    blob: () => new Promise<Blob>(() => undefined),
    json: () => new Promise<unknown>(() => undefined),
  } as unknown as Response;
}

describe('fetchWithTimeout', () => {
  it('times out after headers arrive if the JSON body never arrives', async () => {
    const timed = fetchWithTimeout(
      async () => hangingBodyResponse('application/json'),
      'https://example.test/json',
      {},
      30,
    );
    const response = await timed;
    await expect(response.json()).rejects.toMatchObject({ code: 'timeout' });
  });

  it('times out after headers arrive if the blob body never arrives', async () => {
    const response = await fetchWithTimeout(
      async () => hangingBodyResponse('audio/mpeg'),
      'https://example.test/blob',
      {},
      30,
    );
    await expect(response.blob()).rejects.toMatchObject({ code: 'timeout' });
  });

  it('cancels a hanging body read when the caller aborts', async () => {
    const controller = new AbortController();
    const response = await fetchWithTimeout(
      async () => hangingBodyResponse('text/plain'),
      'https://example.test/text',
      { signal: controller.signal },
      1000,
    );
    const pending = response.text();
    controller.abort('cancelled');
    await expect(pending).rejects.toMatchObject({ code: 'cancelled' });
  });
});
