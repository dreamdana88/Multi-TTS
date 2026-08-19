import type { TtsEngineId, VoiceDescriptor } from '../engines/contract';

export type CatalogFilter = {
  search: string;
  language: string;
  gender: string;
  source: string;
};

export type EngineCatalog = {
  voices: VoiceDescriptor[];
  filter: CatalogFilter;
};

export type EngineCatalogs = {
  minimax: EngineCatalog;
  local_gsvi: EngineCatalog;
  index_tts: EngineCatalog;
};

export function emptyCatalogFilter(): CatalogFilter {
  return {
    search: '',
    language: 'all',
    gender: 'all',
    source: 'all',
  };
}

export function emptyEngineCatalog(): EngineCatalog {
  return {
    voices: [],
    filter: emptyCatalogFilter(),
  };
}

export function createEngineCatalogs(): EngineCatalogs {
  return {
    minimax: emptyEngineCatalog(),
    local_gsvi: emptyEngineCatalog(),
    index_tts: emptyEngineCatalog(),
  };
}

export function catalogForEngine(catalogs: EngineCatalogs, engine: TtsEngineId): EngineCatalog {
  if (engine === 'minimax') {
    return catalogs.minimax;
  }
  if (engine === 'local_gsvi') {
    return catalogs.local_gsvi;
  }
  return catalogs.index_tts;
}

export function setEngineCatalogVoices(
  catalogs: EngineCatalogs,
  engine: TtsEngineId,
  voices: VoiceDescriptor[],
): EngineCatalogs {
  const target = catalogForEngine(catalogs, engine);
  target.voices = [...voices];
  return catalogs;
}
