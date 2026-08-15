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
  });

  it('fills mapped_characters in the template', () => {
    const content = buildInjectContent({
      ...DEFAULT_EXTENSION_SETTINGS,
      characterMappings: [{ characterName: '爱丽丝', minimaxVoiceId: 'a' }],
    });
    expect(content).toContain('爱丽丝');
    expect(content).toContain('<VOICE_CHAR_RULE>');
    expect(content).not.toContain('${mapped_characters}');
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
