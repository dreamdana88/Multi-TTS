import { describe, expect, it } from 'vitest';
import { DEFAULT_EXTENSION_SETTINGS } from '../extension-settings';
import { buildSynthesisRequest, resolveSegmentVoice } from './synthesis-request';

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

describe('buildSynthesisRequest', () => {
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
