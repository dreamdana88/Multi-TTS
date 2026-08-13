import type { VoiceDescriptor } from '../engines/contract';

export type VoiceCatalogFilter = {
  search: string;
  language: string;
  gender: string;
  source: string;
};

export function uniqueVoiceLanguages(voices: VoiceDescriptor[]): string[] {
  return [
    ...new Set(voices.map((item) => item.language).filter((item): item is string => Boolean(item))),
  ].sort();
}

export function filterVoiceCatalog(
  voices: VoiceDescriptor[],
  filter: VoiceCatalogFilter,
): VoiceDescriptor[] {
  const keyword = filter.search.trim().toLowerCase();
  return voices.filter((item) => {
    if (filter.language !== 'all' && item.language !== filter.language) {
      return false;
    }
    if (filter.gender !== 'all' && item.gender !== filter.gender) {
      return false;
    }
    if (filter.source !== 'all' && item.source !== filter.source) {
      return false;
    }
    if (!keyword) {
      return true;
    }
    const haystack = [item.id, item.name, ...(item.description ?? [])].join(' ').toLowerCase();
    return haystack.includes(keyword);
  });
}

export function formatVoiceOption(voice: VoiceDescriptor): string {
  const tags = [voice.language, voice.gender, voice.source].filter(Boolean);
  return tags.length > 0 ? `${voice.name} (${tags.join(' / ')})` : voice.name;
}

export function gsviLanguages(voice: VoiceDescriptor | undefined): string[] {
  return voice?.languages ?? [];
}

export function gsviEmotions(voice: VoiceDescriptor | undefined, language: string): string[] {
  const key = language.trim();
  if (!voice || !key) {
    return [];
  }
  return voice.emotionsByLanguage?.[key] ?? [];
}

export function formatCacheSize(total_bytes: number): string {
  if (total_bytes < 1024) {
    return `${total_bytes} B`;
  }
  if (total_bytes < 1024 * 1024) {
    return `${(total_bytes / 1024).toFixed(1)} KB`;
  }
  return `${(total_bytes / (1024 * 1024)).toFixed(2)} MB`;
}
