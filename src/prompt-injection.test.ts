import { describe, expect, it, vi } from 'vitest';
import { DEFAULT_EXTENSION_SETTINGS } from './extension-settings';
import {
  PROMPT_INJECTION_ID,
  ST_PROMPT_POSITION_IN_CHAT,
  ST_PROMPT_ROLES,
  applyPromptInjection,
  buildInjectContent,
  clearPromptInjection,
  resolveMappedCharacters,
} from './prompt-injection';

describe('prompt injection', () => {
  it('lists unique mapped character names for the active engine', () => {
    const settings = {
      ...DEFAULT_EXTENSION_SETTINGS,
      characterMappings: [
        { characterName: '爱丽丝', minimaxVoiceId: 'a' },
        { characterName: '爱丽丝', minimaxVoiceId: 'b' },
        { characterName: '鲍勃', minimaxVoiceId: 'c' },
      ],
    };
    expect(resolveMappedCharacters(settings)).toEqual(['爱丽丝', '鲍勃']);
    expect(
      resolveMappedCharacters({
        ...DEFAULT_EXTENSION_SETTINGS,
        ttsEngine: 'index_tts',
        characterMappings: [{ characterName: '被忽略的 MiniMax', minimaxVoiceId: 'mm' }],
        indexTtsCharacterMappings: [
          { characterName: '森', indexTtsVoiceId: 'sen', indexTtsLanguage: 'ZH' },
          { characterName: '爱丽丝', indexTtsVoiceId: 'mori', indexTtsLanguage: 'JA' },
        ],
      }),
    ).toEqual(['森', '爱丽丝']);
  });

  it('fills mapped_characters in the template', () => {
    const content = buildInjectContent({
      ...DEFAULT_EXTENSION_SETTINGS,
      characterMappings: [{ characterName: '爱丽丝', minimaxVoiceId: 'a' }],
    });
    expect(content).toContain('爱丽丝');
    expect(content).not.toContain('<VOICE_CHAR_RULE>');
    expect(content).not.toContain('${mapped_characters}');
    expect(content).toContain('(laughs)');
    expect(content).toContain('char 必须与映射角色名完全一致，不要使用其他称呼。');
    expect(content).toContain('禁止填<user>');
    expect(content).not.toContain('emo="名称:数值"');
    expect(content).not.toContain('情绪规则：');
  });

  it('uses IndexTTS emo rules only for the IndexTTS engine', () => {
    const index_content = buildInjectContent({
      ...DEFAULT_EXTENSION_SETTINGS,
      ttsEngine: 'index_tts',
      injectTemplate: '自定义 MiniMax 模板 ${mapped_characters}',
      indexTtsCharacterMappings: [
        { characterName: '水无濑寻', indexTtsVoiceId: 'mori', indexTtsLanguage: 'ZH' },
      ],
    });
    expect(index_content).toContain('水无濑寻');
    expect(index_content).toContain('总则：');
    expect(index_content).toContain('情绪规则：');
    expect(index_content).toContain('日常、闲聊、平静叙述省略 emo');
    expect(index_content).toContain('喜、怒、哀、惧、厌恶、低落、惊喜、平静');
    expect(index_content).toContain('emo="怒:0.35"');
    expect(index_content).toContain('哀:0.30,低落:0.15');
    expect(index_content).toContain('禁止：八位数组、英文情绪名、零值占位、重复名称、无意义堆叠。');
    expect(index_content).toContain('每句独立判断');
    expect(index_content).toContain('禁止括号语气词');
    expect(index_content).toContain('不要使用其他称呼');
    expect(index_content).not.toContain('(laughs), (chuckle)');
    expect(index_content).not.toContain('自定义 MiniMax 模板');
    expect(index_content).not.toContain('<VOICE_CHAR_RULE>');

    const custom_index = buildInjectContent({
      ...DEFAULT_EXTENSION_SETTINGS,
      ttsEngine: 'index_tts',
      injectTemplate: '自定义 MiniMax 模板',
      indexTtsInjectTemplate: 'Index 自定义 ${mapped_characters}',
      indexTtsCharacterMappings: [
        { characterName: '水无濑寻', indexTtsVoiceId: 'mori', indexTtsLanguage: 'ZH' },
      ],
    });
    expect(custom_index).toBe('Index 自定义 水无濑寻');
    expect(custom_index).not.toContain('自定义 MiniMax 模板');

    const gsvi_content = buildInjectContent({
      ...DEFAULT_EXTENSION_SETTINGS,
      ttsEngine: 'local_gsvi',
      gsviCharacterMappings: [
        {
          characterName: '爱丽丝',
          gsviVoiceId: 'mori|v2Pro',
          gsviLanguage: 'ja',
          gsviEmotion: 'neutral',
        },
      ],
    });
    expect(gsvi_content).toContain('(laughs)');
    expect(gsvi_content).not.toContain('emo="名称:数值"');
  });

  it('applies IN_CHAT injection through the official host and can clear it', () => {
    const host = {
      setExtensionPrompt: vi.fn(),
      deleteExtensionPrompt: vi.fn(),
    };
    const settings = {
      ...DEFAULT_EXTENSION_SETTINGS,
      injectDepth: 2,
      injectRole: 'system' as const,
    };
    expect(applyPromptInjection(host, settings)).toEqual({
      applied: true,
      depth: 2,
      role: 'system',
    });
    expect(host.setExtensionPrompt).toHaveBeenCalledWith(
      PROMPT_INJECTION_ID,
      expect.stringContaining('<VOICE_RULE>'),
      ST_PROMPT_POSITION_IN_CHAT,
      2,
      false,
      ST_PROMPT_ROLES.system,
    );

    applyPromptInjection(host, { ...settings, injectEnabled: false });
    expect(host.deleteExtensionPrompt).toHaveBeenCalledWith(PROMPT_INJECTION_ID);

    host.deleteExtensionPrompt.mockClear();
    applyPromptInjection(host, { ...settings, enabled: false, injectEnabled: true });
    expect(host.setExtensionPrompt).toHaveBeenCalledTimes(1);
    expect(host.deleteExtensionPrompt).toHaveBeenCalledWith(PROMPT_INJECTION_ID);

    host.deleteExtensionPrompt.mockClear();
    applyPromptInjection(host, { ...settings, enabled: true, injectEnabled: false });
    expect(host.deleteExtensionPrompt).toHaveBeenCalledWith(PROMPT_INJECTION_ID);

    clearPromptInjection(host);
    expect(host.deleteExtensionPrompt).toHaveBeenCalledTimes(2);
  });
});
