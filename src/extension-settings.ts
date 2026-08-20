import {
  INDEX_TTS_LANGUAGES,
  type IndexTtsLanguage,
  type MinimaxRegion,
  type TtsEngineId,
} from './engines/contract';

export const EXTENSION_SETTINGS_SCHEMA_VERSION = 2 as const;

export const TTS_MODELS = [
  'speech-02-hd',
  'speech-02-turbo',
  'speech-2.8-hd',
  'speech-2.8-turbo',
  'speech-2.6-hd',
  'speech-2.6-turbo',
] as const;

export type TtsModel = (typeof TTS_MODELS)[number];
export type PrefetchMode = 'manual' | 'auto_all' | 'auto_first_n';
export type InjectRole = 'system' | 'user' | 'assistant';
export type TestLanguage = 'ja' | 'zh' | 'en';

export type CharacterVoiceMapping = {
  characterName: string;
  minimaxVoiceId: string;
};

export type CharacterMappingPreset = {
  name: string;
  mappings: CharacterVoiceMapping[];
};

export type GsviCharacterVoiceMapping = {
  characterName: string;
  gsviVoiceId: string;
  gsviLanguage: string;
  gsviEmotion: string;
};

export type GsviCharacterMappingPreset = {
  name: string;
  mappings: GsviCharacterVoiceMapping[];
};

export type IndexTtsCharacterVoiceMapping = {
  characterName: string;
  indexTtsVoiceId: string;
  indexTtsLanguage: IndexTtsLanguage;
};

export type IndexTtsCharacterMappingPreset = {
  name: string;
  mappings: IndexTtsCharacterVoiceMapping[];
};

export const DEFAULT_INJECT_TEMPLATE = [
  '<VOICE_RULE>',
  '请仅对角色：${mapped_characters} 的“直接台词”添加 <say char="角色名">...</say> 标签。',
  '角色映射名单：${mapped_characters}',
  'char 必须与映射角色名完全一致，不要使用其他称呼。',
  '<say char="角色名">禁止填<user>。',
  '不要给旁白、动作描写、心理活动、双语的中文翻译内容加 <say> 标签。',
  '可在 <say> </say> 之间自然加入语气词标签，但不要滥用。',
  '仅可使用以下语气词标签：',
  '(laughs), (chuckle), (coughs), (clear-throat), (groans), (breath), (pant), (inhale), (exhale), (gasps), (sniffs), (sighs), (snorts), (burps), (lip-smacking), (humming), (hissing), (emm), (sneezes)',
  '除上述外，禁止输出其它括号语气词（如 (softly)、(gently)）。',
  '不要输出空的 <say></say>，不要嵌套 <say> 标签。',
  '示例:',
  ' <say char=“角色名”>“(laughs)你好呀！” </say>',
  '</VOICE_RULE>',
].join('\n');

export const DEFAULT_INDEX_TTS_INJECT_TEMPLATE = [
  '<VOICE_RULE>',
  '总则：',
  '请仅对角色：${mapped_characters} 的“直接台词”添加 <say char="角色名">...</say> 标签。',
  '角色映射名单：${mapped_characters}',
  'char 必须与映射角色名完全一致，不要使用其他称呼。',
  '<say char="角色名">禁止填<user>。',
  '不要给旁白、动作描写、心理活动、双语的中文翻译内容加 <say> 标签。',
  '不要输出空的 <say></say>，不要嵌套 <say> 标签。',
  '禁止括号语气词（如 (laughs)、(sighs)、(softly)）。',
  '',
  '情绪规则：',
  '当对话内容有明显情绪变化时应为角色添加情绪向量 emo="名称:数值"。',
  '合法情绪向量仅限：喜、怒、哀、惧、厌恶、低落、惊喜、平静。',
  '每句独立判断；不要沿用上一句，也不要给日常句补“平静”',
  '日常、闲聊、平静叙述省略 emo，只写：<say char="角色名">台词</say>',
  '允许使用1 至 3 项不同情绪；优先用一项，确有复合情绪时最多三项。多项用半角逗号分隔。char 与 emo 属性顺序不限。',
  '每个数值必须是大于 0、不超过 1.0 的有限数字。轻微 0.10–0.35，明显 0.35–0.60，0.80 以上只用于重大爆发，数值使用尽量克制不要滥用。',
  '禁止：八位数组、英文情绪名、零值占位、重复名称、无意义堆叠。',
  '示例:',
  '<say char="角色名">今天要去哪里？</say>',
  '<say char="角色名" emo="怒:0.35">别骗我。</say>',
  '<say char="角色名" emo="哀:0.30,低落:0.15">我不想再等了。</say>',
  '</VOICE_RULE>',
].join('\n');

