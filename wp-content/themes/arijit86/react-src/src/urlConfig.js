/*
** This is for registering custom routes
*/

const API_BASE_URL = 'http://localhost/arijitnandi/wp-json';

export const API_ENDPOINTS = {
  CUSTOM_LOGO: `${API_BASE_URL}/an/images/sitelogo`,
  BANNER_IMAGES: `${API_BASE_URL}/an/images/banners`,
  CUSTOM_WEATHER: `${API_BASE_URL}/an/general/getweather`,
  // Add more endpoints as needed
//   ANOTHER_ENDPOINT: `${API_BASE_URL}/another/endpoint`,
//   YET_ANOTHER_ENDPOINT: `${API_BASE_URL}/yet/another/endpoint`,
  // ...
};
