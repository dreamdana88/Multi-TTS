import { fetchWithTimeout, readJsonBody, sleep, type FetchLike } from './http';
import { TtsRequestError } from './request-error';
import { logEngineInfo, logEngineWarn } from './safe-log';
import type { MinimaxSynthesisRequest, TtsEngineAdapter, VoiceDescriptor } from './contract';

export const MINIMAX_TTS_ENDPOINTS = [
  'https://api.minimaxi.com/v1/t2a_v2',
  'https://api-bj.minimaxi.com/v1/t2a_v2',
] as const;

export const MINIMAX_VOICE_ENDPOINTS = [
  'https://api.minimaxi.com/v1/get_voice',
  'https://api-bj.minimaxi.com/v1/get_voice',
] as const;

const RETRYABLE_HTTP_STATUS = new Set([408, 409, 429, 500, 502, 503, 504]);
const RETRYABLE_BIZ_STATUS = new Set([1000, 1001, 1002, 1039]);
const MAX_RETRY_PER_ENDPOINT = 2;
const VOICE_CACHE_KEY = 'tavern_multi_tts_voice_catalog_v1';
const VOICE_CACHE_TTL_MS = 24 * 60 * 60 * 1000;

type GetVoiceResponse = {
  system_voice?: Array<{ voice_id: string; voice_name?: string; description?: string[] }>;
  voice_cloning?: Array<{ voice_id: string; voice_name?: string; description?: string[] }>;
  voice_generation?: Array<{ voice_id: string; voice_name?: string; description?: string[] }>;
  base_resp?: {
    status_code?: number;
    status_msg?: string;
  };
};

type T2AResponse = {
  data?: {
    audio?: string;
    audio_file?: string;
    trace_id?: string;
  };
  audio_file?: string;
  trace_id?: string;
  base_resp?: {
    status_code?: number;
    status_msg?: string;
  };
};

export function normalizeMinimaxApiKey(api_key: string): string {
  return api_key.replace(/^Bearer\s+/i, '').trim();
}

export function buildMinimaxT2aPayload(request: MinimaxSynthesisRequest) {
  return {
    group_id: request.groupId.trim(),
    model: request.model,
    text: request.text,
    stream: false,
    output_format: 'hex',
    voice_setting: {
      voice_id: request.voiceId.trim(),
      speed: request.speed,
      vol: request.vol,
      pitch: 0,
    },
    audio_setting: {
      sample_rate: 32000,
      bitrate: 128000,
      format: 'mp3',
      channel: 1,
    },
  };
}

export function buildMinimaxAuthHeader(api_key: string): string {
  return `Bearer ${normalizeMinimaxApiKey(api_key)}`;
}

function hexToBytes(hex: string): Uint8Array {
  const clean = hex.trim();
  const bytes = new Uint8Array(clean.length / 2);
  for (let index = 0; index < clean.length; index += 2) {
    bytes[index / 2] = Number.parseInt(clean.slice(index, index + 2), 16);
  }
  return bytes;
}

function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

export function decodeMinimaxAudioString(audio: string): Uint8Array {
  const normalized = audio.trim();
  const is_hex = /^[0-9a-fA-F]+$/.test(normalized) && normalized.length % 2 === 0;
  if (is_hex) {
    return hexToBytes(normalized);
  }
  return base64ToBytes(normalized);
}

function parseVoiceMeta(voice_id: string, voice_name?: string) {
  const raw = `${voice_name ?? ''} ${voice_id}`;
  const lower = raw.toLowerCase();
  const language = lower.includes('japanese')
    ? 'Japanese'
    : lower.includes('english')
      ? 'English'
      : lower.includes('chinese')
        ? 'Chinese'
        : lower.includes('korean')
          ? 'Korean'
          : lower.includes('french')
            ? 'French'
            : lower.includes('german')
              ? 'German'
              : lower.includes('spanish')
                ? 'Spanish'
                : 'Unknown';
  const gender =
    lower.includes('female') ||
    lower.includes('女') ||
    lower.includes('lady') ||
    lower.includes('girl')
      ? 'Female'
      : lower.includes('male') ||
          lower.includes('男') ||
          lower.includes('man') ||
          lower.includes('boy')
        ? 'Male'
        : 'Unknown';
  return { language, gender };
}

