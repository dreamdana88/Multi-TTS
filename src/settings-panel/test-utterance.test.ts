import { describe, expect, it } from 'vitest';
import { testUtterance } from './test-utterance';

describe('testUtterance', () => {
  it('uses different sample lines for MiniMax and GSVI', () => {
    expect(testUtterance('minimax', 'zh')).toContain('Tavern Multi-TTS');
    expect(testUtterance('local_gsvi', 'zh')).toContain('GSVI');
    expect(testUtterance('minimax', 'en')).not.toBe(testUtterance('local_gsvi', 'en'));
    expect(testUtterance('index_tts', 'zh')).toContain('IndexTTS');
    expect(testUtterance('index_tts', 'en')).not.toBe(testUtterance('minimax', 'en'));
    expect(testUtterance('fish_audio', 'zh')).toContain('Fish Audio');
    expect(testUtterance('fish_audio', 'en')).not.toBe(testUtterance('minimax', 'en'));
  });
});
