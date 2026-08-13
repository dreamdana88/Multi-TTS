export type SaySegment = {
  index: number;
  text: string;
  char?: string;
};

const SAY_TAG = /<say(?:\s+char\s*=\s*(?:"([^"]*)"|“([^”]*)”))?\s*>([\s\S]*?)<\/say>/gi;

export function extractSaySegments(message: string): SaySegment[] {
  const regex = new RegExp(SAY_TAG.source, SAY_TAG.flags);
  const segments: SaySegment[] = [];

  let match: RegExpExecArray | null;
  let index = 0;
  while ((match = regex.exec(message)) !== null) {
    const char = (match[1] ?? match[2])?.trim();
    const text = match[3].trim();
    if (!text) {
      continue;
    }
    segments.push({ index, text, ...(char ? { char } : {}) });
    index += 1;
  }

  return segments;
}
