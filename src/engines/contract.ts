export type TtsEngineId = 'minimax' | 'local_gsvi';

export type MinimaxRegion = 'international' | 'beijing';

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

export type SynthesisRequest = MinimaxSynthesisRequest | LocalGsviSynthesisRequest;

export type TtsEngineAdapter = {
  readonly id: TtsEngineId;
  checkHealth(request: SynthesisRequest): Promise<EngineHealth>;
  listVoices(request: SynthesisRequest): Promise<VoiceDescriptor[]>;
  synthesize(request: SynthesisRequest): Promise<Blob>;
};
