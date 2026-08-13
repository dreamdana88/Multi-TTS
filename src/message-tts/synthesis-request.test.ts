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
