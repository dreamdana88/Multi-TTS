import { describe, expect, it } from 'vitest';
import {
  catalogForEngine,
  createDualEngineCatalogs,
  setEngineCatalogVoices,
} from './catalog-state';

describe('dual engine catalogs', () => {
  it('keeps MiniMax and Local-GSVI voices and filters separate', () => {
    const catalogs = createDualEngineCatalogs();
    setEngineCatalogVoices(catalogs, 'minimax', [{ id: 'voice-a', name: '青涩', language: 'zh' }]);
    catalogs.minimax.filter.search = '青涩';
    catalogs.minimax.filter.language = 'zh';

    setEngineCatalogVoices(catalogs, 'local_gsvi', [
      { id: 'mori|v2Pro', name: 'mori [v2Pro]', languages: ['ja'] },
    ]);
    catalogs.local_gsvi.filter.search = 'mori';

    expect(catalogForEngine(catalogs, 'minimax').voices.map((item) => item.id)).toEqual([
      'voice-a',
    ]);
    expect(catalogForEngine(catalogs, 'local_gsvi').voices.map((item) => item.id)).toEqual([
      'mori|v2Pro',
    ]);
    expect(catalogForEngine(catalogs, 'minimax').filter.search).toBe('青涩');
    expect(catalogForEngine(catalogs, 'minimax').filter.language).toBe('zh');
    expect(catalogForEngine(catalogs, 'local_gsvi').filter.search).toBe('mori');
    expect(catalogForEngine(catalogs, 'local_gsvi').filter.language).toBe('all');
  });

  it('does not replace the other engine catalog when switching the write target', () => {
    const catalogs = createDualEngineCatalogs();
    setEngineCatalogVoices(catalogs, 'minimax', [{ id: 'voice-a', name: 'A' }]);
    setEngineCatalogVoices(catalogs, 'local_gsvi', [{ id: 'model-b', name: 'B' }]);
    setEngineCatalogVoices(catalogs, 'minimax', [{ id: 'voice-c', name: 'C' }]);

    expect(catalogForEngine(catalogs, 'minimax').voices).toEqual([{ id: 'voice-c', name: 'C' }]);
    expect(catalogForEngine(catalogs, 'local_gsvi').voices).toEqual([{ id: 'model-b', name: 'B' }]);
  });
});
