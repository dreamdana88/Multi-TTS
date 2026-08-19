import { describe, expect, it } from 'vitest';
import { catalogForEngine, createEngineCatalogs, setEngineCatalogVoices } from './catalog-state';

describe('three engine catalogs', () => {
  it('keeps MiniMax, Local-GSVI, and IndexTTS voices and filters separate', () => {
    const catalogs = createEngineCatalogs();
    setEngineCatalogVoices(catalogs, 'minimax', [{ id: 'voice-a', name: '青涩', language: 'zh' }]);
    catalogs.minimax.filter.search = '青涩';
    catalogs.minimax.filter.language = 'zh';

    setEngineCatalogVoices(catalogs, 'local_gsvi', [
      { id: 'mori|v2Pro', name: 'mori [v2Pro]', languages: ['ja'] },
    ]);
    catalogs.local_gsvi.filter.search = 'mori';

    setEngineCatalogVoices(catalogs, 'index_tts', [{ id: 'sen', name: '森' }]);
    catalogs.index_tts.filter.search = '森';

    expect(catalogForEngine(catalogs, 'minimax').voices.map((item) => item.id)).toEqual([
      'voice-a',
    ]);
    expect(catalogForEngine(catalogs, 'local_gsvi').voices.map((item) => item.id)).toEqual([
      'mori|v2Pro',
    ]);
    expect(catalogForEngine(catalogs, 'index_tts').voices.map((item) => item.id)).toEqual(['sen']);
    expect(catalogForEngine(catalogs, 'minimax').filter.search).toBe('青涩');
    expect(catalogForEngine(catalogs, 'minimax').filter.language).toBe('zh');
    expect(catalogForEngine(catalogs, 'local_gsvi').filter.search).toBe('mori');
    expect(catalogForEngine(catalogs, 'local_gsvi').filter.language).toBe('all');
    expect(catalogForEngine(catalogs, 'index_tts').filter.search).toBe('森');
    expect(catalogForEngine(catalogs, 'index_tts').filter.language).toBe('all');
  });

  it('does not replace the other engine catalog when switching the write target', () => {
    const catalogs = createEngineCatalogs();
    setEngineCatalogVoices(catalogs, 'minimax', [{ id: 'voice-a', name: 'A' }]);
    setEngineCatalogVoices(catalogs, 'local_gsvi', [{ id: 'model-b', name: 'B' }]);
    setEngineCatalogVoices(catalogs, 'index_tts', [{ id: 'voice-d', name: 'D' }]);
    setEngineCatalogVoices(catalogs, 'minimax', [{ id: 'voice-c', name: 'C' }]);

    expect(catalogForEngine(catalogs, 'minimax').voices).toEqual([{ id: 'voice-c', name: 'C' }]);
    expect(catalogForEngine(catalogs, 'local_gsvi').voices).toEqual([{ id: 'model-b', name: 'B' }]);
    expect(catalogForEngine(catalogs, 'index_tts').voices).toEqual([{ id: 'voice-d', name: 'D' }]);
  });
});
