import { normalizeCacheOrigin, type AudioCacheKeyInput } from '../audio-cache';
import type { ExtensionSettings } from '../extension-settings';
import type {
  LocalGsviSynthesisRequest,
  MinimaxSynthesisRequest,
  SynthesisRequest,
} from '../engines/contract';

export type ResolvedVoice = {
  engine: ExtensionSettings['ttsEngine'];
  minimaxVoiceId?: string;
  gsviVoiceId?: string;
  gsviLanguage?: string;
  gsviEmotion?: string;
};

export function hasCharacterMapping(
  settings: ExtensionSettings,
  segment_char: string | undefined,
): boolean {
  const character = segment_char?.trim() ?? '';
  if (!character) {
    return true;
  }
  const mappings =
    settings.ttsEngine === 'local_gsvi'
      ? settings.gsviCharacterMappings
      : settings.characterMappings;
  return mappings.some((item) => item.characterName.trim() === character);
}

export function resolveSegmentVoice(
  settings: ExtensionSettings,
  segment_char: string | undefined,
): ResolvedVoice {
  const character = segment_char?.trim() ?? '';
  if (settings.ttsEngine === 'local_gsvi') {
    const mapping = settings.gsviCharacterMappings.find(
      (item) => item.characterName.trim() === character,
    );
    return {
      engine: 'local_gsvi',
      gsviVoiceId: mapping?.gsviVoiceId?.trim() || settings.localGsviModel.trim(),
      gsviLanguage: mapping?.gsviLanguage?.trim() || settings.localGsviLanguage.trim(),
      gsviEmotion: mapping?.gsviEmotion?.trim() || settings.localGsviEmotion.trim(),
    };
  }

  const mapping = settings.characterMappings.find(
    (item) => item.characterName.trim() === character,
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
): SynthesisRequest | null {
  if (!hasCharacterMapping(settings, segment_char)) {
    return null;
  }
  const voice = resolveSegmentVoice(settings, segment_char);
  if (voice.engine === 'local_gsvi') {
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
  if (!settings.apiKey.trim()) {
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
): AudioCacheKeyInput {
  const voice = resolveSegmentVoice(settings, segment_char);
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
