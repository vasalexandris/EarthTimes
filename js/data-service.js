/**
 * Data Service
 * Responsible for loading world, country, state and municipal data from JSON files.
 */

const dataCache = new Map();

export async function loadWorldData() {
  if (dataCache.has('world')) {
    return dataCache.get('world');
  }
  try {
    const response = await fetch('./data/world.json');
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status} loading data/world.json`);
    }
    const data = await response.json();
    dataCache.set('world', data);
    return data;
  } catch (error) {
    console.error('[DataService] Error loading world data:', error);
    throw error;
  }
}

export async function loadStateData(stateId = 'massachusetts') {
  if (dataCache.has(stateId)) {
    return dataCache.get(stateId);
  }
  try {
    const response = await fetch(`./data/${stateId}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status} loading data/${stateId}.json`);
    }
    const data = await response.json();
    dataCache.set(stateId, data);
    return data;
  } catch (error) {
    console.error(`[DataService] Error loading data for ${stateId}:`, error);
    throw error;
  }
}
