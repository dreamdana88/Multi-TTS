export const EXTENSION_SETTINGS_SCHEMA_VERSION = 1 as const;

export type ExtensionSettings = {
  schemaVersion: typeof EXTENSION_SETTINGS_SCHEMA_VERSION;
  enabled: boolean;
};

export const DEFAULT_EXTENSION_SETTINGS: ExtensionSettings = {
  schemaVersion: EXTENSION_SETTINGS_SCHEMA_VERSION,
  enabled: true,
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function parseExtensionSettings(raw: unknown): ExtensionSettings {
  const source = isRecord(raw) ? raw : {};

  return {
    schemaVersion: EXTENSION_SETTINGS_SCHEMA_VERSION,
    enabled:
      typeof source.enabled === 'boolean' ? source.enabled : DEFAULT_EXTENSION_SETTINGS.enabled,
  };
}
