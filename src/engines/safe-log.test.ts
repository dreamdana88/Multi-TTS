import { describe, expect, it } from 'vitest';
import { redactSecrets } from './safe-log';

describe('redactSecrets', () => {
  it('redacts credentials and replaces private text with length', () => {
    expect(
      redactSecrets({
        Authorization: 'Bearer super-secret',
        apiKey: 'abc',
        token: 'xyz',
        text: '这是一段不该进日志的台词',
        model: 'speech-2.8-hd',
      }),
    ).toEqual({
      Authorization: '[redacted]',
      apiKey: '[redacted]',
      token: '[redacted]',
      text: '[text len=12]',
      model: 'speech-2.8-hd',
    });
  });
});
