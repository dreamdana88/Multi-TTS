export type NamedPreset<T> = {
  name: string;
  mappings: T[];
};

export function duplicateNames(names: string[]): string[] {
  const counts = new Map<string, number>();
  names.forEach((name) => {
    const trimmed = name.trim();
    if (!trimmed) {
      return;
    }
    counts.set(trimmed, (counts.get(trimmed) ?? 0) + 1);
  });
  return [...counts.entries()].filter(([, count]) => count > 1).map(([name]) => name);
}

export function sortPresets<T>(presets: Array<NamedPreset<T>>): Array<NamedPreset<T>> {
  return [...presets].sort((left, right) => left.name.localeCompare(right.name));
}

export function saveNamedPreset<T>(
  presets: Array<NamedPreset<T>>,
  name: string,
  mappings: T[],
  overwrite: boolean,
): { presets: Array<NamedPreset<T>>; message: string } | { error: string } {
  const preset_name = name.trim();
  if (!preset_name) {
    return { error: '请先填写存档名称' };
  }
  if (mappings.length === 0) {
    return { error: '当前没有可保存的完整映射' };
  }
  const next = presets.map((item) => ({
    name: item.name,
    mappings: [...item.mappings],
  }));
  const existing = next.findIndex((item) => item.name === preset_name);
  if (existing >= 0 && !overwrite) {
    return { error: `存档「${preset_name}」已存在` };
  }
  const stored = { name: preset_name, mappings: [...mappings] };
  if (existing >= 0) {
    next[existing] = stored;
    return { presets: next, message: `已更新存档：${preset_name}` };
  }
  next.push(stored);
  return { presets: next, message: `已保存存档：${preset_name}` };
}

export function loadNamedPreset<T>(
  presets: Array<NamedPreset<T>>,
  name: string,
): { mappings: T[] } | { error: string } {
  const preset_name = name.trim();
  if (!preset_name) {
    return { error: '请先选择存档' };
  }
  const preset = presets.find((item) => item.name === preset_name);
  if (!preset) {
    return { error: `未找到存档：${preset_name}` };
  }
  return { mappings: [...preset.mappings] };
}

export function deleteNamedPreset<T>(
  presets: Array<NamedPreset<T>>,
  name: string,
): { presets: Array<NamedPreset<T>>; message: string } | { error: string } {
  const preset_name = name.trim();
  if (!preset_name) {
    return { error: '请先选择存档' };
  }
  const next = presets.filter((item) => item.name !== preset_name);
  if (next.length === presets.length) {
    return { error: `未找到存档：${preset_name}` };
  }
  return { presets: next, message: `已删除存档：${preset_name}` };
}
