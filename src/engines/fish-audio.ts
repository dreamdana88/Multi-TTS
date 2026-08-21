import { fetchWithTimeout, type FetchLike, type TimedHttpResponse } from './http';
import { TtsRequestError } from './request-error';
import { logEngineInfo } from './safe-log';
import {
  FISH_AUDIO_MODELS,
  type EngineHealth,
  type FishAudioModel,
  type FishAudioSynthesisRequest,
  type TtsEngineAdapter,
  type VoiceDescriptor,
} from './contract';

export const FISH_AUDIO_BRIDGE_HEALTH_ENDPOINT =
  '/api/plugins/multi-tts-fish-bridge/health' as const;
export const FISH_AUDIO_BRIDGE_MODELS_ENDPOINT =
  '/api/plugins/multi-tts-fish-bridge/models' as const;
export const FISH_AUDIO_BRIDGE_SPEECH_ENDPOINT =
  '/api/plugins/multi-tts-fish-bridge/speech' as const;
export const FISH_AUDIO_BRIDGE_API_VERSION = '1' as const;
export const FISH_AUDIO_BRIDGE_UNAVAILABLE_MESSAGE = [
  'Fish Bridge：不可用',
  '未安装桥接，或 SillyTavern 未启用 Server Plugins。',
].join('\n');
export const FISH_AUDIO_BRIDGE_INCOMPATIBLE_MESSAGE = 'Fish Bridge：版本不兼容';

const FISH_AUDIO_AUDIO_TYPES = new Set([
  'audio/mpeg',
  'audio/mp3',
  'audio/mpeg3',
  'audio/x-mpeg',
  'audio/x-mpeg-3',
]);

const FISH_AUDIO_UNAVAILABLE_STATES = new Set([
  'training',
  'failed',
  'deleted',
  'disabled',
  'unavailable',
]);

type HostRequestHeaders = Record<string, string>;
type HostRequestHeadersProvider = (options?: { omitContentType?: boolean }) => unknown;

let host_request_headers_promise: Promise<HostRequestHeaders> | null = null;

