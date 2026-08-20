export type TtsEngineId = 'minimax' | 'local_gsvi' | 'index_tts' | 'fish_audio';

export type MinimaxRegion = 'international' | 'beijing';

export const INDEX_TTS_LANGUAGES = ['ZH', 'EN', 'JA', 'AR', 'ES'] as const;

export type IndexTtsLanguage = (typeof INDEX_TTS_LANGUAGES)[number];

export type VoiceDescriptor = {
  id: string;
  name: string;
  description?: string[];
  source?: 'system' | 'voice_cloning' | 'voice_generation' | 'gsvi_model' | 'fish_audio';
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

export type IndexTtsEmotionMap = Partial<
  Record<'喜' | '怒' | '哀' | '惧' | '厌恶' | '低落' | '惊喜' | '平静', number>
>;

export type IndexTtsSynthesisRequest = {
  engine: 'index_tts';
  text: string;
  baseUrl: string;
  voiceId: string;
  language: IndexTtsLanguage;
  durationFactor: number;
  emoWeight: number;
  timeoutMs: number;
  signal?: AbortSignal;
  emotion?: IndexTtsEmotionMap;
};

export const FISH_AUDIO_MODELS = ['s2.1-pro-free', 's2.1-pro'] as const;

export type FishAudioModel = (typeof FISH_AUDIO_MODELS)[number];

export type FishAudioSynthesisRequest = {
  engine: 'fish_audio';
  text: string;
  apiKey: string;
  model: FishAudioModel;
  referenceId: string;
  speed: number;
  volume: number;
  timeoutMs: number;
  signal?: AbortSignal;
};

export type SynthesisRequest =
  | MinimaxSynthesisRequest
  | LocalGsviSynthesisRequest
  | IndexTtsSynthesisRequest
  | FishAudioSynthesisRequest;

export type TtsEngineAdapter = {
  readonly id: TtsEngineId;
  checkHealth(request: SynthesisRequest): Promise<EngineHealth>;
  listVoices(request: SynthesisRequest): Promise<VoiceDescriptor[]>;
  synthesize(request: SynthesisRequest): Promise<Blob>;
};
