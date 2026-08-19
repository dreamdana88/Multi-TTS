import { describe, expect, it } from 'vitest';
import {
  DEFAULT_EXTENSION_SETTINGS,
  EXTENSION_SETTINGS_SCHEMA_VERSION,
  parseExtensionSettings,
} from './extension-settings';

describe('parseExtensionSettings', () => {
  it('returns defaults for missing or invalid input', () => {
    expect(parseExtensionSettings(undefined)).toEqual(DEFAULT_EXTENSION_SETTINGS);
    expect(parseExtensionSettings(null)).toEqual(DEFAULT_EXTENSION_SETTINGS);
    expect(parseExtensionSettings('nope')).toEqual(DEFAULT_EXTENSION_SETTINGS);
    expect(parseExtensionSettings([])).toEqual(DEFAULT_EXTENSION_SETTINGS);
  });

  it('migrates a Step 1 payload and keeps enabled', () => {
    const parsed = parseExtensionSettings({
      schemaVersion: 1,
      enabled: false,
      extra: { nested: true },
    });
    expect(parsed.schemaVersion).toBe(EXTENSION_SETTINGS_SCHEMA_VERSION);
    expect(parsed.enabled).toBe(false);
    expect(parsed.ttsEngine).toBe('minimax');
    expect(parsed.injectEnabled).toBe(true);
  });

  it('keeps known engine fields and ignores unknown keys', () => {
    const parsed = parseExtensionSettings({
      enabled: true,
      ttsEngine: 'local_gsvi',
      apiKey: 'secret',
      groupId: 'g1',
      unknownField: true,
      speed: 9,
      injectDepth: -3,
    });
    expect(parsed.ttsEngine).toBe('local_gsvi');
    expect(parsed.apiKey).toBe('secret');
    expect(parsed.groupId).toBe('g1');
    expect(parsed.speed).toBe(2);
    expect(parsed.injectDepth).toBe(0);
    expect(parsed).not.toHaveProperty('unknownField');
  });

  it('keeps IndexTTS settings independent and rejects illegal languages', () => {
    const parsed = parseExtensionSettings({
      ttsEngine: 'index_tts',
      indexTtsBaseUrl: 'http://127.0.0.1:7860/',
      indexTtsVoiceId: 'mori',
      indexTtsLanguage: 'jp',
      characterMappings: [{ characterName: '爱丽丝', minimaxVoiceId: 'mm-voice' }],
      gsviCharacterMappings: [
        {
          characterName: '爱丽丝',
          gsviVoiceId: 'mori|v2Pro',
          gsviLanguage: 'ja',
          gsviEmotion: 'neutral',
        },
      ],
      indexTtsCharacterMappings: [
        { characterName: '爱丽丝', indexTtsVoiceId: 'mori', indexTtsLanguage: 'JA' },
        { characterName: '鲍勃', indexTtsVoiceId: 'sen', indexTtsLanguage: 'nope' },
      ],
      indexTtsCharacterMappingPresets: [
        {
          name: '卡1',
          mappings: [{ characterName: '森', indexTtsVoiceId: 'sen', indexTtsLanguage: 'ZH' }],
        },
      ],
    });
    expect(parsed.ttsEngine).toBe('index_tts');
    expect(parsed.indexTtsBaseUrl).toBe('http://127.0.0.1:7860/');
    expect(parsed.indexTtsVoiceId).toBe('mori');
    expect(parsed.indexTtsLanguage).toBe('ZH');
    expect(parsed.characterMappings).toEqual([
      { characterName: '爱丽丝', minimaxVoiceId: 'mm-voice' },
    ]);
    expect(parsed.gsviCharacterMappings[0]?.gsviVoiceId).toBe('mori|v2Pro');
    expect(parsed.indexTtsCharacterMappings).toEqual([
      { characterName: '爱丽丝', indexTtsVoiceId: 'mori', indexTtsLanguage: 'JA' },
      { characterName: '鲍勃', indexTtsVoiceId: 'sen', indexTtsLanguage: 'ZH' },
    ]);
    expect(parsed.indexTtsCharacterMappingPresets).toEqual([
      {
        name: '卡1',
        mappings: [{ characterName: '森', indexTtsVoiceId: 'sen', indexTtsLanguage: 'ZH' }],
      },
    ]);
  });
});
