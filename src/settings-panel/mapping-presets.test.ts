import { describe, expect, it } from 'vitest';
import {
  deleteNamedPreset,
  duplicateNames,
  loadNamedPreset,
  saveNamedPreset,
  sortPresets,
} from './mapping-presets';

describe('mapping presets', () => {
  it('saves, overwrites, loads and deletes a named preset', () => {
    const first = saveNamedPreset([], 'A卡', [{ id: '1' }], false);
    expect(first).toMatchObject({ message: '已保存存档：A卡' });
    if ('error' in first) {
      throw new Error(first.error);
    }

    const blocked = saveNamedPreset(first.presets, 'A卡', [{ id: '2' }], false);
    expect(blocked).toEqual({ error: '存档「A卡」已存在' });

    const updated = saveNamedPreset(first.presets, 'A卡', [{ id: '2' }], true);
    expect(updated).toMatchObject({ message: '已更新存档：A卡' });
    if ('error' in updated) {
      throw new Error(updated.error);
    }

    expect(loadNamedPreset(updated.presets, 'A卡')).toEqual({ mappings: [{ id: '2' }] });
    const removed = deleteNamedPreset(updated.presets, 'A卡');
    expect(removed).toMatchObject({ message: '已删除存档：A卡' });
    if ('error' in removed) {
      throw new Error(removed.error);
    }
    expect(removed.presets).toEqual([]);
  });

  it('rejects empty names and empty mappings', () => {
    expect(saveNamedPreset([], '  ', [{ id: '1' }], false)).toEqual({ error: '请先填写存档名称' });
    expect(saveNamedPreset([], 'A卡', [], false)).toEqual({ error: '当前没有可保存的完整映射' });
    expect(loadNamedPreset([], '')).toEqual({ error: '请先选择存档' });
    expect(deleteNamedPreset([], '没有')).toEqual({ error: '未找到存档：没有' });
  });

  it('lists duplicate names and sorts presets', () => {
    expect(duplicateNames(['爱丽丝', '', '鲍勃', '爱丽丝'])).toEqual(['爱丽丝']);
    expect(
      sortPresets([
        { name: 'B', mappings: [] },
        { name: 'A', mappings: [] },
      ]).map((item) => item.name),
    ).toEqual(['A', 'B']);
  });
});
