import { describe, expect, it } from 'vitest';
import {
  DEFAULT_EXTENSION_SETTINGS,
  EXTENSION_SETTINGS_SCHEMA_VERSION,
  importLegacySettings,
  parseExtensionSettings,
  summarizeImportedSettings,
} from './extension-settings';

describe('parseExtensionSettings', () => {
  it('returns defaults for missing or invalid input', () => {
    expect(parseExtensionSettings(undefined)).toEqual(DEFAULT_EXTENSION_SETTINGS);
    expect(parseExtensionSettings(null)).toEqual(DEFAULT_EXTENSION_SETTINGS);
    expect(parseExtensionSettings('nope')).toEqual(DEFAULT_EXTENSION_SETTINGS);
    expect(parseExtensionSettings([])).toEqual(DEFAULT_EXTENSION_SETTINGS);
  });

  it('migrates a Step 1 payload and keeps enabled', () => {
    const parsed = parseExtensionSettings({
      schemaVersion: 1,
      enabled: false,
      extra: { nested: true },
    });
    expect(parsed.schemaVersion).toBe(EXTENSION_SETTINGS_SCHEMA_VERSION);
    expect(parsed.enabled).toBe(false);
    expect(parsed.ttsEngine).toBe('minimax');
    expect(parsed.injectEnabled).toBe(true);
  });

  it('keeps known engine fields and ignores unknown keys', () => {
    const parsed = parseExtensionSettings({
      enabled: true,
      ttsEngine: 'local_gsvi',
      apiKey: 'secret',
      groupId: 'g1',
      unknownField: true,
      speed: 9,
      injectDepth: -3,
    });
    expect(parsed.ttsEngine).toBe('local_gsvi');
    expect(parsed.apiKey).toBe('secret');
    expect(parsed.groupId).toBe('g1');
    expect(parsed.speed).toBe(2);
    expect(parsed.injectDepth).toBe(0);
    expect(parsed).not.toHaveProperty('unknownField');
  });
});

describe('importLegacySettings', () => {
  it('imports an old script settings object', () => {
    const imported = importLegacySettings({
      enabled: true,
      ttsEngine: 'minimax',
      apiKey: 'legacy-key',
      groupId: 'legacy-group',
      characterMappings: [{ characterName: '爱丽丝', minimaxVoiceId: 'voice-a' }],
    });
    expect(imported.groupId).toBe('legacy-group');
    expect(imported.characterMappings).toEqual([
      { characterName: '爱丽丝', minimaxVoiceId: 'voice-a' },
    ]);
    const summary = summarizeImportedSettings(imported);
    expect(summary).toEqual({
      engine: 'minimax',
      minimaxMappings: 1,
      gsviMappings: 0,
      injectEnabled: true,
      hasMinimaxKey: true,
      hasGsviToken: false,
    });
    expect(JSON.stringify(summary)).not.toContain('legacy-key');
  });

  it('rejects unrelated JSON', () => {
    expect(() => importLegacySettings({ foo: 1 })).toThrow('不是可识别');
  });
});
