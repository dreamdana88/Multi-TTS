import type { TtsEngineId } from '../engines/contract';

const ALLOWED_INTERJECTIONS = new Set([
  'laughs',
  'chuckle',
  'coughs',
  'clear-throat',
  'groans',
  'breath',
  'pant',
  'inhale',
  'exhale',
  'gasps',
  'sniffs',
  'sighs',
  'snorts',
  'burps',
  'lip-smacking',
  'humming',
  'hissing',
  'emm',
  'sneezes',
]);

const TAG_REGEX = /\(([a-z-]+)\)/gi;
const ALL_PAREN_INTERJECTION_REGEX = /\([a-z-]+\)/gi;
const FISH_AUDIO_PROMPT_REGEX = /\[([A-Za-z][A-Za-z\s,'".!?-]{0,39})\]/g;

function compactSpaces(text: string) {
  return text.replace(/\s{2,}/g, ' ').trim();
}

export function normalizeSayTextForTts(text: string): string {
  return compactSpaces(
    text.replace(TAG_REGEX, (_match, tag: string) => {
      const normalized = String(tag).toLowerCase();
      if (ALLOWED_INTERJECTIONS.has(normalized)) {
        return `(${normalized})`;
      }
      return '';
    }),
  );
}

export function normalizeSayTextForDisplay(text: string, engine: TtsEngineId = 'minimax'): string {
  if (engine === 'fish_audio') {
    return compactSpaces(text.replace(FISH_AUDIO_PROMPT_REGEX, ''));
  }
  return compactSpaces(text.replace(TAG_REGEX, ''));
}

export function stripInterjectionsForLocalGsvi(text: string): string {
  return compactSpaces(text.replace(ALL_PAREN_INTERJECTION_REGEX, ''));
}

export function buildTtsInputText(raw_text: string, engine: TtsEngineId): string {
  if (engine === 'fish_audio') {
    return compactSpaces(raw_text);
  }
  const normalized = normalizeSayTextForTts(raw_text);
  if (engine === 'local_gsvi' || engine === 'index_tts') {
    return stripInterjectionsForLocalGsvi(normalized);
  }
  return normalized;
}
