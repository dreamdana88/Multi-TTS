import { describe, expect, it } from 'vitest';
import type { VoiceDescriptor } from '../engines/contract';
import {
  filterVoiceCatalog,
  formatCacheSize,
  formatVoiceOption,
  gsviEmotions,
  gsviLanguages,
  uniqueVoiceLanguages,
} from './voice-catalog-filter';

const voices: VoiceDescriptor[] = [
  {
    id: 'v1',
    name: '青涩',
    language: 'zh',
    gender: 'Male',
    source: 'system',
    description: ['young'],
  },
  {
    id: 'v2',
    name: 'Alice',
    language: 'en',
    gender: 'Female',
    source: 'voice_cloning',
  },
  {
    id: 'mori|v2Pro',
    name: 'mori [v2Pro]',
    source: 'gsvi_model',
    languages: ['ja', 'zh'],
    emotionsByLanguage: { ja: ['neutral'], zh: ['calm'] },
  },
];

describe('voice catalog helpers', () => {
  it('filters by language, source and search text', () => {
    expect(
      filterVoiceCatalog(voices, {
        search: 'young',
        language: 'zh',
        gender: 'Male',
        source: 'system',
      }).map((item) => item.id),
    ).toEqual(['v1']);
    expect(uniqueVoiceLanguages(voices)).toEqual(['en', 'zh']);
    expect(formatVoiceOption(voices[0]!)).toBe('青涩 (zh / Male / system)');
  });

  it('reads GSVI language and emotion options from catalog metadata', () => {
    expect(gsviLanguages(voices[2])).toEqual(['ja', 'zh']);
    expect(gsviEmotions(voices[2], 'zh')).toEqual(['calm']);
    expect(gsviEmotions(voices[2], '')).toEqual([]);
  });

  it('formats cache sizes', () => {
    expect(formatCacheSize(512)).toBe('512 B');
    expect(formatCacheSize(2048)).toBe('2.0 KB');
    expect(formatCacheSize(2 * 1024 * 1024)).toBe('2.00 MB');
  });
});
