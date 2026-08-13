import { TtsRequestError } from './request-error';

export type FetchLike = (input: string, init?: RequestInit) => Promise<Response>;

export async function fetchWithTimeout(
  fetch_impl: FetchLike,
  url: string,
  init: RequestInit,
  timeout_ms: number,
): Promise<Response> {
  const controller = new AbortController();
  let timed_out = false;
  const timeout_id = setTimeout(() => {
    timed_out = true;
    controller.abort('timeout');
  }, timeout_ms);

  const external = init.signal;
  const on_external_abort = () => {
    controller.abort(external?.reason ?? 'cancelled');
  };
  if (external) {
    if (external.aborted) {
      controller.abort(external.reason ?? 'cancelled');
    } else {
      external.addEventListener('abort', on_external_abort, { once: true });
    }
  }

  let settled = false;
  try {
    const abort_error = new Promise<never>((_resolve, reject) => {
      const reject_for_abort = () => {
        if (settled) {
          return;
        }
        if (timed_out && !external?.aborted) {
          reject(
            new TtsRequestError(`请求超时（${timeout_ms}ms），请检查网络或增大超时时间`, 'timeout'),
          );
          return;
        }
        reject(new TtsRequestError('请求已取消', 'cancelled'));
      };
      if (controller.signal.aborted) {
        reject_for_abort();
        return;
      }
      controller.signal.addEventListener('abort', reject_for_abort, { once: true });
    });

    const response = await Promise.race([
      fetch_impl(url, {
        ...init,
        signal: controller.signal,
      }),
      abort_error,
    ]);
    settled = true;
    return response;
  } catch (error) {
    settled = true;
    if (error instanceof TtsRequestError) {
      throw error;
    }
    if (controller.signal.aborted) {
      if (timed_out && !external?.aborted) {
        throw new TtsRequestError(
          `请求超时（${timeout_ms}ms），请检查网络或增大超时时间`,
          'timeout',
        );
      }
      throw new TtsRequestError('请求已取消', 'cancelled');
    }
    throw error;
  } finally {
    clearTimeout(timeout_id);
    external?.removeEventListener('abort', on_external_abort);
  }
}

export async function readJsonBody(response: Response): Promise<unknown> {
  const text = await response.text();
  try {
    return JSON.parse(text) as unknown;
  } catch {
    throw new TtsRequestError('服务返回的不是合法 JSON，请检查地址或稍后重试', 'invalid_json');
  }
}

export function joinUrl(base: string, path: string): string {
  return `${base.replace(/\/+$/, '')}${path.startsWith('/') ? '' : '/'}${path}`;
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
