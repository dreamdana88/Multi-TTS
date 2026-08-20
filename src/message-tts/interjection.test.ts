import { describe, expect, it } from 'vitest';
import {
  buildTtsInputText,
  normalizeSayTextForDisplay,
  normalizeSayTextForTts,
  stripInterjectionsForLocalGsvi,
} from './interjection';

describe('interjection normalization', () => {
  it('keeps allowed MiniMax tags and drops unknown ones', () => {
    expect(normalizeSayTextForTts('(Laughs)你好 (softly)啊 (sighs)')).toBe(
      '(laughs)你好 啊 (sighs)',
    );
  });

  it('strips all parenthetical tags for display', () => {
    expect(normalizeSayTextForDisplay('(laughs)你好 (softly)啊')).toBe('你好 啊');
  });

  it('strips every parenthetical tag for Local-GSVI', () => {
    expect(stripInterjectionsForLocalGsvi('(laughs)你好 (sighs)')).toBe('你好');
  });

  it('builds engine-specific TTS input from the same raw line', () => {
    const raw = '(Laughs)出发 (softly)吧';
    expect(buildTtsInputText(raw, 'minimax')).toBe('(laughs)出发 吧');
    expect(buildTtsInputText(raw, 'local_gsvi')).toBe('出发 吧');
    expect(buildTtsInputText(raw, 'index_tts')).toBe('出发 吧');
  });

  it('keeps Fish Audio bracket prompts for synthesis but hides only short English prompts on display', () => {
    const raw =
      '[laughing]你居然来了。[中文提示] [this sentence is intentionally far too long to be a prompt]';
    expect(buildTtsInputText(raw, 'fish_audio')).toBe(raw);
    expect(normalizeSayTextForDisplay(raw, 'fish_audio')).toBe(
      '你居然来了。[中文提示] [this sentence is intentionally far too long to be a prompt]',
    );
    expect(normalizeSayTextForDisplay('[whispers softly]小声一点', 'fish_audio')).toBe('小声一点');
  });

  it('returns empty string when only illegal tags remain', () => {
    expect(normalizeSayTextForTts('(softly) (gently)')).toBe('');
    expect(normalizeSayTextForDisplay('(laughs)')).toBe('');
  });
});
