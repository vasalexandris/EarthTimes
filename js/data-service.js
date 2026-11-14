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
    const response = await fetch('./data/world.json?v=20261114_world1');
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

export async function loadCountryData(countryId = 'greece') {
  const cacheKey = `country-${countryId}`;
  if (dataCache.has(cacheKey)) {
    return dataCache.get(cacheKey);
  }
  try {
    const response = await fetch(`./data/countries/${countryId}.json?v=20261114_world1`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status} loading data/countries/${countryId}.json`);
    }
    const data = await response.json();
    dataCache.set(cacheKey, data);
    return data;
  } catch (error) {
    console.error(`[DataService] Error loading country data for ${countryId}:`, error);
    throw error;
  }
}

export async function loadStateData(stateId = 'massachusetts') {
  if (dataCache.has(stateId)) {
    return dataCache.get(stateId);
  }
  try {
    let response = await fetch(`./data/states/${stateId}.json?v=20261114_world1`);
    if (!response.ok) {
      response = await fetch(`./data/${stateId}.json?v=20261114_world1`);
    }
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status} loading state data for ${stateId}`);
    }
    const data = await response.json();
    dataCache.set(stateId, data);
    return data;
  } catch (error) {
    console.error(`[DataService] Error loading data for ${stateId}:`, error);
    throw error;
  }
}

export async function loadTimeCapsules() {
  if (dataCache.has('time-capsules')) {
    return dataCache.get('time-capsules');
  }
  try {
    const response = await fetch('./data/time-capsules.json?v=20261114_world1');
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status} loading data/time-capsules.json`);
    }
    const data = await response.json();
    dataCache.set('time-capsules', data);
    return data;
  } catch (error) {
    console.error('[DataService] Error loading time capsules:', error);
    return [];
  }
}
