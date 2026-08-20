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

  it('accepts ASCII and curly quotes, including spaces around = and quotes', () => {
    const ascii = extractSaySegments('<say char="爱丽丝">你好</say>');
    const curly = extractSaySegments('<say char=“爱丽丝”>你好</say>');
    const spaced = extractSaySegments('<say char = "爱丽丝">你好</say>');
    const curly_spaced = extractSaySegments('<say char = “爱丽丝”>你好</say>');
    expect(ascii).toEqual([{ index: 0, text: '你好', char: '爱丽丝' }]);
    expect(curly).toEqual(ascii);
    expect(spaced).toEqual(ascii);
    expect(curly_spaced).toEqual(ascii);
  });

  it('parses optional emo regardless of attribute order and quote style', () => {
    const expected = {
      index: 0,
      text: '别骗我。',
      char: '水无濑寻',
      emotion: { 怒: 0.35 },
    };
    expect(extractSaySegments('<say char="水无濑寻" emo="怒:0.35">别骗我。</say>')).toEqual([
      expected,
    ]);
    expect(extractSaySegments('<say emo="怒:0.35" char="水无濑寻">别骗我。</say>')).toEqual([
      expected,
    ]);
    expect(extractSaySegments('<say char=“水无濑寻” emo=“怒：0.35”>别骗我。</say>')).toEqual([
      expected,
    ]);
    expect(
      extractSaySegments('<say emo = "喜:0.35，平静:0.10" char = "水无濑寻">今天心情不错。</say>'),
    ).toEqual([
      {
        index: 0,
        text: '今天心情不错。',
        char: '水无濑寻',
        emotion: { 喜: 0.35, 平静: 0.1 },
      },
    ]);
  });

  it('keeps char and text when emo is illegal and does not inherit across lines', () => {
    const message = [
      '<say char="水无濑寻">今天要去哪里？</say>',
      '<say char="水无濑寻" emo="怒:0.35">别骗我。</say>',
      '<say char="水无濑寻">我知道了。</say>',
    ].join('');
    expect(extractSaySegments(message)).toEqual([
      { index: 0, text: '今天要去哪里？', char: '水无濑寻' },
      { index: 1, text: '别骗我。', char: '水无濑寻', emotion: { 怒: 0.35 } },
      { index: 2, text: '我知道了。', char: '水无濑寻' },
    ]);

    const illegal = [
      '<say char="A" emo="开心:0.3">未知</say>',
      '<say char="A" emo="怒:0.35,怒:0.2">重复</say>',
      '<say char="A" emo="">空</say>',
      '<say char="A" emo="怒:0">零</say>',
      '<say char="A" emo="怒:-0.1">负</say>',
      '<say char="A" emo="怒:1.01">越界</say>',
      '<say char="A" emo="怒:abc">非数字</say>',
      '<say char="A" emo="喜:0.1,怒:0.1,哀:0.1,惧:0.1">四种</say>',
      '<say char="A" emo="怒:0.35厌恶:0.15">缺分隔</say>',
    ].join('');
    expect(extractSaySegments(illegal).map((item) => ({ ...item, emotion: item.emotion }))).toEqual(
      [
        { index: 0, text: '未知', char: 'A' },
        { index: 1, text: '重复', char: 'A' },
        { index: 2, text: '空', char: 'A' },
        { index: 3, text: '零', char: 'A' },
        { index: 4, text: '负', char: 'A' },
        { index: 5, text: '越界', char: 'A' },
        { index: 6, text: '非数字', char: 'A' },
        { index: 7, text: '四种', char: 'A' },
        { index: 8, text: '缺分隔', char: 'A' },
      ],
    );
  });
});
