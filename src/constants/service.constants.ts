export const VERSION = 1;
export const BASE_URL = `https://api.artic.edu/api/v${VERSION}`;
export const ENDPOINTS = {
  ARTWORKS: {
    LIST: `${BASE_URL}/artworks`,
  },
};

// TODO: create a nested system so that BASE_URL can be recursively nested
// ARTWORKS: { BASE_URL: 'artworks } = `${BASE_URL}/${ARWORKS.BASE_URL}`
