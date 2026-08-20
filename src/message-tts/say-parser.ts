import { LOG_PREFIX } from '../extension-meta';

export const INDEX_TTS_EMOTION_NAMES = [
  '喜',
  '怒',
  '哀',
  '惧',
  '厌恶',
  '低落',
  '惊喜',
  '平静',
] as const;

export type IndexTtsEmotionName = (typeof INDEX_TTS_EMOTION_NAMES)[number];
export type SayEmotion = Partial<Record<IndexTtsEmotionName, number>>;

export type SaySegment = {
  index: number;
  text: string;
  char?: string;
  emotion?: SayEmotion;
};

const SAY_TAG = /<say\b([^>]*)>([\s\S]*?)<\/say>/gi;
const ATTR_PAIR = /([A-Za-z_]+)\s*=\s*(?:"([^"]*)"|“([^”]*)”)/gi;
const ALLOWED_EMOTION = new Set<string>(INDEX_TTS_EMOTION_NAMES);

function parseOpenTagAttributes(raw: string): Record<string, string> | null {
  const attrs: Record<string, string> = {};
  const regex = new RegExp(ATTR_PAIR.source, ATTR_PAIR.flags);
  let match: RegExpExecArray | null;
  while ((match = regex.exec(raw)) !== null) {
    const value = match[2] ?? match[3] ?? '';
    attrs[match[1].toLowerCase()] = value;
  }
  const leftover = raw.replace(new RegExp(ATTR_PAIR.source, ATTR_PAIR.flags), '').trim();
  if (leftover) {
    return null;
  }
  return attrs;
}

function warnInvalidEmo(reason: string) {
  console.warn(`${LOG_PREFIX} invalid say emo`, { reason });
}

export function parseEmoAttribute(raw: string | undefined): SayEmotion | undefined {
  if (raw === undefined) {
    return undefined;
  }
  const trimmed = raw.trim();
  if (!trimmed) {
    warnInvalidEmo('empty');
    return undefined;
  }
  const normalized = trimmed.replaceAll('：', ':').replaceAll('，', ',');
  const parts = normalized
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  if (parts.length < 1 || parts.length > 3) {
    warnInvalidEmo('count');
    return undefined;
  }
  const emotion: SayEmotion = {};
  for (const part of parts) {
    const separator = part.indexOf(':');
    if (separator <= 0 || separator !== part.lastIndexOf(':')) {
      warnInvalidEmo('separator');
      return undefined;
    }
    const name = part.slice(0, separator).trim();
    const numeric_text = part.slice(separator + 1).trim();
    if (!ALLOWED_EMOTION.has(name) || name in emotion) {
      warnInvalidEmo('name');
      return undefined;
    }
    const value = Number(numeric_text);
    if (!Number.isFinite(value) || value <= 0 || value > 1) {
      warnInvalidEmo('value');
      return undefined;
    }
    emotion[name as IndexTtsEmotionName] = value;
  }
  return emotion;
}

export function canonicalizeSayEmotion(emotion: SayEmotion | undefined): string {
  if (!emotion) {
    return '';
  }
  return INDEX_TTS_EMOTION_NAMES.filter((name) => emotion[name] !== undefined)
    .map((name) => `${name}:${emotion[name]}`)
    .join(',');
}

export function extractSaySegments(message: string): SaySegment[] {
  const regex = new RegExp(SAY_TAG.source, SAY_TAG.flags);
  const segments: SaySegment[] = [];

  let match: RegExpExecArray | null;
  let index = 0;
  while ((match = regex.exec(message)) !== null) {
    const text = match[2].trim();
    if (!text) {
      continue;
    }
    const attrs = parseOpenTagAttributes(match[1] ?? '');
    if (!attrs) {
      continue;
    }
    const char = attrs.char?.trim();
    const emotion = parseEmoAttribute(attrs.emo);
    segments.push({
      index,
      text,
      ...(char ? { char } : {}),
      ...(emotion ? { emotion } : {}),
    });
    index += 1;
  }

  return segments;
}
