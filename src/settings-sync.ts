import type { ExtensionSettings } from './extension-settings';

export type SettingsSyncPlan = {
  syncInjection: boolean;
  refreshDecorations: boolean;
};

function sameJson(left: unknown, right: unknown) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function injectionInputsChanged(previous: ExtensionSettings, next: ExtensionSettings) {
  return (
    previous.enabled !== next.enabled ||
    previous.injectEnabled !== next.injectEnabled ||
    previous.injectDepth !== next.injectDepth ||
    previous.injectRole !== next.injectRole ||
    previous.injectTemplate !== next.injectTemplate ||
    previous.indexTtsInjectTemplate !== next.indexTtsInjectTemplate ||
    previous.fishAudioInjectTemplate !== next.fishAudioInjectTemplate ||
    previous.ttsEngine !== next.ttsEngine ||
    !sameJson(previous.characterMappings, next.characterMappings) ||
    !sameJson(previous.gsviCharacterMappings, next.gsviCharacterMappings) ||
    !sameJson(previous.indexTtsCharacterMappings, next.indexTtsCharacterMappings) ||
    !sameJson(previous.fishAudioCharacterMappings, next.fishAudioCharacterMappings)
  );
}

function decorationInputsChanged(previous: ExtensionSettings, next: ExtensionSettings) {
  return (
    previous.enabled !== next.enabled ||
    previous.ttsEngine !== next.ttsEngine ||
    !sameJson(previous.characterMappings, next.characterMappings) ||
    !sameJson(previous.gsviCharacterMappings, next.gsviCharacterMappings) ||
    !sameJson(previous.indexTtsCharacterMappings, next.indexTtsCharacterMappings) ||
    !sameJson(previous.fishAudioCharacterMappings, next.fishAudioCharacterMappings)
  );
}

export function planSettingsSync(
  previous: ExtensionSettings,
  next: ExtensionSettings,
): SettingsSyncPlan {
  return {
    syncInjection: injectionInputsChanged(previous, next),
    refreshDecorations: decorationInputsChanged(previous, next),
  };
}
