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

export function normalizeSayTextForDisplay(text: string): string {
  return compactSpaces(text.replace(TAG_REGEX, ''));
}

export function stripInterjectionsForLocalGsvi(text: string): string {
  return compactSpaces(text.replace(ALL_PAREN_INTERJECTION_REGEX, ''));
}

export function buildTtsInputText(
  raw_text: string,
  engine: 'minimax' | 'local_gsvi' | 'index_tts',
): string {
  const normalized = normalizeSayTextForTts(raw_text);
  if (engine === 'local_gsvi' || engine === 'index_tts') {
    return stripInterjectionsForLocalGsvi(normalized);
  }
  return normalized;
}
