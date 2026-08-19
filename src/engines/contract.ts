export type TtsEngineId = 'minimax' | 'local_gsvi' | 'index_tts';

export type MinimaxRegion = 'international' | 'beijing';

export const INDEX_TTS_LANGUAGES = ['ZH', 'EN', 'JA', 'AR', 'ES'] as const;

export type IndexTtsLanguage = (typeof INDEX_TTS_LANGUAGES)[number];

export type VoiceDescriptor = {
  id: string;
  name: string;
  description?: string[];
  source?: 'system' | 'voice_cloning' | 'voice_generation' | 'gsvi_model';
  language?: string;
  gender?: string;
  languages?: string[];
  emotionsByLanguage?: Record<string, string[]>;
};

export type EngineHealth = {
  ok: boolean;
  message: string;
};

export type MinimaxSynthesisRequest = {
  engine: 'minimax';
  text: string;
  apiKey: string;
  groupId: string;
  voiceId: string;
  model: string;
  speed: number;
  vol: number;
  region: MinimaxRegion;
  timeoutMs: number;
  signal?: AbortSignal;
  forceRefresh?: boolean;
};

export type LocalGsviSynthesisRequest = {
  engine: 'local_gsvi';
  text: string;
  baseUrl: string;
  authToken?: string;
  modelId: string;
  language: string;
  emotion: string;
  format: 'mp3' | 'wav';
  speed: number;
  topK: number;
  topP: number;
  temperature: number;
  textLang: string;
  textSplitMethod: string;
  batchSize: number;
  timeoutMs: number;
  signal?: AbortSignal;
};

export type IndexTtsSynthesisRequest = {
  engine: 'index_tts';
  text: string;
  baseUrl: string;
  voiceId: string;
  language: IndexTtsLanguage;
  timeoutMs: number;
  signal?: AbortSignal;
};

export type SynthesisRequest =
  MinimaxSynthesisRequest | LocalGsviSynthesisRequest | IndexTtsSynthesisRequest;

export type TtsEngineAdapter = {
  readonly id: TtsEngineId;
  checkHealth(request: SynthesisRequest): Promise<EngineHealth>;
  listVoices(request: SynthesisRequest): Promise<VoiceDescriptor[]>;
  synthesize(request: SynthesisRequest): Promise<Blob>;
};