const LEGACY_DEFAULT_INJECT_TEMPLATE = [
  '<VOICE_RULE>',
  '请仅对角色：${mapped_characters} 的“直接台词”添加 <say char=“角色名”>...</say> 标签。',
  '角色映射名单：${mapped_characters}',
  '若说话者在映射名单中，char 必须与映射角色名完全一致。',
  '若说话者不在映射名单中，也必须填写真实说话角色名，char 不可省略。',
  ' <say char=“角色名”>不要填<user>。',
  '不要给旁白、动作描写、心理活动添、双语的中文翻译内容加 <say> 标签。',
  '可在 <say> </say> 之间自然加入语气词标签，但不要滥用。',
  '仅可使用以下语气词标签：',
  '(laughs), (chuckle), (coughs), (clear-throat), (groans), (breath), (pant), (inhale), (exhale), (gasps), (sniffs), (sighs), (snorts), (burps), (lip-smacking), (humming), (hissing), (emm), (sneezes)',
  '除上述外，禁止输出其它括号语气词（如 (softly)、(gently)）。',
  '不要输出空的 <say></say>，不要嵌套 <say> 标签。',
  '示例:',
  ' <say char=“角色名”>“(laughs)你好呀！” </say>',
  '</VOICE_RULE>',
].join('\n');

export type ExtensionSettings = {
  schemaVersion: typeof EXTENSION_SETTINGS_SCHEMA_VERSION;
  enabled: boolean;
  ttsEngine: TtsEngineId;
  apiKey: string;
  groupId: string;
  voiceId: string;
  voiceCatalogSelectedId: string;
  minimaxRegion: MinimaxRegion;
  testLanguage: TestLanguage;
  model: TtsModel;
  speed: number;
  vol: number;
  requestTimeoutMs: number;
  maxConcurrency: number;
  prefetchMode: PrefetchMode;
  prefetchFirstCount: number;
  localGsviBaseUrl: string;
  localGsviAuthToken: string;
  localGsviModel: string;
  localGsviFormat: 'mp3' | 'wav';
  localGsviUseReferenceAudio: boolean;
  localGsviCharacter: string;
  localGsviLanguage: string;
  localGsviEmotion: string;
  localGsviReferenceText: string;
  localGsviTopK: number;
  localGsviTopP: number;
  localGsviTemperature: number;
  localGsviTextLang: string;
  localGsviTextSplitMethod: string;
  localGsviBatchSize: number;
  characterMappings: CharacterVoiceMapping[];
  characterMappingPresets: CharacterMappingPreset[];
  gsviCharacterMappings: GsviCharacterVoiceMapping[];
  gsviCharacterMappingPresets: GsviCharacterMappingPreset[];
  indexTtsBaseUrl: string;
  indexTtsVoiceId: string;
  indexTtsLanguage: IndexTtsLanguage;
  indexTtsCharacterMappings: IndexTtsCharacterVoiceMapping[];
  indexTtsCharacterMappingPresets: IndexTtsCharacterMappingPreset[];
  injectEnabled: boolean;
  injectDepth: number;
  injectRole: InjectRole;
  injectTemplate: string;
  indexTtsInjectTemplate: string;
};

