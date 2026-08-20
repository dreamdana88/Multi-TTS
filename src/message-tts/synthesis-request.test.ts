import { describe, expect, it } from 'vitest';
import { createAudioCacheKey } from '../audio-cache';
import { DEFAULT_EXTENSION_SETTINGS } from '../extension-settings';
import {
  buildAudioCacheKeyInput,
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

  it('uses the last complete IndexTTS mapping when names repeat', () => {
    const settings = {
      ...DEFAULT_EXTENSION_SETTINGS,
      ttsEngine: 'index_tts' as const,
      indexTtsBaseUrl: 'http://127.0.0.1:7860',
      indexTtsVoiceId: 'default-voice',
      indexTtsLanguage: 'ZH' as const,
      indexTtsCharacterMappings: [
        {
          characterName: '爱丽丝',
          indexTtsVoiceId: 'first-voice',
          indexTtsLanguage: 'ZH' as const,
        },
        { characterName: '爱丽丝', indexTtsVoiceId: 'last-voice', indexTtsLanguage: 'JA' as const },
        { characterName: '爱丽丝', indexTtsVoiceId: '', indexTtsLanguage: 'EN' as const },
      ],
    };
    expect(resolveSegmentVoice(settings, '爱丽丝')).toMatchObject({
      engine: 'index_tts',
      indexTtsVoiceId: 'last-voice',
      indexTtsLanguage: 'JA',
    });
    expect(buildSynthesisRequest(settings, '你好', '爱丽丝')).toMatchObject({
      engine: 'index_tts',
      voiceId: 'last-voice',
      language: 'JA',
    });
  });

  it('uses the last complete Fish Audio mapping and never falls back for an unmapped char', () => {
    const settings = {
      ...DEFAULT_EXTENSION_SETTINGS,
      ttsEngine: 'fish_audio' as const,
      fishAudioApiKey: 'fish-secret',
      fishAudioReferenceId: 'default-model',
      fishAudioCharacterMappings: [
        { characterName: '爱丽丝', fishAudioReferenceId: 'first-model' },
        { characterName: '爱丽丝', fishAudioReferenceId: 'last-model' },
        { characterName: '爱丽丝', fishAudioReferenceId: '' },
      ],
    };
    expect(resolveSegmentVoice(settings, '爱丽丝')).toMatchObject({
      engine: 'fish_audio',
      fishAudioReferenceId: 'last-model',
    });
    expect(buildSynthesisRequest(settings, '[laughing]你好', '爱丽丝')).toMatchObject({
      engine: 'fish_audio',
      referenceId: 'last-model',
      text: '[laughing]你好',
      speed: 1,
      volume: 0,
    });
    expect(buildSynthesisRequest(settings, '出去', '未知')).toBeNull();
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
    expect(
      hasCharacterMapping(
        {
          ...DEFAULT_EXTENSION_SETTINGS,
          ttsEngine: 'index_tts',
          indexTtsCharacterMappings: [
            { characterName: '爱丽丝', indexTtsVoiceId: 'mori', indexTtsLanguage: 'ZH' },
          ],
        },
        '爱丽丝',
      ),
    ).toBe(true);
    expect(
      hasCharacterMapping(
        {
          ...DEFAULT_EXTENSION_SETTINGS,
          ttsEngine: 'index_tts',
          characterMappings: [{ characterName: '爱丽丝', minimaxVoiceId: 'v1' }],
        },
        '爱丽丝',
      ),
    ).toBe(false);
    expect(
      hasCharacterMapping(
        {
          ...DEFAULT_EXTENSION_SETTINGS,
          ttsEngine: 'fish_audio',
          fishAudioCharacterMappings: [
            { characterName: '爱丽丝', fishAudioReferenceId: 'fish-voice' },
          ],
        },
        '爱丽丝',
      ),
    ).toBe(true);
    expect(
      hasCharacterMapping(
        {
          ...DEFAULT_EXTENSION_SETTINGS,
          ttsEngine: 'fish_audio',
          fishAudioReferenceId: 'default-fish-voice',
        },
        '未知',
      ),
    ).toBe(false);
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

  it('does not fall back to the default IndexTTS voice for an unmapped char', () => {
    const request = buildSynthesisRequest(
      {
        ...DEFAULT_EXTENSION_SETTINGS,
        ttsEngine: 'index_tts',
        indexTtsBaseUrl: 'http://127.0.0.1:7860',
        indexTtsVoiceId: 'default-voice',
        indexTtsLanguage: 'ZH',
        indexTtsCharacterMappings: [
          { characterName: '爱丽丝', indexTtsVoiceId: 'mapped-voice', indexTtsLanguage: 'JA' },
        ],
      },
      '出去',
      '未知',
    );
    expect(request).toBeNull();
  });

  it('builds a default IndexTTS request for lines without char', () => {
    const request = buildSynthesisRequest(
      {
        ...DEFAULT_EXTENSION_SETTINGS,
        ttsEngine: 'index_tts',
        indexTtsBaseUrl: 'http://127.0.0.1:7860',
        indexTtsVoiceId: 'default-voice',
        indexTtsLanguage: 'EN',
      },
      'Hello',
    );
    expect(request).toMatchObject({
      engine: 'index_tts',
      text: 'Hello',
      voiceId: 'default-voice',
      language: 'EN',
      baseUrl: 'http://127.0.0.1:7860',
      durationFactor: 1,
      emoWeight: 0.8,
    });
    expect(request && 'model' in request ? request.model : undefined).toBeUndefined();
    expect(request && 'emotion' in request ? request.emotion : undefined).toBeUndefined();
  });

  it('adds IndexTTS emotion only for a valid sparse map', () => {
    const settings = {
      ...DEFAULT_EXTENSION_SETTINGS,
      ttsEngine: 'index_tts' as const,
      indexTtsBaseUrl: 'http://127.0.0.1:7860',
      indexTtsVoiceId: 'mori',
      indexTtsLanguage: 'ZH' as const,
      indexTtsCharacterMappings: [
        { characterName: '爱丽丝', indexTtsVoiceId: 'mori', indexTtsLanguage: 'ZH' as const },
      ],
    };
    const plain = buildSynthesisRequest(settings, '你好', '爱丽丝');
    expect(plain && 'emotion' in plain ? plain.emotion : undefined).toBeUndefined();
    const with_emo = buildSynthesisRequest(settings, '你好', '爱丽丝', { 怒: 0.35 });
    expect(with_emo).toMatchObject({
      engine: 'index_tts',
      emotion: { 怒: 0.35 },
    });
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
    expect(
      buildVoiceCatalogRequest({
        ...DEFAULT_EXTENSION_SETTINGS,
        ttsEngine: 'index_tts',
        indexTtsBaseUrl: 'http://127.0.0.1:7860',
      }),
    ).toMatchObject({ engine: 'index_tts', baseUrl: 'http://127.0.0.1:7860' });
    expect(
      buildVoiceCatalogRequest({
        ...DEFAULT_EXTENSION_SETTINGS,
        ttsEngine: 'fish_audio',
        fishAudioApiKey: 'fish-secret',
        fishAudioReferenceId: 'public-model',
      }),
    ).toMatchObject({
      engine: 'fish_audio',
      apiKey: 'fish-secret',
      model: 's2.1-pro-free',
      referenceId: 'public-model',
    });
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

  it('builds IndexTTS cache keys from text, origin, voice, language, and emotion', async () => {
    const settings = {
      ...DEFAULT_EXTENSION_SETTINGS,
      ttsEngine: 'index_tts' as const,
      indexTtsBaseUrl: 'http://127.0.0.1:7860/',
      indexTtsVoiceId: 'mori',
      indexTtsLanguage: 'ZH' as const,
      speed: 1.5,
      vol: 3,
      indexTtsCharacterMappings: [
        { characterName: '爱丽丝', indexTtsVoiceId: 'sen', indexTtsLanguage: 'JA' as const },
      ],
    };
    const base = await createAudioCacheKey(buildAudioCacheKeyInput(settings, '你好', '爱丽丝'));
    expect(await createAudioCacheKey(buildAudioCacheKeyInput(settings, '你好', '爱丽丝'))).toBe(
      base,
    );
    expect(
      await createAudioCacheKey(
        buildAudioCacheKeyInput({ ...settings, speed: 1 }, '你好', '爱丽丝'),
      ),
    ).toBe(base);
    expect(
      await createAudioCacheKey(buildAudioCacheKeyInput(settings, '另一句', '爱丽丝')),
    ).not.toBe(base);
    expect(
      await createAudioCacheKey(
        buildAudioCacheKeyInput(
          { ...settings, indexTtsBaseUrl: 'http://192.168.1.8:7860' },
          '你好',
          '爱丽丝',
        ),
      ),
    ).not.toBe(base);
    expect(
      await createAudioCacheKey(
        buildAudioCacheKeyInput(
          {
            ...settings,
            indexTtsCharacterMappings: [
              { characterName: '爱丽丝', indexTtsVoiceId: 'other', indexTtsLanguage: 'JA' },
            ],
          },
          '你好',
          '爱丽丝',
        ),
      ),
    ).not.toBe(base);
    expect(
      await createAudioCacheKey(
        buildAudioCacheKeyInput(
          {
            ...settings,
            indexTtsCharacterMappings: [
              { characterName: '爱丽丝', indexTtsVoiceId: 'sen', indexTtsLanguage: 'EN' },
            ],
          },
          '你好',
          '爱丽丝',
        ),
      ),
    ).not.toBe(base);
    const angry = await createAudioCacheKey(
      buildAudioCacheKeyInput(settings, '你好', '爱丽丝', { 怒: 0.35 }),
    );
    const reversed = await createAudioCacheKey(
      buildAudioCacheKeyInput(settings, '你好', '爱丽丝', { 平静: 0.1, 喜: 0.35 }),
    );
    const ordered = await createAudioCacheKey(
      buildAudioCacheKeyInput(settings, '你好', '爱丽丝', { 喜: 0.35, 平静: 0.1 }),
    );
    expect(angry).not.toBe(base);
    expect(reversed).toBe(ordered);
    expect(reversed).not.toBe(angry);
    expect(
      await createAudioCacheKey(
        buildAudioCacheKeyInput({ ...settings, indexTtsDurationFactor: 1.2 }, '你好', '爱丽丝'),
      ),
    ).not.toBe(base);
    expect(
      await createAudioCacheKey(
        buildAudioCacheKeyInput({ ...settings, indexTtsEmoWeight: 0.4 }, '你好', '爱丽丝'),
      ),
    ).not.toBe(base);
  });

  it('builds Fish Audio cache keys without API keys and scopes all audio-changing fields', async () => {
    const settings = {
      ...DEFAULT_EXTENSION_SETTINGS,
      ttsEngine: 'fish_audio' as const,
      fishAudioApiKey: 'fish-secret',
      fishAudioModel: 's2.1-pro-free' as const,
      fishAudioReferenceId: 'default-model',
      fishAudioSpeed: 1,
      fishAudioVolume: 0,
      fishAudioCharacterMappings: [
        { characterName: '爱丽丝', fishAudioReferenceId: 'mapped-model' },
      ],
    };
    const input = buildAudioCacheKeyInput(settings, '[laughing]你好', '爱丽丝');
    expect(input).toMatchObject({
      engine: 'fish_audio',
      text: '[laughing]你好',
      fishAudio: {
        origin: 'https://api.fish.audio',
        model: 's2.1-pro-free',
        referenceId: 'mapped-model',
        speed: 1,
        volume: 0,
        format: 'mp3',
      },
    });
    const base = await createAudioCacheKey(input);
    expect(
      await createAudioCacheKey(
        buildAudioCacheKeyInput(
          { ...settings, fishAudioApiKey: 'another-secret' },
          '[laughing]你好',
          '爱丽丝',
        ),
      ),
    ).toBe(base);
    for (const changed of [
      { fishAudioModel: 's2.1-pro' as const },
      { fishAudioSpeed: 1.2 },
      { fishAudioVolume: -2 },
    ]) {
      expect(
        await createAudioCacheKey(
          buildAudioCacheKeyInput({ ...settings, ...changed }, '[laughing]你好', '爱丽丝'),
        ),
      ).not.toBe(base);
    }
    expect(
      await createAudioCacheKey(
        buildAudioCacheKeyInput(
          { ...settings, fishAudioReferenceId: 'other-default' },
          '[laughing]你好',
        ),
      ),
    ).not.toBe(await createAudioCacheKey(buildAudioCacheKeyInput(settings, '[laughing]你好')));
    expect(
      await createAudioCacheKey(buildAudioCacheKeyInput(settings, '[sigh]你好', '爱丽丝')),
    ).not.toBe(base);
  });
});
