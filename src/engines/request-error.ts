export type TtsRequestErrorCode =
  'timeout' | 'cancelled' | 'http' | 'invalid_json' | 'missing_audio' | 'config';

export class TtsRequestError extends Error {
  readonly code: TtsRequestErrorCode;
  readonly status?: number;

  constructor(message: string, code: TtsRequestErrorCode, status?: number) {
    super(message);
    this.name = 'TtsRequestError';
    this.code = code;
    this.status = status;
  }
}

export function isTtsRequestError(error: unknown): error is TtsRequestError {
  return error instanceof TtsRequestError;
}
