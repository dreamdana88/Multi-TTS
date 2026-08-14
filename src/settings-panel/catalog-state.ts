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

export type DualEngineCatalogs = {
  minimax: EngineCatalog;
  local_gsvi: EngineCatalog;
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

export function createDualEngineCatalogs(): DualEngineCatalogs {
  return {
    minimax: emptyEngineCatalog(),
    local_gsvi: emptyEngineCatalog(),
  };
}

export function catalogForEngine(catalogs: DualEngineCatalogs, engine: TtsEngineId): EngineCatalog {
  return engine === 'local_gsvi' ? catalogs.local_gsvi : catalogs.minimax;
}

export function setEngineCatalogVoices(
  catalogs: DualEngineCatalogs,
  engine: TtsEngineId,
  voices: VoiceDescriptor[],
): DualEngineCatalogs {
  const target = catalogForEngine(catalogs, engine);
  target.voices = [...voices];
  return catalogs;
}