export function isFishAudioModel(value: unknown): value is FishAudioModel {
  return (FISH_AUDIO_MODELS as readonly string[]).includes(String(value));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function normalizeFishAudioApiKey(value: string): string {
  return value.replace(/^Bearer\s+/i, '').trim();
}

function normalizeHostRequestHeaders(value: unknown): HostRequestHeaders {
  if (value instanceof Headers) {
    const headers: HostRequestHeaders = {};
    value.forEach((header_value, header_name) => {
      headers[header_name] = header_value;
    });
    return headers;
  }
  if (!isRecord(value)) {
    return {};
  }
  return Object.fromEntries(
    Object.entries(value).filter(
      (entry): entry is [string, string] => typeof entry[1] === 'string',
    ),
  );
}

async function getHostRequestHeaders(): Promise<HostRequestHeaders> {
  const global_provider = (
    globalThis as typeof globalThis & {
      getRequestHeaders?: HostRequestHeadersProvider;
    }
  ).getRequestHeaders;
  if (typeof global_provider === 'function') {
    return normalizeHostRequestHeaders(global_provider({ omitContentType: true }));
  }

  if (typeof window === 'undefined') {
    return {};
  }

  const host_script_path = '/script.js';
  host_request_headers_promise ??= import(/* @vite-ignore */ host_script_path)
    .then((module) => {
      const provider = (module as { getRequestHeaders?: HostRequestHeadersProvider })
        .getRequestHeaders;
      return typeof provider === 'function'
        ? normalizeHostRequestHeaders(provider({ omitContentType: true }))
        : {};
    })
    .catch(() => ({}));
  return await host_request_headers_promise;
}

async function buildBridgeHeaders(api_key?: string, json = false): Promise<HostRequestHeaders> {
  const headers = await getHostRequestHeaders();
  if (json) {
    headers['Content-Type'] = 'application/json';
  }
  if (api_key) {
    headers['X-Fish-API-Key'] = normalizeFishAudioApiKey(api_key);
  }
  return headers;
}

export function buildFishAudioSpeechPayload(request: FishAudioSynthesisRequest) {
  return {
    text: request.text,
    reference_id: request.referenceId.trim(),
    format: 'mp3' as const,
    normalize: true,
    latency: 'normal' as const,
    prosody: {
      speed: request.speed,
      volume: request.volume,
      normalize_loudness: true,
    },
  };
}

export function buildFishAudioModelUrl(): string {
  return FISH_AUDIO_BRIDGE_MODELS_ENDPOINT;
}

function bridgeUnavailable(): TtsRequestError {
  return new TtsRequestError(FISH_AUDIO_BRIDGE_UNAVAILABLE_MESSAGE, 'config');
}

function bridgeIncompatible(): TtsRequestError {
  return new TtsRequestError(FISH_AUDIO_BRIDGE_INCOMPATIBLE_MESSAGE, 'config');
}

async function fetchFishBridge(
  fetch_impl: FetchLike,
  url: string,
  init: RequestInit,
  timeout_ms: number,
): Promise<TimedHttpResponse> {
  try {
    return await fetchWithTimeout(fetch_impl, url, init, timeout_ms);
  } catch (error) {
    if (error instanceof TtsRequestError) {
      throw error;
    }
    throw bridgeUnavailable();
  }
}

function assertFishAudioRequest(request: FishAudioSynthesisRequest) {
  if (!normalizeFishAudioApiKey(request.apiKey)) {
    throw new TtsRequestError('请先填写 Fish Audio API Key', 'config');
  }
  if (!isFishAudioModel(request.model)) {
    throw new TtsRequestError('Fish Audio 仅支持 S2.1 Pro Free 或 S2.1 Pro', 'config');
  }
  if (!request.referenceId.trim()) {
    throw new TtsRequestError('请先填写 Fish Audio 音色模型 ID', 'config');
  }
  if (!request.text.trim()) {
    throw new TtsRequestError('Fish Audio 合成文本为空', 'config');
  }
  if (!Number.isFinite(request.speed) || request.speed < 0.5 || request.speed > 2) {
    throw new TtsRequestError('Fish Audio 语速必须在 0.5 到 2.0 之间', 'config');
  }
  if (!Number.isFinite(request.volume)) {
    throw new TtsRequestError('Fish Audio 音量必须是有限数字', 'config');
  }
}

function statusMessage(status: number, operation: 'models' | 'synthesize'): string {
  if (status === 401) {
    return 'API Key 无效';
  }
  if (status === 402) {
    return '余额或套餐不可用';
  }
  if (status === 404) {
    return operation === 'synthesize' ? 'reference_id 不存在' : '模型列表接口不存在';
  }
  if (status === 422) {
    return '请求参数错误';
  }
  if (status === 429) {
    return '请求频率限制';
  }
  if (status >= 500) {
    return 'Fish Audio 服务异常';
  }
  return `HTTP ${status}`;
}

async function readBridgeError(
  response: TimedHttpResponse,
  operation: 'models' | 'synthesize' | 'health',
): Promise<TtsRequestError> {
  let payload: unknown;
  try {
    payload = await response.json();
  } catch {
    return bridgeUnavailable();
  }
  if (!isRecord(payload)) {
    return bridgeUnavailable();
  }

  const code = typeof payload.code === 'string' ? payload.code : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';
  if (code === 'timeout') {
    return new TtsRequestError(message || '请求超时', 'timeout', response.status);
  }
  if (code === 'cancelled') {
    return new TtsRequestError(message || '请求已取消', 'cancelled', response.status);
  }
  if (code === 'bridge_missing_api_key') {
    return new TtsRequestError('请先填写 Fish Audio API Key', 'config', response.status);
  }
  if (code.startsWith('fish_') && operation !== 'health') {
    const label = statusMessage(response.status, operation);
    return new TtsRequestError(
      message && message.length <= 160
        ? `Fish Audio 请求失败：${label}（${message}）`
        : `Fish Audio 请求失败：${label}`,
      'http',
      response.status,
    );
  }
  return bridgeUnavailable();
}

async function readFishBridgeHealth(
  fetch_impl: FetchLike,
  request: FishAudioSynthesisRequest,
): Promise<void> {
  const response = await fetchFishBridge(
    fetch_impl,
    FISH_AUDIO_BRIDGE_HEALTH_ENDPOINT,
    {
      method: 'GET',
      headers: await buildBridgeHeaders(),
      credentials: 'same-origin',
      signal: request.signal,
    },
    request.timeoutMs,
  );
  try {
    if (!response.ok) {
      throw await readBridgeError(response, 'health');
    }
    let payload: unknown;
    try {
      payload = await response.json();
    } catch {
      throw bridgeUnavailable();
    }
    if (
      !isRecord(payload) ||
      payload.ok !== true ||
      payload.api_version !== FISH_AUDIO_BRIDGE_API_VERSION
    ) {
      if (isRecord(payload) && payload.api_version !== FISH_AUDIO_BRIDGE_API_VERSION) {
        throw bridgeIncompatible();
      }
      throw bridgeUnavailable();
    }
  } finally {
    response.close();
  }
}

function parseFishAudioVoiceCatalog(payload: unknown): VoiceDescriptor[] {
  if (!isRecord(payload) || !Array.isArray(payload.items)) {
    throw new TtsRequestError('Fish Audio 模型列表结构无效：缺少 items 数组', 'invalid_json');
  }

  const voices: VoiceDescriptor[] = [];
  for (const item of payload.items) {
    if (!isRecord(item) || typeof item._id !== 'string' || !item._id.trim()) {
      continue;
    }
    if (typeof item.type === 'string' && item.type !== 'tts') {
      continue;
    }
    if (
      (typeof item.state === 'string' && FISH_AUDIO_UNAVAILABLE_STATES.has(item.state)) ||
      item.dmca_taken_down === true ||
      item.pvc_release_state === 'retiring'
    ) {
      continue;
    }

    const id = item._id.trim();
    const title = typeof item.title === 'string' && item.title.trim() ? item.title.trim() : id;
    const description =
      typeof item.description === 'string' && item.description.trim()
        ? [item.description.trim()]
        : undefined;
    const languages = Array.isArray(item.languages)
      ? item.languages.filter(
          (value): value is string => typeof value === 'string' && Boolean(value.trim()),
        )
      : undefined;
    voices.push({
      id,
      name: title,
      description,
      source: 'fish_audio',
      language: languages?.[0],
      languages,
    });
  }
  return voices;
}

function isAudioMp3ContentType(value: string | null): boolean {
  const media = (value ?? '').split(';')[0]?.trim().toLowerCase();
  return FISH_AUDIO_AUDIO_TYPES.has(media);
}

function toHealthResult(error: unknown): EngineHealth {
  if (error instanceof TtsRequestError) {
    return { ok: false, message: error.message };
  }
  return {
    ok: false,
    message: FISH_AUDIO_BRIDGE_UNAVAILABLE_MESSAGE,
  };
}

export function createFishAudioAdapter(options?: { fetchImpl?: FetchLike }): TtsEngineAdapter {
  const fetch_impl = options?.fetchImpl ?? fetch;

  async function listModels(request: FishAudioSynthesisRequest): Promise<VoiceDescriptor[]> {
    if (request.engine !== 'fish_audio') {
      throw new TtsRequestError('Fish Audio 适配器收到了错误的引擎请求', 'config');
    }
    const api_key = normalizeFishAudioApiKey(request.apiKey);
    if (!api_key) {
      throw new TtsRequestError('请先填写 Fish Audio API Key', 'config');
    }
    const response = await fetchFishBridge(
      fetch_impl,
      buildFishAudioModelUrl(),
      {
        method: 'POST',
        headers: await buildBridgeHeaders(api_key),
        credentials: 'same-origin',
        signal: request.signal,
      },
      request.timeoutMs,
    );
    try {
      if (!response.ok) {
        throw await readBridgeError(response, 'models');
      }
      return parseFishAudioVoiceCatalog(await response.json());
    } catch (error) {
      if (error instanceof TtsRequestError) {
        throw error;
      }
      throw new TtsRequestError('Fish Bridge 返回了无法解析的模型列表', 'invalid_json');
    } finally {
      response.close();
    }
  }

  async function ensureBridge(request: FishAudioSynthesisRequest): Promise<void> {
    if (request.engine !== 'fish_audio') {
      throw new TtsRequestError('Fish Audio 适配器收到了错误的引擎请求', 'config');
    }
    await readFishBridgeHealth(fetch_impl, request);
  }

  return {
    id: 'fish_audio',
    async checkHealth(request) {
      if (request.engine !== 'fish_audio') {
        throw new TtsRequestError('Fish Audio 适配器收到了错误的引擎请求', 'config');
      }
      try {
        await ensureBridge(request);
        const voices = await listModels(request);
        return { ok: true, message: `Fish Audio 服务在线，可用音色模型 ${voices.length} 个` };
      } catch (error) {
        return toHealthResult(error);
      }
    },
    async listVoices(request) {
      if (request.engine !== 'fish_audio') {
        throw new TtsRequestError('Fish Audio 适配器收到了错误的引擎请求', 'config');
      }
      await ensureBridge(request);
      return await listModels(request);
    },
    async synthesize(request) {
      if (request.engine !== 'fish_audio') {
        throw new TtsRequestError('Fish Audio 适配器收到了错误的引擎请求', 'config');
      }
      assertFishAudioRequest(request);
      const payload = buildFishAudioSpeechPayload(request);
      logEngineInfo('fish_audio', 'synthesize', {
        model: request.model,
        referenceId: payload.reference_id,
        speed: payload.prosody.speed,
        volume: payload.prosody.volume,
        text: request.text,
      });
      const response = await fetchFishBridge(
        fetch_impl,
        FISH_AUDIO_BRIDGE_SPEECH_ENDPOINT,
        {
          method: 'POST',
          headers: await buildBridgeHeaders(request.apiKey, true),
          credentials: 'same-origin',
          body: JSON.stringify({ ...payload, model: request.model }),
          signal: request.signal,
        },
        request.timeoutMs,
      );
      try {
        if (!response.ok) {
          throw await readBridgeError(response, 'synthesize');
        }
        const content_type = response.headers.get('content-type');
        if (!isAudioMp3ContentType(content_type)) {
          throw new TtsRequestError(
            `Fish Audio 合成失败：响应类型不是 MP3 音频（当前：${content_type || '缺失'}）`,
            'missing_audio',
            response.status,
          );
        }
        const blob = await response.blob();
        if (!blob || blob.size <= 0) {
          throw new TtsRequestError('Fish Audio 合成失败：返回的音频为空', 'missing_audio');
        }
        return new Blob([await blob.arrayBuffer()], { type: 'audio/mpeg' });
      } finally {
        response.close();
      }
    },
  };
}
