import { afterEach, describe, expect, it } from 'vitest';
import { createApp, nextTick } from 'vue';
import { DEFAULT_EXTENSION_SETTINGS } from './extension-settings';
import SettingsPanel from './settings-panel.vue';

function mountPanel(
  settings = DEFAULT_EXTENSION_SETTINGS,
  onSettingsChange: (next: typeof DEFAULT_EXTENSION_SETTINGS) => void = () => undefined,
) {
  document.body.innerHTML = '<div id="root"></div>';
  const app = createApp(SettingsPanel, {
    displayName: 'Tavern Multi-TTS',
    version: '0.1.0',
    settings,
    onSettingsChange,
  });
  app.mount('#root');
  return app;
}

describe('settings panel UI', () => {
  let app: ReturnType<typeof createApp> | null = null;

  afterEach(() => {
    app?.unmount();
    app = null;
    document.body.innerHTML = '';
  });

  it('shows mapping empty state, engine tabs, and auto-save status', () => {
    app = mountPanel();
    const text = document.body.textContent ?? '';
    expect(text).toContain('还没有角色映射');
    expect(text).toContain('<say char="角色名">');
    expect(text).toContain('＋添加第一个角色');
    expect(text).toContain('映射方案（可选）');
    expect(text).toContain('方案名称');
    expect(text).toContain('角色映射会自动保存');
    expect(text).toContain('✓ 所有修改已自动保存');
    expect(text).toContain('尚未检查');
    expect(document.querySelectorAll('[role="tab"]')).toHaveLength(4);
  });

  it('adds a mapping card and hides the empty state', async () => {
    app = mountPanel();
    const add = Array.from(document.querySelectorAll('button')).find((node) =>
      node.textContent?.includes('添加第一个角色'),
    );
    expect(add).toBeTruthy();
    add?.click();
    await nextTick();
    expect(document.body.textContent).not.toContain('还没有角色映射');
    expect(document.querySelector('.mtts-mapping-card')).not.toBeNull();
  });

  it('shows an editable IndexTTS inject template on the IndexTTS tab', () => {
    app = mountPanel({ ...DEFAULT_EXTENSION_SETTINGS, ttsEngine: 'index_tts' });
    const textarea = document.querySelector<HTMLTextAreaElement>('.mtts-inject-template');
    expect(textarea?.readOnly).toBe(false);
    expect(textarea?.value).toContain('总则：');
    expect(textarea?.value).toContain('情绪规则：');
    expect(textarea?.value).toContain('emo="怒:0.35"');
    expect(textarea?.value).not.toContain('(laughs), (chuckle)');
  });

  it('shows IndexTTS duration and emotion weight sliders', () => {
    app = mountPanel({ ...DEFAULT_EXTENSION_SETTINGS, ttsEngine: 'index_tts' });
    const text = document.body.textContent ?? '';
    expect(text).toContain('时长系数 1.00');
    expect(text).toContain('快 ← 不变 → 慢');
    expect(text).toContain('情感权重 0.80');
  });

  it('keeps MiniMax inject template editable', () => {
    app = mountPanel();
    const textarea = document.querySelector<HTMLTextAreaElement>('.mtts-inject-template');
    expect(textarea?.readOnly).toBe(false);
    expect(textarea?.value).toContain('(laughs), (chuckle)');
    expect(textarea?.value).not.toContain('情绪规则：');
  });

  it('shows Fish Audio fields and its independent prompt template', () => {
    app = mountPanel({ ...DEFAULT_EXTENSION_SETTINGS, ttsEngine: 'fish_audio' });
    const text = document.body.textContent ?? '';
    expect(text).toContain('Fish Audio');
    expect(text).toContain('可从 Fish Audio 音色页面复制模型 ID');
    expect(text).toContain('S2.1 Pro Free');
    expect(text).toContain('音量 0.00 dB');
    const textarea = document.querySelector<HTMLTextAreaElement>('.mtts-inject-template');
    expect(textarea?.value).toContain('[laughing]');
    expect(textarea?.value).not.toContain('(laughs), (chuckle)');
  });

  it('keeps mapping presets out of the primary mapping section', () => {
    app = mountPanel();
    const mapping = document.querySelector('#mtts-mapping-title')?.closest('.mtts-section');
    expect(mapping?.textContent).not.toContain('方案名称');
    expect(mapping?.textContent).not.toContain('保存当前方案');
    expect(document.body.textContent).toContain('保存当前方案');
  });
});
