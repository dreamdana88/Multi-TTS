import { fetchWithTimeout, joinUrl, normalizeServiceOrigin, type FetchLike } from './http';
import { TtsRequestError } from './request-error';
import { logEngineInfo, logEngineWarn } from './safe-log';
import type { LocalGsviSynthesisRequest, TtsEngineAdapter, VoiceDescriptor } from './contract';

const GSVI_MODEL_VERSIONS = ['v2', 'v3', 'v4', 'v2Pro'] as const;

export function parseGsviModelSelection(model_id: string) {
  const raw = model_id.trim();
  if (!raw) {
    return { modelName: '', version: '' };
  }
  const split_index = raw.lastIndexOf('|');
  if (split_index < 0) {
    return { modelName: raw, version: '' };
  }
  return {
    modelName: raw.slice(0, split_index).trim(),
    version: raw.slice(split_index + 1).trim(),
  };
}

function normalizeGsviVersion(version: string) {
  const key = version.trim().toLowerCase();
  if (key === 'v2pro') {
    return 'v2Pro';
  }
  if (key === 'v2' || key === 'v3' || key === 'v4') {
    return key;
  }
  return version.trim();
}

function normalizeGsviTextLang(text_lang: string) {
  const raw = text_lang.trim();
  if (!raw) {
    return '多语种混合';
  }
  const alias_map: Record<string, string> = {
    英文: '英语',
    日文: '日语',
    韩文: '韩语',
  };
  return alias_map[raw] ?? raw;
}

export function buildLocalGsviSpeechRequest(request: LocalGsviSynthesisRequest) {
  const parsed = parseGsviModelSelection(request.modelId);
  const model_name = parsed.modelName.trim();
  const version = normalizeGsviVersion(parsed.version) || 'v2Pro';
  return {
    url: joinUrl(request.baseUrl.trim(), '/v1/audio/speech'),
    modelName: model_name,
    version,
    payload: {
      model: `GSVI-${version}`,
      input: request.text,
      voice: model_name,
      response_format: request.format,
      speed: request.speed,
      other_params: {
        app_key: '',
        text_lang: normalizeGsviTextLang(request.textLang),
        prompt_lang: request.language.trim(),
        emotion: request.emotion.trim(),
        top_k: request.topK,
        top_p: request.topP,
        temperature: request.temperature,
        text_split_method: request.textSplitMethod.trim() || '按标点符号切',
        batch_size: request.batchSize,
        batch_threshold: 0.75,
        split_bucket: true,
        fragment_interval: 0.3,
        parallel_infer: true,
        repetition_penalty: 1.35,
        sample_steps: 16,
        if_sr: false,
        seed: -1,
      },
    },
  };
}

