import { normalizeCacheOrigin, type AudioCacheKeyInput } from '../audio-cache';
import { FISH_AUDIO_BRIDGE_SPEECH_ENDPOINT, INDEX_TTS_MODEL } from '../engines';
import type { ExtensionSettings } from '../extension-settings';
import type {
  FishAudioSynthesisRequest,
  IndexTtsEmotionMap,
  IndexTtsSynthesisRequest,
  LocalGsviSynthesisRequest,
  MinimaxSynthesisRequest,
  SynthesisRequest,
} from '../engines/contract';
import { canonicalizeSayEmotion, type SayEmotion } from './say-parser';

export type ResolvedVoice = {
  engine: ExtensionSettings['ttsEngine'];
  minimaxVoiceId?: string;
  gsviVoiceId?: string;
  gsviLanguage?: string;
  gsviEmotion?: string;
  indexTtsVoiceId?: string;
  indexTtsLanguage?: ExtensionSettings['indexTtsLanguage'];
  fishAudioReferenceId?: string;
};

function lastMatching<T>(items: T[], matches: (item: T) => boolean): T | undefined {
  for (let index = items.length - 1; index >= 0; index -= 1) {
    const item = items[index];
    if (item && matches(item)) {
      return item;
    }
  }
  return undefined;
}

function isCompleteMinimaxMapping(
  item: ExtensionSettings['characterMappings'][number],
  character: string,
) {
  return item.characterName.trim() === character && Boolean(item.minimaxVoiceId.trim());
}

function isCompleteGsviMapping(
  item: ExtensionSettings['gsviCharacterMappings'][number],
  character: string,
) {
  return (
    item.characterName.trim() === character &&
    Boolean(item.gsviVoiceId.trim()) &&
    Boolean(item.gsviLanguage.trim()) &&
    Boolean(item.gsviEmotion.trim())
  );
}

function isCompleteIndexTtsMapping(
  item: ExtensionSettings['indexTtsCharacterMappings'][number],
  character: string,
) {
  return (
    item.characterName.trim() === character &&
    Boolean(item.indexTtsVoiceId.trim()) &&
    Boolean(item.indexTtsLanguage)
  );
}

function isCompleteFishAudioMapping(
  item: ExtensionSettings['fishAudioCharacterMappings'][number],
  character: string,
) {
  return item.characterName.trim() === character && Boolean(item.fishAudioReferenceId.trim());
}

export function hasCharacterMapping(
  settings: ExtensionSettings,
  segment_char: string | undefined,
): boolean {
  const character = segment_char?.trim() ?? '';
  if (!character) {
    return true;
  }
  if (settings.ttsEngine === 'index_tts') {
    return Boolean(
      lastMatching(settings.indexTtsCharacterMappings, (item) =>
        isCompleteIndexTtsMapping(item, character),
      ),
    );
  }
  if (settings.ttsEngine === 'fish_audio') {
    return Boolean(
      lastMatching(settings.fishAudioCharacterMappings, (item) =>
        isCompleteFishAudioMapping(item, character),
      ),
    );
  }
  if (settings.ttsEngine === 'local_gsvi') {
    return Boolean(
      lastMatching(settings.gsviCharacterMappings, (item) =>
        isCompleteGsviMapping(item, character),
      ),
    );
  }
  if (settings.ttsEngine === 'minimax') {
    return Boolean(
      lastMatching(settings.characterMappings, (item) => isCompleteMinimaxMapping(item, character)),
    );
  }
  return false;
}

export function resolveSegmentVoice(
  settings: ExtensionSettings,
  segment_char: string | undefined,
): ResolvedVoice {
  const character = segment_char?.trim() ?? '';
  if (settings.ttsEngine === 'index_tts') {
    const mapping = lastMatching(settings.indexTtsCharacterMappings, (item) =>
      isCompleteIndexTtsMapping(item, character),
    );
    return {
      engine: 'index_tts',
      indexTtsVoiceId: mapping?.indexTtsVoiceId.trim() || settings.indexTtsVoiceId.trim(),
      indexTtsLanguage: mapping?.indexTtsLanguage || settings.indexTtsLanguage,
    };
  }
  if (settings.ttsEngine === 'fish_audio') {
    const mapping = lastMatching(settings.fishAudioCharacterMappings, (item) =>
      isCompleteFishAudioMapping(item, character),
    );
    return {
      engine: 'fish_audio',
      fishAudioReferenceId:
        mapping?.fishAudioReferenceId.trim() || settings.fishAudioReferenceId.trim(),
    };
  }
  if (settings.ttsEngine === 'local_gsvi') {
    const mapping = lastMatching(settings.gsviCharacterMappings, (item) =>
      isCompleteGsviMapping(item, character),
    );
    return {
      engine: 'local_gsvi',
      gsviVoiceId: mapping?.gsviVoiceId?.trim() || settings.localGsviModel.trim(),
      gsviLanguage: mapping?.gsviLanguage?.trim() || settings.localGsviLanguage.trim(),
      gsviEmotion: mapping?.gsviEmotion?.trim() || settings.localGsviEmotion.trim(),
    };
  }

  const mapping = lastMatching(settings.characterMappings, (item) =>
    isCompleteMinimaxMapping(item, character),
  );
  return {
    engine: 'minimax',
    minimaxVoiceId:
      mapping?.minimaxVoiceId?.trim() ||
      settings.voiceId.trim() ||
      settings.voiceCatalogSelectedId.trim(),
  };
}

