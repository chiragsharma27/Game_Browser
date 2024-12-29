import axios from 'axios';

const API_URL = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json';

/**
 * Fetches game data from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of game objects.
 */
export const fetchGames = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching games data:', error);
    throw new Error('Failed to fetch games data.');
  }
};
