import { fetchWithTimeout, joinUrl, type FetchLike, type TimedHttpResponse } from './http';
import { TtsRequestError } from './request-error';
import { logEngineInfo } from './safe-log';
import type {
  EngineHealth,
  IndexTtsLanguage,
  IndexTtsSynthesisRequest,
  TtsEngineAdapter,
  VoiceDescriptor,
} from './contract';
import { INDEX_TTS_LANGUAGES } from './contract';

export const INDEX_TTS_MODEL = 'IndexTTS-2.5' as const;
export const INDEX_TTS_SERVICE_NAME = 'indextts' as const;
export const INDEX_TTS_API_VERSION = '1' as const;
export const INDEX_TTS_MODEL_VERSION = '2.5' as const;

export { INDEX_TTS_LANGUAGES };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function isIndexTtsLanguage(value: unknown): value is IndexTtsLanguage {
  return (INDEX_TTS_LANGUAGES as readonly string[]).includes(String(value));
}

export function buildIndexTtsSpeechPayload(request: IndexTtsSynthesisRequest) {
  const payload: {
    model: typeof INDEX_TTS_MODEL;
    input: string;
    voice: string;
    response_format: 'wav';
    language: IndexTtsLanguage;
    duration_factor: number;
    emo_weight: number;
    emotion?: NonNullable<IndexTtsSynthesisRequest['emotion']>;
  } = {
    model: INDEX_TTS_MODEL,
    input: request.text,
    voice: request.voiceId.trim(),
    response_format: 'wav',
    language: request.language,
    duration_factor: request.durationFactor,
    emo_weight: request.emoWeight,
  };
  if (request.emotion && Object.keys(request.emotion).length > 0) {
    payload.emotion = request.emotion;
  }
  return payload;
}

function assertIndexTtsRequest(request: IndexTtsSynthesisRequest) {
  if (!request.baseUrl.trim()) {
    throw new TtsRequestError('请先填写 IndexTTS 服务地址', 'config');
  }
  if (!request.voiceId.trim()) {
    throw new TtsRequestError('请先选择 IndexTTS 音色预设', 'config');
  }
  if (!isIndexTtsLanguage(request.language)) {
    throw new TtsRequestError('IndexTTS 语言必须是 ZH、EN、JA、AR 或 ES', 'config');
  }
  if (!request.text.trim()) {
    throw new TtsRequestError('IndexTTS 合成文本为空', 'config');
  }
}

function isAudioWavContentType(value: string | null): boolean {
  const media = (value ?? '').split(';')[0]?.trim().toLowerCase();
  return media === 'audio/wav';
}

function parseFrozenError(payload: unknown, status: number): TtsRequestError {
  if (isRecord(payload) && isRecord(payload.error)) {
    const code = typeof payload.error.code === 'string' ? payload.error.code.trim() : '';
    const message = typeof payload.error.message === 'string' ? payload.error.message.trim() : '';
    if (code || message) {
      return new TtsRequestError(
        `IndexTTS 请求失败：code=${code || 'unknown'}, message=${message || '（无消息）'}`,
        'http',
        status,
      );
    }
  }
  return new TtsRequestError(`IndexTTS 请求失败：HTTP ${status}`, 'http', status);
}

async function readHttpError(response: TimedHttpResponse): Promise<TtsRequestError> {
  try {
    const text = await response.text();
    try {
      return parseFrozenError(JSON.parse(text) as unknown, response.status);
    } catch {
      return new TtsRequestError(
        `IndexTTS 请求失败：HTTP ${response.status}`,
        'http',
        response.status,
      );
    }
  } catch (error) {
    if (error instanceof TtsRequestError) {
      return new TtsRequestError(
        `IndexTTS 请求失败：HTTP ${response.status}`,
        'http',
        response.status,
      );
    }
    return new TtsRequestError(
      `IndexTTS 请求失败：HTTP ${response.status}`,
      'http',
      response.status,
    );
  }
}

function describeHealthFailure(payload: Record<string, unknown>): string {
  if (payload.service !== INDEX_TTS_SERVICE_NAME) {
    return `IndexTTS 健康检查失败：服务名无效（期望 ${INDEX_TTS_SERVICE_NAME}）`;
  }
  if (payload.api_version !== INDEX_TTS_API_VERSION) {
    return `IndexTTS 健康检查失败：API 版本不匹配（期望 ${INDEX_TTS_API_VERSION}）`;
  }
  if (payload.model_version !== INDEX_TTS_MODEL_VERSION) {
    return `IndexTTS 健康检查失败：模型版本不匹配（期望 ${INDEX_TTS_MODEL_VERSION}）`;
  }
  if (payload.model_loaded !== true) {
    return 'IndexTTS 服务在线，但模型尚未加载。请先在服务端加载模型后再试。';
  }
  if (payload.ok !== true) {
    return 'IndexTTS 服务报告未就绪';
  }
  return 'IndexTTS 健康检查响应结构无效';
}

