import { describe, expect, it } from 'vitest';
import { DEFAULT_EXTENSION_SETTINGS } from '../extension-settings';
import {
  buildSynthesisRequest,
  buildVoiceCatalogRequest,
  hasCharacterMapping,
  resolveSegmentVoice,
} from './synthesis-request';

describe('resolveSegmentVoice', () => {
  it('uses the mapped MiniMax voice and otherwise the default', () => {
    const settings = {
      ...DEFAULT_EXTENSION_SETTINGS,
      voiceId: 'default-voice',
      characterMappings: [{ characterName: '爱丽丝', minimaxVoiceId: 'mapped-voice' }],
    };
    expect(resolveSegmentVoice(settings, '爱丽丝').minimaxVoiceId).toBe('mapped-voice');
    expect(resolveSegmentVoice(settings, '未知').minimaxVoiceId).toBe('default-voice');
  });

  it('uses the last complete MiniMax mapping when names repeat', () => {
    const settings = {
      ...DEFAULT_EXTENSION_SETTINGS,
      voiceId: 'default-voice',
      characterMappings: [
        { characterName: '爱丽丝', minimaxVoiceId: 'first-voice' },
        { characterName: '爱丽丝', minimaxVoiceId: 'last-voice' },
        { characterName: '爱丽丝', minimaxVoiceId: '' },
      ],
    };
    expect(resolveSegmentVoice(settings, '爱丽丝').minimaxVoiceId).toBe('last-voice');
    expect(
      buildSynthesisRequest({ ...settings, apiKey: 'k', groupId: 'g' }, '你好', '爱丽丝'),
    ).toMatchObject({ voiceId: 'last-voice' });
  });

  it('uses the last complete GSVI mapping when names repeat', () => {
    const settings = {
      ...DEFAULT_EXTENSION_SETTINGS,
      ttsEngine: 'local_gsvi' as const,
      localGsviBaseUrl: 'http://127.0.0.1:9880',
      localGsviModel: 'default-model',
      localGsviLanguage: 'zh',
      localGsviEmotion: 'neutral',
      gsviCharacterMappings: [
        {
          characterName: '爱丽丝',
          gsviVoiceId: 'first-model',
          gsviLanguage: 'zh',
          gsviEmotion: 'calm',
        },
        {
          characterName: '爱丽丝',
          gsviVoiceId: 'last-model',
          gsviLanguage: 'ja',
          gsviEmotion: 'happy',
        },
        {
          characterName: '爱丽丝',
          gsviVoiceId: '',
          gsviLanguage: '',
          gsviEmotion: '',
        },
      ],
    };
    expect(resolveSegmentVoice(settings, '爱丽丝')).toMatchObject({
      gsviVoiceId: 'last-model',
      gsviLanguage: 'ja',
      gsviEmotion: 'happy',
    });
    expect(buildSynthesisRequest(settings, '你好', '爱丽丝')).toMatchObject({
      modelId: 'last-model',
      language: 'ja',
      emotion: 'happy',
    });
  });
});

describe('hasCharacterMapping', () => {
  it('treats empty char as allowed and skips unmapped names', () => {
    const settings = {
      ...DEFAULT_EXTENSION_SETTINGS,
      voiceId: 'default-voice',
      characterMappings: [{ characterName: '爱丽丝', minimaxVoiceId: 'mapped-voice' }],
    };
    expect(hasCharacterMapping(settings, undefined)).toBe(true);
    expect(hasCharacterMapping(settings, '')).toBe(true);
    expect(hasCharacterMapping(settings, '爱丽丝')).toBe(true);
    expect(hasCharacterMapping(settings, '未知')).toBe(false);
  });

  it('ignores incomplete duplicate rows when deciding if a name is mapped', () => {
    const settings = {
      ...DEFAULT_EXTENSION_SETTINGS,
      characterMappings: [
        { characterName: '爱丽丝', minimaxVoiceId: 'v1' },
        { characterName: '爱丽丝', minimaxVoiceId: '' },
      ],
    };
    expect(hasCharacterMapping(settings, '爱丽丝')).toBe(true);
    expect(
      hasCharacterMapping(
        {
          ...settings,
          characterMappings: [{ characterName: '爱丽丝', minimaxVoiceId: '' }],
        },
        '爱丽丝',
      ),
    ).toBe(false);
  });
});

describe('buildSynthesisRequest', () => {
  it('does not fall back to the default voice for an unmapped char', () => {
    const request = buildSynthesisRequest(
      {
        ...DEFAULT_EXTENSION_SETTINGS,
        apiKey: 'k',
        groupId: 'g',
        voiceId: 'default-voice',
        characterMappings: [{ characterName: '爱丽丝', minimaxVoiceId: 'v1' }],
      },
      '出去',
      '未知',
    );
    expect(request).toBeNull();
  });

  it('does not fall back to the default GSVI model for an unmapped char', () => {
    const request = buildSynthesisRequest(
      {
        ...DEFAULT_EXTENSION_SETTINGS,
        ttsEngine: 'local_gsvi',
        localGsviBaseUrl: 'http://127.0.0.1:9880',
        localGsviModel: 'default-model',
        localGsviLanguage: 'zh',
        localGsviEmotion: 'neutral',
        gsviCharacterMappings: [
          {
            characterName: '爱丽丝',
            gsviVoiceId: 'mapped-model',
            gsviLanguage: 'zh',
            gsviEmotion: 'happy',
          },
        ],
      },
      '出去',
      '未知',
    );
    expect(request).toBeNull();
  });

  it('builds a catalog request without requiring a mapped character', () => {
    expect(buildVoiceCatalogRequest(DEFAULT_EXTENSION_SETTINGS)).toBeNull();
    expect(
      buildVoiceCatalogRequest({
        ...DEFAULT_EXTENSION_SETTINGS,
        apiKey: 'k',
        groupId: 'g',
      }),
    ).toMatchObject({ engine: 'minimax', groupId: 'g' });
    expect(
      buildVoiceCatalogRequest({
        ...DEFAULT_EXTENSION_SETTINGS,
        ttsEngine: 'local_gsvi',
        localGsviBaseUrl: 'http://127.0.0.1:9880',
      }),
    ).toMatchObject({ engine: 'local_gsvi', baseUrl: 'http://127.0.0.1:9880' });
  });

  it('returns null when MiniMax required fields are missing', () => {
    expect(buildSynthesisRequest(DEFAULT_EXTENSION_SETTINGS, '你好', '爱丽丝')).toBeNull();
  });

  it('builds a MiniMax request from settings and mapping', () => {
    const request = buildSynthesisRequest(
      {
        ...DEFAULT_EXTENSION_SETTINGS,
        apiKey: 'k',
        groupId: 'g',
        characterMappings: [{ characterName: '爱丽丝', minimaxVoiceId: 'v1' }],
      },
      '你好',
      '爱丽丝',
    );
    expect(request).toMatchObject({
      engine: 'minimax',
      text: '你好',
      groupId: 'g',
      voiceId: 'v1',
      region: 'international',
    });
    expect(request && 'apiKey' in request ? request.apiKey : '').toBe('k');
  });
});
