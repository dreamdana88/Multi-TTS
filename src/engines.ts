import { createLocalGsviAdapter } from './engines/local-gsvi';
import { createMinimaxAdapter } from './engines/minimax';
import type { TtsEngineAdapter, TtsEngineId } from './engines/contract';

export type {
  EngineHealth,
  LocalGsviSynthesisRequest,
  MinimaxRegion,
  MinimaxSynthesisRequest,
  SynthesisRequest,
  TtsEngineAdapter,
  TtsEngineId,
  VoiceDescriptor,
} from './engines/contract';
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

export function createTtsAdapter(engine_id: TtsEngineId): TtsEngineAdapter {
  if (engine_id === 'local_gsvi') {
    return createLocalGsviAdapter();
  }
  return createMinimaxAdapter();
}