function assertGsviRequest(request: LocalGsviSynthesisRequest) {
  if (!request.baseUrl.trim()) {
    throw new TtsRequestError('请先填写 Local-GSVI 服务地址', 'config');
  }
  if (!request.modelId.trim()) {
    throw new TtsRequestError('请先填写或选择 Local-GSVI 模型（modelName|version）', 'config');
  }
  if (!request.language.trim() || !request.emotion.trim()) {
    throw new TtsRequestError(
      'GSVI 生成要求映射完整：语种(prompt_lang)/情绪(emotion)不能为空',
      'config',
    );
  }
  if (!parseGsviModelSelection(request.modelId).modelName) {
    throw new TtsRequestError('Local-GSVI 模型格式错误，期望 modelName|version', 'config');
  }
  if (!request.text.trim()) {
    throw new TtsRequestError('Local-GSVI 合成文本为空', 'config');
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isLikelyBase64(raw: string) {
  const text = raw.replace(/^data:audio\/[a-zA-Z0-9.+-]+;base64,/i, '').trim();
  return text.length >= 16 && /^[A-Za-z0-9+/=\r\n]+$/.test(text);
}

function unwrapDataUriBase64(raw: string) {
  const match = raw.trim().match(/^data:audio\/[a-zA-Z0-9.+-]+;base64,(.+)$/i);
  return match?.[1] ?? raw.trim();
}

function pickAudioBase64FromJson(payload: unknown): string | null {
  if (!isRecord(payload)) {
    return null;
  }
  const data = payload;
  const nested_data = isRecord(data.data) ? data.data : undefined;
  const nested_output = isRecord(data.output) ? data.output : undefined;
  const preferred = [
    data.audio,
    data.data,
    data.audio_base64,
    data.b64,
    nested_data?.audio,
    nested_data?.audio_base64,
    nested_output?.audio,
    nested_output?.audio_base64,
  ];
  for (const candidate of preferred) {
    if (typeof candidate === 'string' && isLikelyBase64(candidate)) {
      return unwrapDataUriBase64(candidate);
    }
  }
  return null;
}

function pickAudioPathFromJson(payload: unknown): string | null {
  if (!isRecord(payload)) {
    return null;
  }
  const data = payload;
  const nested_data = isRecord(data.data) ? data.data : undefined;
  const nested_output = isRecord(data.output) ? data.output : undefined;
  const candidates = [
    data.result_path,
    data.audio_url,
    data.url,
    data.audio_file,
    data.path,
    nested_data?.url,
    nested_data?.path,
    nested_output?.url,
    nested_output?.path,
    nested_output?.audio_url,
  ];
  for (const candidate of candidates) {
    if (typeof candidate === 'string' && candidate.trim()) {
      return candidate.trim();
    }
  }
  return null;
}

function extractJsonMessage(payload: unknown) {
  if (!isRecord(payload)) {
    return '';
  }
  const error_obj = isRecord(payload.error) ? payload.error : undefined;
  const base_resp = isRecord(payload.base_resp) ? payload.base_resp : undefined;
  const nested_data = isRecord(payload.data) ? payload.data : undefined;
  const candidates = [
    payload.msg,
    payload.message,
    payload.error,
    error_obj?.msg,
    error_obj?.message,
    base_resp?.status_msg,
    nested_data?.msg,
    nested_data?.message,
  ];
  for (const item of candidates) {
    if (typeof item === 'string' && item.trim()) {
      return item.trim();
    }
  }
  return '';
}

function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(unwrapDataUriBase64(base64));
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

function authHeaders(token?: string): Record<string, string> {
  const trimmed = token?.trim() ?? '';
  return trimmed ? { Authorization: `Bearer ${trimmed}` } : {};
}

export function createLocalGsviAdapter(options?: { fetchImpl?: FetchLike }): TtsEngineAdapter {
  const fetch_impl = options?.fetchImpl ?? fetch;

  async function fetchAudioByPath(
    base_url: string,
    raw_path: string,
    auth_token: string,
    timeout_ms: number,
    signal?: AbortSignal,
  ) {
    const url = /^https?:\/\//i.test(raw_path) ? raw_path : joinUrl(base_url, raw_path);
    let same_origin = false;
    try {
      same_origin = normalizeServiceOrigin(base_url) === new URL(url).origin;
    } catch {
      same_origin = false;
    }
    const timed = await fetchWithTimeout(
      fetch_impl,
      url,
      {
        method: 'GET',
        headers: same_origin ? authHeaders(auth_token) : {},
        signal,
      },
      timeout_ms,
    );
    if (!timed.ok) {
      throw new TtsRequestError(`下载 GSVI 输出失败：HTTP ${timed.status}`, 'http', timed.status);
    }
    return await timed.blob();
  }

  return {
    id: 'local_gsvi',
    async checkHealth(request) {
      if (request.engine !== 'local_gsvi') {
        throw new TtsRequestError('Local-GSVI 适配器收到了错误的引擎请求', 'config');
      }
      if (!request.baseUrl.trim()) {
        return { ok: false, message: '请先填写 Local-GSVI 服务地址' };
      }
      try {
        const voices = await this.listVoices(request);
        return {
          ok: voices.length > 0,
          message: voices.length > 0 ? `已检测到 ${voices.length} 个模型` : '未解析到模型映射',
        };
      } catch (error) {
        return {
          ok: false,
          message: error instanceof Error ? error.message : String(error),
        };
      }
    },
    async listVoices(request) {
      if (request.engine !== 'local_gsvi') {
        throw new TtsRequestError('Local-GSVI 适配器收到了错误的引擎请求', 'config');
      }
      const base_url = request.baseUrl.trim();
      if (!base_url) {
        throw new TtsRequestError('请先填写 Local-GSVI 服务地址', 'config');
      }

      const items: VoiceDescriptor[] = [];
      for (const version of GSVI_MODEL_VERSIONS) {
        const url = joinUrl(base_url, `/models/${encodeURIComponent(version)}`);
        try {
          const response = await fetchWithTimeout(
            fetch_impl,
            url,
            { method: 'GET', headers: authHeaders(request.authToken), signal: request.signal },
            request.timeoutMs,
          );
          if (!response.ok) {
            logEngineWarn('local_gsvi', `GET /models/${version} failed`, {
              status: response.status,
            });
            response.close();
            continue;
          }
          const payload = await response.json();
          const models_map =
            isRecord(payload) && isRecord(payload.models) ? payload.models : payload;
          if (!isRecord(models_map)) {
            continue;
          }
          Object.entries(models_map).forEach(([model_name, lang_map_raw]) => {
            if (!model_name || !isRecord(lang_map_raw)) {
              return;
            }
            const languages = Object.keys(lang_map_raw)
              .filter(Boolean)
              .sort((left, right) => left.localeCompare(right));
            const emotionsByLanguage: Record<string, string[]> = {};
            languages.forEach((language) => {
              const raw = lang_map_raw[language];
              emotionsByLanguage[language] = Array.isArray(raw)
                ? raw.map((item) => String(item).trim()).filter(Boolean)
                : typeof raw === 'string'
                  ? [raw.trim()].filter(Boolean)
                  : [];
            });
            items.push({
              id: `${model_name}|${version}`,
              name: `${model_name} [${version}]`,
              source: 'gsvi_model',
              language: languages.join(','),
              languages,
              emotionsByLanguage,
            });
          });
        } catch (error) {
          if (error instanceof TtsRequestError && error.code === 'cancelled') {
            throw error;
          }
          logEngineWarn('local_gsvi', `GET /models/${version} failed`);
        }
      }
      if (items.length === 0) {
        throw new TtsRequestError(
          '未在 /models/{v2|v3|v4|v2Pro} 中解析到模型映射，请检查接口返回结构',
          'missing_audio',
        );
      }
      return items.sort((left, right) => left.name.localeCompare(right.name));
    },
    async synthesize(request) {
      if (request.engine !== 'local_gsvi') {
        throw new TtsRequestError('Local-GSVI 适配器收到了错误的引擎请求', 'config');
      }
      assertGsviRequest(request);
      const speech = buildLocalGsviSpeechRequest(request);
      const headers = {
        'Content-Type': 'application/json',
        ...authHeaders(request.authToken),
      };
      logEngineInfo('local_gsvi', 'synthesize', {
        url: speech.url,
        model: speech.modelName,
        version: speech.version,
        text: request.text,
      });

      const response = await fetchWithTimeout(
        fetch_impl,
        speech.url,
        {
          method: 'POST',
          headers,
          body: JSON.stringify(speech.payload),
          signal: request.signal,
        },
        request.timeoutMs,
      );
      if (!response.ok) {
        throw new TtsRequestError(
          `Local-GSVI 请求失败：HTTP ${response.status}`,
          'http',
          response.status,
        );
      }
      const content_type = response.headers.get('content-type')?.toLowerCase() ?? '';
      if (content_type.includes('application/json')) {
        const data = await response.json();
        const base64_audio = pickAudioBase64FromJson(data);
        if (base64_audio) {
          return new Blob([Uint8Array.from(base64ToBytes(base64_audio))], {
            type: request.format === 'wav' ? 'audio/wav' : 'audio/mpeg',
          });
        }
        const audio_path = pickAudioPathFromJson(data);
        if (audio_path) {
          return await fetchAudioByPath(
            request.baseUrl.trim(),
            audio_path,
            request.authToken ?? '',
            request.timeoutMs,
            request.signal,
          );
        }
        throw new TtsRequestError(
          `Local-GSVI 未返回可用音频：${extractJsonMessage(data) || 'JSON 响应中未找到音频'}`,
          'missing_audio',
        );
      }
      return await response.blob();
    },
  };
}
