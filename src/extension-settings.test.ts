import { describe, expect, it } from 'vitest';
import {
  DEFAULT_EXTENSION_SETTINGS,
  EXTENSION_SETTINGS_SCHEMA_VERSION,
  parseExtensionSettings,
} from './extension-settings';

describe('parseExtensionSettings', () => {
  it('returns defaults for missing or invalid input', () => {
    expect(parseExtensionSettings(undefined)).toEqual(DEFAULT_EXTENSION_SETTINGS);
    expect(parseExtensionSettings(null)).toEqual(DEFAULT_EXTENSION_SETTINGS);
    expect(parseExtensionSettings('nope')).toEqual(DEFAULT_EXTENSION_SETTINGS);
    expect(parseExtensionSettings([])).toEqual(DEFAULT_EXTENSION_SETTINGS);
  });

  it('keeps a valid enabled flag and ignores unknown fields', () => {
    const parsed = parseExtensionSettings({
      enabled: false,
      apiKey: 'should-be-ignored',
      extra: { nested: true },
    });

    expect(parsed).toEqual({
      schemaVersion: EXTENSION_SETTINGS_SCHEMA_VERSION,
      enabled: false,
    });
    expect(parsed).not.toHaveProperty('apiKey');
  });

  it('falls back when enabled is the wrong type', () => {
    expect(parseExtensionSettings({ enabled: 'yes' })).toEqual(DEFAULT_EXTENSION_SETTINGS);
  });
});