export const DEFAULT_EXTENSION_SETTINGS: ExtensionSettings = {
  schemaVersion: EXTENSION_SETTINGS_SCHEMA_VERSION,
  enabled: true,
  ttsEngine: 'minimax',
  apiKey: '',
  groupId: '',
  voiceId: '',
  voiceCatalogSelectedId: '',
  minimaxRegion: 'international',
  testLanguage: 'ja',
  model: 'speech-2.8-hd',
  speed: 1,
  vol: 1,
  requestTimeoutMs: 15000,
  maxConcurrency: 3,
  prefetchMode: 'auto_all',
  prefetchFirstCount: 2,
  localGsviBaseUrl: '',
  localGsviAuthToken: '',
  localGsviModel: '',
  localGsviFormat: 'mp3',
  localGsviUseReferenceAudio: false,
  localGsviCharacter: '',
  localGsviLanguage: 'ja',
  localGsviEmotion: '',
  localGsviReferenceText: '',
  localGsviTopK: 20,
  localGsviTopP: 0.7,
  localGsviTemperature: 0.7,
  localGsviTextLang: '多语种混合',
  localGsviTextSplitMethod: '按标点符号切',
  localGsviBatchSize: 1,
  characterMappings: [],
  characterMappingPresets: [],
  gsviCharacterMappings: [],
  gsviCharacterMappingPresets: [],
  indexTtsBaseUrl: 'http://127.0.0.1:7860',
  indexTtsVoiceId: '',
  indexTtsLanguage: 'ZH',
  indexTtsCharacterMappings: [],
  indexTtsCharacterMappingPresets: [],
  injectEnabled: true,
  injectDepth: 1,
  injectRole: 'system',
  injectTemplate: DEFAULT_INJECT_TEMPLATE,
  indexTtsInjectTemplate: DEFAULT_INDEX_TTS_INJECT_TEMPLATE,
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function asString(value: unknown, fallback: string): string {
  return typeof value === 'string' ? value : fallback;
}

function resolveInjectTemplate(value: unknown): string {
  const text = asString(value, DEFAULT_INJECT_TEMPLATE) || DEFAULT_INJECT_TEMPLATE;
  if (text === LEGACY_DEFAULT_INJECT_TEMPLATE) {
    return DEFAULT_INJECT_TEMPLATE;
  }
  return text;
}

function asBoolean(value: unknown, fallback: boolean): boolean {
  return typeof value === 'boolean' ? value : fallback;
}

function clampNumber(value: unknown, min: number, max: number, fallback: number, integer = false) {
  const numeric = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(numeric)) {
    return fallback;
  }
  const next = integer ? Math.round(numeric) : numeric;
  return Math.min(max, Math.max(min, next));
}

function asEngine(value: unknown): TtsEngineId {
  if (value === 'minimax' || value === 'local_gsvi' || value === 'index_tts') {
    return value;
  }
  return 'minimax';
}

function asIndexTtsLanguage(value: unknown): IndexTtsLanguage {
  return (INDEX_TTS_LANGUAGES as readonly string[]).includes(String(value))
    ? (value as IndexTtsLanguage)
    : DEFAULT_EXTENSION_SETTINGS.indexTtsLanguage;
}

function asRegion(value: unknown): MinimaxRegion {
  return value === 'beijing' ? 'beijing' : 'international';
}

function asModel(value: unknown): TtsModel {
  return (TTS_MODELS as readonly string[]).includes(String(value))
    ? (value as TtsModel)
    : DEFAULT_EXTENSION_SETTINGS.model;
}

function asPrefetchMode(value: unknown): PrefetchMode {
  if (value === 'manual' || value === 'auto_first_n' || value === 'auto_all') {
    return value;
  }
  return DEFAULT_EXTENSION_SETTINGS.prefetchMode;
}

function asInjectRole(value: unknown): InjectRole {
  if (value === 'user' || value === 'assistant' || value === 'system') {
    return value;
  }
  return DEFAULT_EXTENSION_SETTINGS.injectRole;
}

function asTestLanguage(value: unknown): TestLanguage {
  if (value === 'zh' || value === 'en' || value === 'ja') {
    return value;
  }
  return DEFAULT_EXTENSION_SETTINGS.testLanguage;
}

function asFormat(value: unknown): 'mp3' | 'wav' {
  return value === 'wav' ? 'wav' : 'mp3';
}

function parseCharacterMappings(value: unknown): CharacterVoiceMapping[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .filter(isRecord)
    .map((item) => ({
      characterName: asString(item.characterName, '').trim(),
      minimaxVoiceId: asString(item.minimaxVoiceId, '').trim(),
    }))
    .filter((item) => item.characterName || item.minimaxVoiceId);
}

function parseCharacterPresets(value: unknown): CharacterMappingPreset[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .filter(isRecord)
    .map((item) => ({
      name: asString(item.name, '').trim(),
      mappings: parseCharacterMappings(item.mappings),
    }))
    .filter((item) => item.name);
}

function parseGsviMappings(value: unknown): GsviCharacterVoiceMapping[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .filter(isRecord)
    .map((item) => ({
      characterName: asString(item.characterName, '').trim(),
      gsviVoiceId: asString(item.gsviVoiceId, '').trim(),
      gsviLanguage: asString(item.gsviLanguage, '').trim(),
      gsviEmotion: asString(item.gsviEmotion, '').trim(),
    }))
    .filter((item) => item.characterName || item.gsviVoiceId);
}

function parseGsviPresets(value: unknown): GsviCharacterMappingPreset[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .filter(isRecord)
    .map((item) => ({
      name: asString(item.name, '').trim(),
      mappings: parseGsviMappings(item.mappings),
    }))
    .filter((item) => item.name);
}

