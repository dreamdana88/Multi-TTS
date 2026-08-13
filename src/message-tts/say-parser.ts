export type SaySegment = {
  index: number;
  text: string;
  char?: string;
};

export function extractSaySegments(message: string): SaySegment[] {
  const regex = /<say(?:\s+char="([^"]*)")?\s*>([\s\S]*?)<\/say>/gi;
  const segments: SaySegment[] = [];

  let match: RegExpExecArray | null;
  let index = 0;
  while ((match = regex.exec(message)) !== null) {
    const char = match[1]?.trim();
    const text = match[2].trim();
    if (!text) {
      continue;
    }
    segments.push({ index, text, ...(char ? { char } : {}) });
    index += 1;
  }

  return segments;
}
