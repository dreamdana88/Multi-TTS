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
    settings.ttsEngine === 'local_gsvi'
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

export function buildRoleMappingRule(settings: ExtensionSettings): string {
  const mapped_characters = resolveMappedCharacters(settings);
  const mapped_text =
    mapped_characters.length > 0 ? mapped_characters.join('、') : '（未配置角色映射）';
  return [
    '<VOICE_CHAR_RULE>',
    '输出台词标签时，必须使用完整格式：<say char="角色名">...</say>。',
    '禁止输出 <say>...</say>（无 char）格式。',
    `已配置角色映射名单：${mapped_text}`,
    '若说话者在映射名单中，char 必须与名单角色名完全一致（含标点/空格差异也视为不一致）。',
    '若说话者不在映射名单中，也必须填写实际说话角色名，char 不可省略。',
    '</VOICE_CHAR_RULE>',
  ].join('\n');
}

export function buildInjectContent(settings: ExtensionSettings): string {
  const mapped_characters = resolveMappedCharacters(settings).join('、') || '（未配置角色映射）';
  const template_content = settings.injectTemplate
    .replaceAll('${target_characters}', mapped_characters)
    .replaceAll('${mapped_characters}', mapped_characters);
  return `${template_content}\n\n${buildRoleMappingRule(settings)}`;
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
