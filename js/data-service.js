/**
 * Data Service
 * Responsible for loading state and municipal data from JSON files.
 */
export async function loadStateData(stateId = 'massachusetts') {
  try {
    const response = await fetch(`./data/${stateId}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status} loading data/${stateId}.json`);
    }
    return await response.json();
  } catch (error) {
    console.error(`[DataService] Error loading data for ${stateId}:`, error);
    throw error;
  }
}
