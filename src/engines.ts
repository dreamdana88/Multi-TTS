import { createIndexTtsAdapter } from './engines/index-tts';
import { createFishAudioAdapter } from './engines/fish-audio';
import { createLocalGsviAdapter } from './engines/local-gsvi';
import { createMinimaxAdapter } from './engines/minimax';
import { TtsRequestError } from './engines/request-error';
import type { TtsEngineAdapter, TtsEngineId } from './engines/contract';

export type {
  EngineHealth,
  FishAudioModel,
  FishAudioSynthesisRequest,
  IndexTtsLanguage,
  IndexTtsSynthesisRequest,
  LocalGsviSynthesisRequest,
  MinimaxRegion,
  MinimaxSynthesisRequest,
  SynthesisRequest,
  TtsEngineAdapter,
  TtsEngineId,
  VoiceDescriptor,
} from './engines/contract';
export { FISH_AUDIO_MODELS, INDEX_TTS_LANGUAGES } from './engines/contract';
export { TtsRequestError, isTtsRequestError } from './engines/request-error';
export {
  MINIMAX_API_URLS,
  MINIMAX_TTS_ENDPOINTS,
  MINIMAX_VOICE_ENDPOINTS,
  buildMinimaxAuthHeader,
  buildMinimaxT2aPayload,
  buildVoiceCatalogCacheKey,
  createMinimaxAdapter,
  decodeMinimaxAudioString,
  getMinimaxApiUrls,
  normalizeMinimaxApiKey,
} from './engines/minimax';
export {
  buildLocalGsviSpeechRequest,
  createLocalGsviAdapter,
  parseGsviModelSelection,
} from './engines/local-gsvi';
export {
  INDEX_TTS_API_VERSION,
  INDEX_TTS_MODEL,
  INDEX_TTS_MODEL_VERSION,
  INDEX_TTS_SERVICE_NAME,
  buildIndexTtsSpeechPayload,
  createIndexTtsAdapter,
  isIndexTtsLanguage,
} from './engines/index-tts';
export {
  FISH_AUDIO_API_ORIGIN,
  FISH_AUDIO_MODEL_ENDPOINT,
  FISH_AUDIO_TTS_ENDPOINT,
  buildFishAudioModelUrl,
  buildFishAudioSpeechPayload,
  createFishAudioAdapter,
  isFishAudioModel,
} from './engines/fish-audio';

export function createTtsAdapter(engine_id: TtsEngineId): TtsEngineAdapter {
  if (engine_id === 'minimax') {
    return createMinimaxAdapter();
  }
  if (engine_id === 'local_gsvi') {
    return createLocalGsviAdapter();
  }
  if (engine_id === 'index_tts') {
    return createIndexTtsAdapter();
  }
  if (engine_id === 'fish_audio') {
    return createFishAudioAdapter();
  }
  throw new TtsRequestError(`未知 TTS 引擎：${String(engine_id)}`, 'config');
}
