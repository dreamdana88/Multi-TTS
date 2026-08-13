import { TtsRequestError } from './request-error';

export type FetchLike = (input: string, init?: RequestInit) => Promise<Response>;

export type TimedHttpResponse = {
  ok: boolean;
  status: number;
  statusText: string;
  headers: Headers;
  json(): Promise<unknown>;
  text(): Promise<string>;
  blob(): Promise<Blob>;
  close(): void;
};

function timeoutError(timeout_ms: number) {
  return new TtsRequestError(`请求超时（${timeout_ms}ms），请检查网络或增大超时时间`, 'timeout');
}

function cancelError() {
  return new TtsRequestError('请求已取消', 'cancelled');
}

export async function fetchWithTimeout(
  fetch_impl: FetchLike,
  url: string,
  init: RequestInit,
  timeout_ms: number,
): Promise<TimedHttpResponse> {
  const controller = new AbortController();
  let timed_out = false;
  let finished = false;
  let reject_pending: ((error: TtsRequestError) => void) | null = null;

  const finish = () => {
    if (finished) {
      return;
    }
    finished = true;
    clearTimeout(timeout_id);
    external?.removeEventListener('abort', on_external_abort);
  };

  const abort_reason = () => {
    if (timed_out && !external?.aborted) {
      return timeoutError(timeout_ms);
    }
    return cancelError();
  };

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

  const on_controller_abort = () => {
    reject_pending?.(abort_reason());
  };
  controller.signal.addEventListener('abort', on_controller_abort);

  const wait_for_abort = () =>
    new Promise<never>((_resolve, reject) => {
      if (controller.signal.aborted) {
        reject(abort_reason());
        return;
      }
      reject_pending = reject;
    });

  const read_with_timeout = async <T>(operation: Promise<T>): Promise<T> => {
    try {
      return await Promise.race([operation, wait_for_abort()]);
    } catch (error) {
      if (error instanceof TtsRequestError) {
        throw error;
      }
      if (controller.signal.aborted) {
        throw abort_reason();
      }
      throw error;
    } finally {
      finish();
      controller.signal.removeEventListener('abort', on_controller_abort);
    }
  };

  try {
    const response = await Promise.race([
      fetch_impl(url, {
        ...init,
        signal: controller.signal,
      }),
      wait_for_abort(),
    ]);

    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      text: () => read_with_timeout(response.text()),
      async json() {
        const text = await read_with_timeout(response.text());
        try {
          return JSON.parse(text) as unknown;
        } catch {
          throw new TtsRequestError(
            '服务返回的不是合法 JSON，请检查地址或稍后重试',
            'invalid_json',
          );
        }
      },
      blob: () => read_with_timeout(response.blob()),
      close: finish,
    };
  } catch (error) {
    finish();
    controller.signal.removeEventListener('abort', on_controller_abort);
    if (error instanceof TtsRequestError) {
      throw error;
    }
    if (controller.signal.aborted) {
      throw abort_reason();
    }
    throw error;
  }
}

export function joinUrl(base: string, path: string): string {
  return `${base.replace(/\/+$/, '')}${path.startsWith('/') ? '' : '/'}${path}`;
}

export function normalizeServiceOrigin(base_url: string): string {
  const trimmed = base_url.trim();
  try {
    return new URL(trimmed.includes('://') ? trimmed : `http://${trimmed}`).origin;
  } catch {
    return trimmed.replace(/\/+$/, '');
  }
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
