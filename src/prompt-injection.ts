import type { ExtensionSettings } from './extension-settings';

export const PROMPT_INJECTION_ID = 'tavern_multi_tts_say_rule';

/** Verified against SillyTavern 1.18.0 `script.js` `extension_prompt_types`. */
export const ST_PROMPT_POSITION_IN_CHAT = 1;

/** Verified against SillyTavern 1.18.0 `script.js` `extension_prompt_roles`. */
export const ST_PROMPT_ROLES = {
  system: 0,
  user: 1,
  assistant: 2,
} as const;

export function resolveMappedCharacters(settings: ExtensionSettings): string[] {
  const source =
    settings.ttsEngine === 'index_tts'
      ? settings.indexTtsCharacterMappings
      : settings.ttsEngine === 'local_gsvi'
        ? settings.gsviCharacterMappings
        : settings.characterMappings;
  const names: string[] = [];
  for (const item of source) {
    const name = item.characterName.trim();
    if (name && !names.includes(name)) {
      names.push(name);
    }
  }
  return names;
}

function templateForEngine(settings: ExtensionSettings): string {
  if (settings.ttsEngine === 'index_tts') {
    return settings.indexTtsInjectTemplate;
  }
  return settings.injectTemplate;
}

export function buildInjectContent(settings: ExtensionSettings): string {
  const mapped_characters = resolveMappedCharacters(settings).join('、') || '（未配置角色映射）';
  return templateForEngine(settings)
    .replaceAll('${target_characters}', mapped_characters)
    .replaceAll('${mapped_characters}', mapped_characters);
}

export type PromptInjectionHost = {
  setExtensionPrompt(
    key: string,
    value: string,
    position: number,
    depth: number,
    scan: boolean,
    role: number,
  ): void;
  deleteExtensionPrompt(key: string): void;
};

export function applyPromptInjection(host: PromptInjectionHost, settings: ExtensionSettings) {
  if (!settings.enabled || !settings.injectEnabled) {
    host.deleteExtensionPrompt(PROMPT_INJECTION_ID);
    return { applied: false };
  }
  host.setExtensionPrompt(
    PROMPT_INJECTION_ID,
    buildInjectContent(settings),
    ST_PROMPT_POSITION_IN_CHAT,
    settings.injectDepth,
    false,
    ST_PROMPT_ROLES[settings.injectRole],
  );
  return { applied: true, depth: settings.injectDepth, role: settings.injectRole };
}

export function clearPromptInjection(host: PromptInjectionHost) {
  host.deleteExtensionPrompt(PROMPT_INJECTION_ID);
}