function readVoiceCache(): VoiceDescriptor[] | null {
  try {
    const raw = localStorage.getItem(VOICE_CACHE_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw) as { expires_at: number; items: VoiceDescriptor[] };
    if (!parsed?.expires_at || Date.now() > parsed.expires_at) {
      return null;
    }
    return parsed.items ?? null;
  } catch {
    return null;
  }
}

function writeVoiceCache(items: VoiceDescriptor[]) {
  localStorage.setItem(
    VOICE_CACHE_KEY,
    JSON.stringify({
      expires_at: Date.now() + VOICE_CACHE_TTL_MS,
      items,
    }),
  );
}

function assertMinimaxRequest(request: MinimaxSynthesisRequest) {
  const api_key = normalizeMinimaxApiKey(request.apiKey);
  const group_id = request.groupId.trim();
  const voice_id = request.voiceId.trim();
  if (!api_key || !group_id || !voice_id) {
    throw new TtsRequestError('MiniMax 引擎缺少必要配置：API Key / Group ID / Voice ID', 'config');
  }
  if (!request.text.trim()) {
    throw new TtsRequestError('MiniMax 合成文本为空', 'config');
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

export function createMinimaxAdapter(options?: { fetchImpl?: FetchLike }): TtsEngineAdapter {
  const fetch_impl = options?.fetchImpl ?? fetch;

  async function requestJson(
    url: string,
    init: RequestInit,
    timeout_ms: number,
  ): Promise<{ response: Response; data: unknown }> {
    const response = await fetchWithTimeout(fetch_impl, url, init, timeout_ms);
    const data = await readJsonBody(response);
    return { response, data };
  }

  return {
    id: 'minimax',
    async checkHealth(request) {
      if (request.engine !== 'minimax') {
        throw new TtsRequestError('MiniMax 适配器收到了错误的引擎请求', 'config');
      }
      const api_key = normalizeMinimaxApiKey(request.apiKey);
      if (!api_key) {
        return { ok: false, message: '请先填写 MiniMax API Key' };
      }
      try {
        await this.listVoices({ ...request, forceRefresh: true });
        return { ok: true, message: 'MiniMax 服务可用' };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return { ok: false, message };
      }
    },
    async listVoices(request) {
      if (request.engine !== 'minimax') {
        throw new TtsRequestError('MiniMax 适配器收到了错误的引擎请求', 'config');
      }
      const api_key = normalizeMinimaxApiKey(request.apiKey);
      if (!api_key) {
        throw new TtsRequestError('请先填写 API Key', 'config');
      }
      if (!request.forceRefresh) {
        const cached = readVoiceCache();
        if (cached && cached.length > 0) {
          return cached;
        }
      }

      let last_error: string | null = null;
      for (const endpoint of MINIMAX_VOICE_ENDPOINTS) {
        try {
          const { response, data } = await requestJson(
            endpoint,
            {
              method: 'POST',
              headers: {
                Authorization: buildMinimaxAuthHeader(api_key),
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ voice_type: 'all' }),
              signal: request.signal,
            },
            request.timeoutMs,
          );
          const payload = data as GetVoiceResponse;
          if (!response.ok || (payload.base_resp?.status_code ?? 0) !== 0) {
            throw new Error(
              payload.base_resp?.status_msg ?? response.statusText ?? 'unknown error',
            );
          }

          const items: VoiceDescriptor[] = [];
          const push_items = (
            source: VoiceDescriptor['source'],
            list: Array<{ voice_id: string; voice_name?: string; description?: string[] }> = [],
          ) => {
            list.forEach((item) => {
              const meta = parseVoiceMeta(item.voice_id, item.voice_name);
              items.push({
                id: item.voice_id,
                name: item.voice_name ?? item.voice_id,
                description: item.description,
                source,
                language: meta.language,
                gender: meta.gender,
              });
            });
          };
          push_items('system', payload.system_voice ?? []);
          push_items('voice_cloning', payload.voice_cloning ?? []);
          push_items('voice_generation', payload.voice_generation ?? []);
          writeVoiceCache(items);
          return items;
        } catch (error) {
          if (error instanceof TtsRequestError && error.code === 'cancelled') {
            throw error;
          }
          last_error = error instanceof Error ? error.message : String(error);
          logEngineWarn('minimax', 'voice catalog request failed', { endpoint });
        }
      }
      throw new TtsRequestError(last_error ?? '拉取音色列表失败', 'http');
    },
    async synthesize(request) {
      if (request.engine !== 'minimax') {
        throw new TtsRequestError('MiniMax 适配器收到了错误的引擎请求', 'config');
      }
      assertMinimaxRequest(request);
      const payload = buildMinimaxT2aPayload(request);
      const headers = {
        Authorization: buildMinimaxAuthHeader(request.apiKey),
        'Content-Type': 'application/json',
      };
      logEngineInfo('minimax', 'synthesize', {
        model: payload.model,
        voiceId: payload.voice_setting.voice_id,
        text: request.text,
      });

      let last_error: string | null = null;
      for (const endpoint of MINIMAX_TTS_ENDPOINTS) {
        for (let attempt = 0; attempt <= MAX_RETRY_PER_ENDPOINT; attempt += 1) {
          try {
            const { response, data } = await requestJson(
              endpoint,
              {
                method: 'POST',
                headers,
                body: JSON.stringify(payload),
                signal: request.signal,
              },
              request.timeoutMs,
            );
            if (!isRecord(data)) {
              throw new TtsRequestError('MiniMax 响应结构无效', 'invalid_json');
            }
            const parsed = data as T2AResponse;
            if (!response.ok || (parsed.base_resp?.status_code ?? 0) !== 0) {
              const status_code = parsed.base_resp?.status_code ?? response.status;
              const status_msg =
                parsed.base_resp?.status_msg ?? response.statusText ?? 'unknown error';
              const retryable =
                RETRYABLE_HTTP_STATUS.has(response.status) || RETRYABLE_BIZ_STATUS.has(status_code);
              last_error = `MiniMax 请求失败：code=${status_code}, msg=${status_msg}`;
              if (retryable && attempt < MAX_RETRY_PER_ENDPOINT) {
                await sleep(250 * (attempt + 1));
                continue;
              }
              throw new TtsRequestError(`${last_error}（已重试）`, 'http', response.status);
            }

            const encoded_audio =
              parsed.data?.audio ?? parsed.data?.audio_file ?? parsed.audio_file;
            if (!encoded_audio) {
              last_error = 'MiniMax 响应中未找到音频字段';
              if (attempt < MAX_RETRY_PER_ENDPOINT) {
                await sleep(250 * (attempt + 1));
                continue;
              }
              throw new TtsRequestError(`${last_error}（已重试）`, 'missing_audio');
            }

            const bytes = decodeMinimaxAudioString(encoded_audio);
            return new Blob([Uint8Array.from(bytes)], { type: 'audio/mpeg' });
          } catch (error) {
            if (error instanceof TtsRequestError && error.code !== 'http') {
              throw error;
            }
            last_error = error instanceof Error ? error.message : String(error);
            if (attempt < MAX_RETRY_PER_ENDPOINT) {
              await sleep(250 * (attempt + 1));
              continue;
            }
            break;
          }
        }
      }
      throw new TtsRequestError(`${last_error ?? 'MiniMax 请求失败：未知错误'}（已重试）`, 'http');
    },
  };
}