export function buildSynthesisRequest(
  settings: ExtensionSettings,
  text: string,
  segment_char?: string,
  emotion?: SayEmotion,
): SynthesisRequest | null {
  if (!hasCharacterMapping(settings, segment_char)) {
    return null;
  }
  const voice = resolveSegmentVoice(settings, segment_char);
  if (settings.ttsEngine === 'index_tts' && voice.engine === 'index_tts') {
    if (!settings.indexTtsBaseUrl.trim() || !voice.indexTtsVoiceId || !voice.indexTtsLanguage) {
      return null;
    }
    const request: IndexTtsSynthesisRequest = {
      engine: 'index_tts',
      text,
      baseUrl: settings.indexTtsBaseUrl,
      voiceId: voice.indexTtsVoiceId,
      language: voice.indexTtsLanguage,
      durationFactor: settings.indexTtsDurationFactor,
      emoWeight: settings.indexTtsEmoWeight,
      timeoutMs: settings.requestTimeoutMs,
    };
    if (emotion && Object.keys(emotion).length > 0) {
      request.emotion = emotion as IndexTtsEmotionMap;
    }
    return request;
  }
  if (settings.ttsEngine === 'fish_audio' && voice.engine === 'fish_audio') {
    if (
      !settings.fishAudioApiKey.trim() ||
      !voice.fishAudioReferenceId ||
      !settings.fishAudioModel
    ) {
      return null;
    }
    const request: FishAudioSynthesisRequest = {
      engine: 'fish_audio',
      text,
      apiKey: settings.fishAudioApiKey,
      model: settings.fishAudioModel,
      referenceId: voice.fishAudioReferenceId,
      speed: settings.fishAudioSpeed,
      volume: settings.fishAudioVolume,
      timeoutMs: settings.requestTimeoutMs,
    };
    return request;
  }
  if (settings.ttsEngine === 'local_gsvi' && voice.engine === 'local_gsvi') {
    if (
      !settings.localGsviBaseUrl.trim() ||
      !voice.gsviVoiceId ||
      !voice.gsviLanguage ||
      !voice.gsviEmotion
    ) {
      return null;
    }
    const request: LocalGsviSynthesisRequest = {
      engine: 'local_gsvi',
      text,
      baseUrl: settings.localGsviBaseUrl,
      authToken: settings.localGsviAuthToken || undefined,
      modelId: voice.gsviVoiceId,
      language: voice.gsviLanguage,
      emotion: voice.gsviEmotion,
      format: settings.localGsviFormat,
      speed: settings.speed,
      topK: settings.localGsviTopK,
      topP: settings.localGsviTopP,
      temperature: settings.localGsviTemperature,
      textLang: settings.localGsviTextLang,
      textSplitMethod: settings.localGsviTextSplitMethod,
      batchSize: settings.localGsviBatchSize,
      timeoutMs: settings.requestTimeoutMs,
    };
    return request;
  }

  if (settings.ttsEngine !== 'minimax' || voice.engine !== 'minimax') {
    return null;
  }
  if (!settings.apiKey.trim() || !settings.groupId.trim() || !voice.minimaxVoiceId) {
    return null;
  }
  const request: MinimaxSynthesisRequest = {
    engine: 'minimax',
    text,
    apiKey: settings.apiKey,
    groupId: settings.groupId,
    voiceId: voice.minimaxVoiceId,
    model: settings.model,
    speed: settings.speed,
    vol: settings.vol,
    region: settings.minimaxRegion,
    timeoutMs: settings.requestTimeoutMs,
  };
  return request;
}

