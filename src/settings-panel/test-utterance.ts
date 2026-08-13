import type { TtsEngineId } from '../engines/contract';
import type { TestLanguage } from '../extension-settings';

const MINIMAX_TEXT = {
  ja: 'おはようございます。これは Tavern Multi-TTS のテスト音声です。',
  zh: '你好，这是 Tavern Multi-TTS 的测试语音。',
  en: 'Hello, this is a Tavern Multi-TTS test voice.',
} as const;

const GSVI_TEXT = {
  ja: 'こんにちは、これは GSVI の音声参照用サンプルです。',
  zh: '你好，这是一段 GSVI 的语音参考音频。',
  en: 'Hello, this is a GSVI reference voice sample.',
} as const;

export const GSVI_TEXT_LANG_OPTIONS = [
  '中文',
  '英语',
  '日语',
  '粤语',
  '韩语',
  '中英混合',
  '日英混合',
  '粤英混合',
  '韩英混合',
  '多语种混合',
  '多语种混合(粤语)',
] as const;

export const GSVI_SPLIT_METHOD_OPTIONS = [
  '不切',
  '凑四句一切',
  '凑50字一切',
  '按中文句号。切',
  '按英文句号.切',
  '按标点符号切',
] as const;

export function testUtterance(engine: TtsEngineId, language: TestLanguage): string {
  return engine === 'local_gsvi' ? GSVI_TEXT[language] : MINIMAX_TEXT[language];
}
