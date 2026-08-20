import { describe, expect, it } from 'vitest';
import {
  DEFAULT_EXTENSION_SETTINGS,
  DEFAULT_INJECT_TEMPLATE,
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

  it('replaces the previous default inject template and keeps custom text', () => {
    const legacy = [
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
    expect(parseExtensionSettings({ injectTemplate: legacy }).injectTemplate).toBe(
      DEFAULT_INJECT_TEMPLATE,
    );
    expect(parseExtensionSettings({ injectTemplate: '自定义模板' }).injectTemplate).toBe(
      '自定义模板',
    );
    const missing_index = parseExtensionSettings({ injectTemplate: '自定义模板' });
    expect(missing_index.indexTtsInjectTemplate).toBe(
      DEFAULT_EXTENSION_SETTINGS.indexTtsInjectTemplate,
    );
    expect(
      parseExtensionSettings({ indexTtsInjectTemplate: 'Index 自定义' }).indexTtsInjectTemplate,
    ).toBe('Index 自定义');
    expect(parseExtensionSettings({ indexTtsInjectTemplate: 'Index 自定义' }).injectTemplate).toBe(
      DEFAULT_INJECT_TEMPLATE,
    );
  });
});