export function buildVoiceCatalogRequest(settings: ExtensionSettings): SynthesisRequest | null {
  if (settings.ttsEngine === 'index_tts') {
    if (!settings.indexTtsBaseUrl.trim()) {
      return null;
    }
    return {
      engine: 'index_tts',
      text: 'catalog',
      baseUrl: settings.indexTtsBaseUrl,
      voiceId: settings.indexTtsVoiceId.trim() || 'catalog',
      language: settings.indexTtsLanguage,
      durationFactor: settings.indexTtsDurationFactor,
      emoWeight: settings.indexTtsEmoWeight,
      timeoutMs: settings.requestTimeoutMs,
    };
  }
  if (settings.ttsEngine === 'fish_audio') {
    return {
      engine: 'fish_audio',
      text: 'catalog',
      apiKey: settings.fishAudioApiKey,
      model: settings.fishAudioModel,
      referenceId: settings.fishAudioReferenceId.trim(),
      speed: settings.fishAudioSpeed,
      volume: settings.fishAudioVolume,
      timeoutMs: settings.requestTimeoutMs,
    };
  }
  if (settings.ttsEngine === 'local_gsvi') {
    if (!settings.localGsviBaseUrl.trim()) {
      return null;
    }
    return {
      engine: 'local_gsvi',
      text: 'catalog',
      baseUrl: settings.localGsviBaseUrl,
      authToken: settings.localGsviAuthToken || undefined,
      modelId: settings.localGsviModel.trim() || 'catalog',
      language: settings.localGsviLanguage.trim() || 'ja',
      emotion: settings.localGsviEmotion.trim() || 'neutral',
      format: settings.localGsviFormat,
      speed: settings.speed,
      topK: settings.localGsviTopK,
      topP: settings.localGsviTopP,
      temperature: settings.localGsviTemperature,
      textLang: settings.localGsviTextLang,
      textSplitMethod: settings.localGsviTextSplitMethod,
      batchSize: settings.localGsviBatchSize,
      timeoutMs: settings.requestTimeoutMs,
    };
  }
  if (settings.ttsEngine !== 'minimax' || !settings.apiKey.trim()) {
    return null;
  }
  return {
    engine: 'minimax',
    text: 'catalog',
    apiKey: settings.apiKey,
    groupId: settings.groupId,
    voiceId: settings.voiceId.trim() || settings.voiceCatalogSelectedId.trim() || 'catalog',
    model: settings.model,
    speed: settings.speed,
    vol: settings.vol,
    region: settings.minimaxRegion,
    timeoutMs: settings.requestTimeoutMs,
  };
}

export function buildAudioCacheKeyInput(
  settings: ExtensionSettings,
  text: string,
  segment_char?: string,
  emotion?: SayEmotion,
): AudioCacheKeyInput {
  const voice = resolveSegmentVoice(settings, segment_char);
  if (settings.ttsEngine === 'index_tts') {
    return {
      text,
      engine: 'index_tts',
      indexTts: {
        origin: normalizeCacheOrigin(settings.indexTtsBaseUrl),
        model: INDEX_TTS_MODEL,
        voiceId: voice.indexTtsVoiceId ?? '',
        language: voice.indexTtsLanguage ?? settings.indexTtsLanguage,
        format: 'wav',
        durationFactor: settings.indexTtsDurationFactor,
        emoWeight: settings.indexTtsEmoWeight,
        emotion: canonicalizeSayEmotion(emotion),
      },
    };
  }
  if (settings.ttsEngine === 'fish_audio') {
    return {
      text,
      engine: 'fish_audio',
      fishAudio: {
        origin: FISH_AUDIO_BRIDGE_SPEECH_ENDPOINT,
        model: settings.fishAudioModel,
        referenceId: voice.fishAudioReferenceId ?? '',
        speed: settings.fishAudioSpeed,
        volume: settings.fishAudioVolume,
        format: 'mp3',
      },
    };
  }
  if (settings.ttsEngine === 'local_gsvi') {
    return {
      text,
      engine: 'local_gsvi',
      localGsvi: {
        origin: normalizeCacheOrigin(settings.localGsviBaseUrl),
        model: voice.gsviVoiceId ?? '',
        format: settings.localGsviFormat,
        useReferenceAudio: settings.localGsviUseReferenceAudio,
        character: settings.localGsviCharacter,
        language: voice.gsviLanguage ?? '',
        emotion: voice.gsviEmotion ?? '',
        referenceText: settings.localGsviReferenceText,
        speed: settings.speed,
        topK: settings.localGsviTopK,
        topP: settings.localGsviTopP,
        temperature: settings.localGsviTemperature,
        textLang: settings.localGsviTextLang,
        textSplitMethod: settings.localGsviTextSplitMethod,
        batchSize: settings.localGsviBatchSize,
      },
    };
  }
  return {
    text,
    engine: 'minimax',
    minimax: {
      region: settings.minimaxRegion,
      groupId: settings.groupId,
      model: settings.model,
      voiceId: voice.minimaxVoiceId ?? '',
      speed: settings.speed,
      vol: settings.vol,
      format: 'mp3',
    },
  };
}