function parseHealthPayload(payload: unknown): EngineHealth {
  if (!isRecord(payload)) {
    return { ok: false, message: 'IndexTTS 健康检查响应结构无效' };
  }
  if (
    payload.ok === true &&
    payload.service === INDEX_TTS_SERVICE_NAME &&
    payload.api_version === INDEX_TTS_API_VERSION &&
    payload.model_version === INDEX_TTS_MODEL_VERSION &&
    payload.model_loaded === true
  ) {
    return { ok: true, message: 'IndexTTS 服务在线，模型已加载（IndexTTS-2.5）' };
  }
  return { ok: false, message: describeHealthFailure(payload) };
}

function parseVoiceCatalog(payload: unknown): VoiceDescriptor[] {
  if (!isRecord(payload) || !Array.isArray(payload.voices)) {
    throw new TtsRequestError('IndexTTS 音色列表结构无效：缺少 voices 数组', 'invalid_json');
  }
  return payload.voices.map((item, index) => {
    if (!isRecord(item) || typeof item.id !== 'string' || !item.id.trim()) {
      throw new TtsRequestError(
        `IndexTTS 音色列表结构无效：voices[${index}] 缺少有效 id`,
        'invalid_json',
      );
    }
    const name =
      typeof item.name === 'string' && item.name.trim() ? item.name.trim() : item.id.trim();
    return {
      id: item.id.trim(),
      name,
    };
  });
}

function toHealthResult(error: unknown): EngineHealth {
  if (error instanceof TtsRequestError) {
    return { ok: false, message: error.message };
  }
  return {
    ok: false,
    message: '无法连接 IndexTTS 服务。请确认服务已启动，并检查地址是否正确。',
  };
}

export function createIndexTtsAdapter(options?: { fetchImpl?: FetchLike }): TtsEngineAdapter {
  const fetch_impl = options?.fetchImpl ?? fetch;

  return {
    id: 'index_tts',
    async checkHealth(request) {
      if (request.engine !== 'index_tts') {
        throw new TtsRequestError('IndexTTS 适配器收到了错误的引擎请求', 'config');
      }
      const base_url = request.baseUrl.trim();
      if (!base_url) {
        return { ok: false, message: '请先填写 IndexTTS 服务地址' };
      }
      try {
        const response = await fetchWithTimeout(
          fetch_impl,
          joinUrl(base_url, '/v1/health'),
          { method: 'GET', signal: request.signal },
          request.timeoutMs,
        );
        if (!response.ok) {
          throw await readHttpError(response);
        }
        const payload = await response.json();
        return parseHealthPayload(payload);
      } catch (error) {
        return toHealthResult(error);
      }
    },
    async listVoices(request) {
      if (request.engine !== 'index_tts') {
        throw new TtsRequestError('IndexTTS 适配器收到了错误的引擎请求', 'config');
      }
      const base_url = request.baseUrl.trim();
      if (!base_url) {
        throw new TtsRequestError('请先填写 IndexTTS 服务地址', 'config');
      }
      const response = await fetchWithTimeout(
        fetch_impl,
        joinUrl(base_url, '/v1/voices'),
        { method: 'GET', signal: request.signal },
        request.timeoutMs,
      );
      if (!response.ok) {
        throw await readHttpError(response);
      }
      return parseVoiceCatalog(await response.json());
    },
    async synthesize(request) {
      if (request.engine !== 'index_tts') {
        throw new TtsRequestError('IndexTTS 适配器收到了错误的引擎请求', 'config');
      }
      assertIndexTtsRequest(request);
      const payload = buildIndexTtsSpeechPayload(request);
      const url = joinUrl(request.baseUrl.trim(), '/v1/audio/speech');
      logEngineInfo('index_tts', 'synthesize', {
        url,
        voiceId: payload.voice,
        language: payload.language,
        model: payload.model,
        durationFactor: payload.duration_factor,
        emoWeight: payload.emo_weight,
        emotion: payload.emotion ? Object.keys(payload.emotion) : undefined,
        text: request.text,
      });
      const response = await fetchWithTimeout(
        fetch_impl,
        url,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
          signal: request.signal,
        },
        request.timeoutMs,
      );
      if (!response.ok) {
        throw await readHttpError(response);
      }
      const content_type = response.headers.get('content-type');
      if (!isAudioWavContentType(content_type)) {
        response.close();
        throw new TtsRequestError(
          `IndexTTS 合成失败：响应类型不是 audio/wav（当前：${content_type || '缺失'}）`,
          'missing_audio',
          response.status,
        );
      }
      const blob = await response.blob();
      if (!blob || blob.size <= 0) {
        throw new TtsRequestError('IndexTTS 合成失败：返回的音频为空', 'missing_audio');
      }
      return blob;
    },
  };
}
