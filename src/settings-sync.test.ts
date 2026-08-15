import { describe, expect, it } from 'vitest';
import { DEFAULT_EXTENSION_SETTINGS } from './extension-settings';
import { planSettingsSync } from './settings-sync';

describe('planSettingsSync', () => {
  it('only persists credential and generation fields', () => {
    const previous = DEFAULT_EXTENSION_SETTINGS;
    expect(
      planSettingsSync(previous, { ...previous, apiKey: 'k', groupId: 'g', speed: 1.2 }),
    ).toEqual({
      syncInjection: false,
      refreshDecorations: false,
    });
    expect(
      planSettingsSync(previous, {
        ...previous,
        localGsviBaseUrl: 'http://127.0.0.1:9880',
        localGsviAuthToken: 't',
        localGsviBatchSize: 4,
        prefetchMode: 'manual',
        testLanguage: 'en',
        vol: 2,
      }),
    ).toEqual({
      syncInjection: false,
      refreshDecorations: false,
    });
  });

  it('updates injection without refreshing decorations for prompt fields', () => {
    const previous = DEFAULT_EXTENSION_SETTINGS;
    expect(planSettingsSync(previous, { ...previous, injectDepth: 4 })).toEqual({
      syncInjection: true,
      refreshDecorations: false,
    });
    expect(planSettingsSync(previous, { ...previous, injectTemplate: 'new' })).toEqual({
      syncInjection: true,
      refreshDecorations: false,
    });
  });

  it('refreshes decorations when enablement, engine, or mappings change', () => {
    const previous = DEFAULT_EXTENSION_SETTINGS;
    expect(planSettingsSync(previous, { ...previous, enabled: false })).toEqual({
      syncInjection: true,
      refreshDecorations: true,
    });
    expect(planSettingsSync({ ...previous, enabled: false }, previous)).toEqual({
      syncInjection: true,
      refreshDecorations: true,
    });
    expect(planSettingsSync(previous, { ...previous, ttsEngine: 'local_gsvi' })).toEqual({
      syncInjection: true,
      refreshDecorations: true,
    });
    expect(
      planSettingsSync(previous, {
        ...previous,
        characterMappings: [{ characterName: '爱丽丝', minimaxVoiceId: 'v1' }],
      }),
    ).toEqual({
      syncInjection: true,
      refreshDecorations: true,
    });
    expect(
      planSettingsSync(previous, {
        ...previous,
        ttsEngine: 'local_gsvi',
        gsviCharacterMappings: [
          {
            characterName: '爱丽丝',
            gsviVoiceId: 'mori|v2Pro',
            gsviLanguage: 'ja',
            gsviEmotion: 'neutral',
          },
        ],
      }),
    ).toEqual({
      syncInjection: true,
      refreshDecorations: true,
    });
  });
});
