import { LOG_PREFIX } from '../extension-meta';

const SENSITIVE_KEY = /api[_-]?key|authorization|token|secret|cookie|password/i;

export function redactSecrets(value: unknown): unknown {
  if (typeof value === 'string') {
    return value.length > 80 ? `${value.slice(0, 80)}…(len=${value.length})` : value;
  }
  if (Array.isArray(value)) {
    return value.map((item) => redactSecrets(item));
  }
  if (!value || typeof value !== 'object') {
    return value;
  }

  const output: Record<string, unknown> = {};
  for (const [key, item] of Object.entries(value)) {
    if (SENSITIVE_KEY.test(key)) {
      output[key] = '[redacted]';
      continue;
    }
    if (key === 'text' || key === 'input' || key === 'referenceText' || key === 'reference_text') {
      output[key] = typeof item === 'string' ? `[text len=${item.length}]` : '[text]';
      continue;
    }
    output[key] = redactSecrets(item);
  }
  return output;
}

export function logEngineInfo(engine_id: string, message: string, details?: unknown) {
  if (details === undefined) {
    console.info(`${LOG_PREFIX} [${engine_id}] ${message}`);
    return;
  }
  console.info(`${LOG_PREFIX} [${engine_id}] ${message}`, redactSecrets(details));
}

export function logEngineWarn(engine_id: string, message: string, details?: unknown) {
  if (details === undefined) {
    console.warn(`${LOG_PREFIX} [${engine_id}] ${message}`);
    return;
  }
  console.warn(`${LOG_PREFIX} [${engine_id}] ${message}`, redactSecrets(details));
}
