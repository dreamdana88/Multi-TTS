import { describe, expect, it } from 'vitest';
import { extractSaySegments } from './say-parser';

describe('extractSaySegments', () => {
  it('extracts multiple tagged lines and keeps order', () => {
    const message = [
      '旁白',
      '<say char="爱丽丝">你好</say>',
      '<say char="鲍勃">(laughs)嗨</say>',
    ].join('\n');

    expect(extractSaySegments(message)).toEqual([
      { index: 0, text: '你好', char: '爱丽丝' },
      { index: 1, text: '(laughs)嗨', char: '鲍勃' },
    ]);
  });

  it('allows missing char and trims empty char to no field', () => {
    expect(extractSaySegments('<say>  纯文本  </say>')).toEqual([{ index: 0, text: '纯文本' }]);
    expect(extractSaySegments('<say char="">还在</say>')).toEqual([{ index: 0, text: '还在' }]);
    expect(extractSaySegments('<say char="  ">空白角色</say>')).toEqual([
      { index: 0, text: '空白角色' },
    ]);
  });

  it('skips empty tags and does not consume index', () => {
    expect(
      extractSaySegments(
        '<say char="A">第一句</say><say char="B"></say><say char="C">第三句</say>',
      ),
    ).toEqual([
      { index: 0, text: '第一句', char: 'A' },
      { index: 1, text: '第三句', char: 'C' },
    ]);
  });

  it('ignores illegal or unclosed tags', () => {
    expect(extractSaySegments('<say char="A">没闭合')).toEqual([]);
    expect(extractSaySegments("<say char='A'>单引号</say>")).toEqual([]);
    expect(extractSaySegments('没有任何标签')).toEqual([]);
    expect(extractSaySegments('')).toEqual([]);
  });

  it('matches say tags case-insensitively like the old script', () => {
    expect(extractSaySegments('<SAY CHAR="X">Hi</SAY>')).toEqual([
      { index: 0, text: 'Hi', char: 'X' },
    ]);
  });
});
