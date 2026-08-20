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

export const INDEX_TTS_INJECT_TEMPLATE = [
  '<VOICE_RULE>',
  '总则：',
  '请仅对角色：${mapped_characters} 的“直接台词”添加 <say char="角色名">...</say> 标签。',
  '角色映射名单：${mapped_characters}',
  'char 必须与映射角色名完全一致，不要使用其他称呼。',
  '<say char="角色名">禁止填<user>。',
  '不要给旁白、动作描写、心理活动、双语的中文翻译内容加 <say> 标签。',
  '不要输出空的 <say></say>，不要嵌套 <say> 标签。',
  '禁止括号语气词（如 (laughs)、(sighs)、(softly)）。',
  '',
  '情绪规则：',
  '当对话内容有明显情绪变化时应为角色添加情绪向量 emo="名称:数值"。',
  '合法情绪向量仅限：喜、怒、哀、惧、厌恶、低落、惊喜、平静。',
  '每句独立判断；不要沿用上一句，也不要给日常句补“平静”',
  '日常、闲聊、平静叙述省略 emo，只写：<say char="角色名">台词</say>',
  '允许使用1 至 3 项不同情绪；优先用一项，确有复合情绪时最多三项。多项用半角逗号分隔。char 与 emo 属性顺序不限。',
  '每个数值必须是大于 0、不超过 1.0 的有限数字。轻微 0.10–0.35，明显 0.35–0.60，0.80 以上只用于重大爆发，数值使用尽量克制不要滥用。',
  '禁止：八位数组、英文情绪名、零值占位、重复名称、无意义堆叠。',
  '示例:',
  '<say char="角色名">今天要去哪里？</say>',
  '<say char="角色名" emo="怒:0.35">别骗我。</say>',
  '<say char="角色名" emo="哀:0.30,低落:0.15">我不想再等了。</say>',
  '</VOICE_RULE>',
].join('\n');

function templateForEngine(settings: ExtensionSettings): string {
  if (settings.ttsEngine === 'index_tts') {
    return INDEX_TTS_INJECT_TEMPLATE;
  }
  return settings.injectTemplate;
}

export function buildInjectContent(settings: ExtensionSettings): string {
  const mapped_characters = resolveMappedCharacters(settings).join('、') || '（未配置角色映射）';
  const template_content = templateForEngine(settings)
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
