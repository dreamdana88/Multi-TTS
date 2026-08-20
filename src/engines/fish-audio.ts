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

export const FISH_AUDIO_API_ORIGIN = 'https://api.fish.audio' as const;
export const FISH_AUDIO_TTS_ENDPOINT = `${FISH_AUDIO_API_ORIGIN}/v1/tts` as const;
export const FISH_AUDIO_MODEL_ENDPOINT = `${FISH_AUDIO_API_ORIGIN}/model` as const;

const FISH_AUDIO_AUDIO_TYPES = new Set([
  'audio/mpeg',
  'audio/mp3',
  'audio/mpeg3',
  'audio/x-mpeg',
  'audio/x-mpeg-3',
]);

const FISH_AUDIO_UNAVAILABLE_STATES = new Set([
  'created',
  'training',
  'failed',
  'deleted',
  'disabled',
  'unavailable',
]);

export function isFishAudioModel(value: unknown): value is FishAudioModel {
  return (FISH_AUDIO_MODELS as readonly string[]).includes(String(value));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function normalizeFishAudioApiKey(value: string): string {
  return value.replace(/^Bearer\s+/i, '').trim();
}

function buildFishAudioHeaders(api_key: string, model?: FishAudioModel): Record<string, string> {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${normalizeFishAudioApiKey(api_key)}`,
  };
  if (model) {
    headers['Content-Type'] = 'application/json';
    headers.model = model;
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

export function buildFishAudioModelUrl(
  origin = FISH_AUDIO_API_ORIGIN,
  query: { self?: boolean; pageSize?: number; pageNumber?: number } = {},
): string {
  const url = new URL('/model', origin);
  url.searchParams.set('self', String(query.self ?? true));
  url.searchParams.set('page_size', String(query.pageSize ?? 100));
  url.searchParams.set('page_number', String(query.pageNumber ?? 1));
  return url.toString();
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

async function readFishAudioError(
  response: TimedHttpResponse,
  operation: 'models' | 'synthesize',
): Promise<TtsRequestError> {
  const label = statusMessage(response.status, operation);
  try {
    const text = await response.text();
    try {
      const payload = JSON.parse(text) as unknown;
      if (isRecord(payload)) {
        const detail =
          typeof payload.message === 'string'
            ? payload.message.trim()
            : typeof payload.reason === 'string'
              ? payload.reason.trim()
              : '';
        if (detail && detail.length <= 160) {
          return new TtsRequestError(
            `Fish Audio 请求失败：${label}（${detail}）`,
            'http',
            response.status,
          );
        }
        return new TtsRequestError(`Fish Audio 请求失败：${label}`, 'http', response.status);
      }
      return new TtsRequestError(
        `Fish Audio 请求失败：${label}（错误体结构无效）`,
        'invalid_json',
        response.status,
      );
    } catch {
      return new TtsRequestError(
        `Fish Audio 请求失败：${label}（错误体无法解析）`,
        'invalid_json',
        response.status,
      );
    }
  } catch {
    return new TtsRequestError(`Fish Audio 请求失败：${label}`, 'http', response.status);
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
    if (item.type !== 'tts') {
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
    message: '无法连接 Fish Audio。请检查网络和 API Key。',
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
    const response = await fetchWithTimeout(
      fetch_impl,
      buildFishAudioModelUrl(),
      {
        method: 'GET',
        headers: buildFishAudioHeaders(api_key),
        signal: request.signal,
      },
      request.timeoutMs,
    );
    if (!response.ok) {
      throw await readFishAudioError(response, 'models');
    }
    return parseFishAudioVoiceCatalog(await response.json());
  }

  return {
    id: 'fish_audio',
    async checkHealth(request) {
      if (request.engine !== 'fish_audio') {
        throw new TtsRequestError('Fish Audio 适配器收到了错误的引擎请求', 'config');
      }
      try {
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
      const response = await fetchWithTimeout(
        fetch_impl,
        FISH_AUDIO_TTS_ENDPOINT,
        {
          method: 'POST',
          headers: buildFishAudioHeaders(request.apiKey, request.model),
          body: JSON.stringify(payload),
          signal: request.signal,
        },
        request.timeoutMs,
      );
      if (!response.ok) {
        throw await readFishAudioError(response, 'synthesize');
      }
      const content_type = response.headers.get('content-type');
      if (!isAudioMp3ContentType(content_type)) {
        response.close();
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
    },
  };
}
