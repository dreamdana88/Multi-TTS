import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { EXTENSION_DISPLAY_NAME, EXTENSION_VERSION } from '../src/extension-meta';

const root_dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

function readJson(file_name: string) {
  return JSON.parse(readFileSync(path.join(root_dir, file_name), 'utf8')) as Record<
    string,
    unknown
  >;
}

describe('manifest and package metadata', () => {
  it('matches the official SillyTavern extension fields used by this skeleton', () => {
    const manifest = readJson('manifest.json');
    const package_json = readJson('package.json');

    expect(manifest.display_name).toBe(EXTENSION_DISPLAY_NAME);
    expect(manifest.version).toBe(EXTENSION_VERSION);
    expect(package_json.version).toBe(EXTENSION_VERSION);
    expect(manifest.js).toBe('dist/index.js');
    expect(manifest.css).toBe('dist/index.css');
    expect(manifest.author).toBe('dreamdana88');
    expect(manifest).not.toHaveProperty('minimum_client_version');
    expect(manifest.homePage).toBe('https://github.com/dreamdana88/Multi-TTS');
    expect(manifest.hooks).toEqual({
      install: 'onInstall',
      activate: 'onActivate',
      enable: 'onEnable',
      disable: 'onDisable',
      clean: 'onClean',
      delete: 'onDelete',
    });
  });

  it('does not declare a tavern helper dependency', () => {
    const manifest = readJson('manifest.json');
    expect(manifest.dependencies).toEqual([]);
  });
});