function parseIndexTtsMappings(value: unknown): IndexTtsCharacterVoiceMapping[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .filter(isRecord)
    .map((item) => ({
      characterName: asString(item.characterName, '').trim(),
      indexTtsVoiceId: asString(item.indexTtsVoiceId, '').trim(),
      indexTtsLanguage: asIndexTtsLanguage(item.indexTtsLanguage),
    }))
    .filter((item) => item.characterName || item.indexTtsVoiceId);
}

function parseIndexTtsPresets(value: unknown): IndexTtsCharacterMappingPreset[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .filter(isRecord)
    .map((item) => ({
      name: asString(item.name, '').trim(),
      mappings: parseIndexTtsMappings(item.mappings),
    }))
    .filter((item) => item.name);
}

export function parseExtensionSettings(raw: unknown): ExtensionSettings {
  const source = isRecord(raw) ? raw : {};
  return {
    schemaVersion: EXTENSION_SETTINGS_SCHEMA_VERSION,
    enabled: asBoolean(source.enabled, DEFAULT_EXTENSION_SETTINGS.enabled),
    ttsEngine: asEngine(source.ttsEngine),
    apiKey: asString(source.apiKey, ''),
    groupId: asString(source.groupId, ''),
    voiceId: asString(source.voiceId, ''),
    voiceCatalogSelectedId: asString(source.voiceCatalogSelectedId, ''),
    minimaxRegion: asRegion(source.minimaxRegion),
    testLanguage: asTestLanguage(source.testLanguage),
    model: asModel(source.model),
    speed: clampNumber(source.speed, 0.5, 2, 1),
    vol: clampNumber(source.vol, 0, 10, 1),
    requestTimeoutMs: clampNumber(source.requestTimeoutMs, 1000, 30000, 15000, true),
    maxConcurrency: clampNumber(source.maxConcurrency, 1, 10, 3, true),
    prefetchMode: asPrefetchMode(source.prefetchMode),
    prefetchFirstCount: clampNumber(source.prefetchFirstCount, 1, 10, 2, true),
    localGsviBaseUrl: asString(source.localGsviBaseUrl, ''),
    localGsviAuthToken: asString(source.localGsviAuthToken, ''),
    localGsviModel: asString(source.localGsviModel, ''),
    localGsviFormat: asFormat(source.localGsviFormat),
    localGsviUseReferenceAudio: asBoolean(source.localGsviUseReferenceAudio, false),
    localGsviCharacter: asString(source.localGsviCharacter, ''),
    localGsviLanguage: asString(source.localGsviLanguage, 'ja'),
    localGsviEmotion: asString(source.localGsviEmotion, ''),
    localGsviReferenceText: asString(source.localGsviReferenceText, ''),
    localGsviTopK: clampNumber(source.localGsviTopK, 1, 200, 20, true),
    localGsviTopP: clampNumber(source.localGsviTopP, 0, 1, 0.7),
    localGsviTemperature: clampNumber(source.localGsviTemperature, 0, 2, 0.7),
    localGsviTextLang: asString(source.localGsviTextLang, '多语种混合'),
    localGsviTextSplitMethod: asString(source.localGsviTextSplitMethod, '按标点符号切'),
    localGsviBatchSize: clampNumber(source.localGsviBatchSize, 1, 8, 1, true),
    characterMappings: parseCharacterMappings(source.characterMappings),
    characterMappingPresets: parseCharacterPresets(source.characterMappingPresets),
    gsviCharacterMappings: parseGsviMappings(source.gsviCharacterMappings),
    gsviCharacterMappingPresets: parseGsviPresets(source.gsviCharacterMappingPresets),
    indexTtsBaseUrl: asString(source.indexTtsBaseUrl, DEFAULT_EXTENSION_SETTINGS.indexTtsBaseUrl),
    indexTtsVoiceId: asString(source.indexTtsVoiceId, ''),
    indexTtsLanguage: asIndexTtsLanguage(source.indexTtsLanguage),
    indexTtsCharacterMappings: parseIndexTtsMappings(source.indexTtsCharacterMappings),
    indexTtsCharacterMappingPresets: parseIndexTtsPresets(source.indexTtsCharacterMappingPresets),
    injectEnabled: asBoolean(source.injectEnabled, true),
    injectDepth: clampNumber(source.injectDepth, 0, 50, 1, true),
    injectRole: asInjectRole(source.injectRole),
    injectTemplate: resolveInjectTemplate(source.injectTemplate),
    indexTtsInjectTemplate:
      asString(source.indexTtsInjectTemplate, DEFAULT_INDEX_TTS_INJECT_TEMPLATE) ||
      DEFAULT_INDEX_TTS_INJECT_TEMPLATE,
  };
}
