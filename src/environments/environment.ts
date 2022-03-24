const API_URL = {
  baseUrl: 'https://gateway.marvel.com:443/v1/public',
  characters: '/characters'
};

const AUTHORIZATION_DATA = {
  apiKey: '2cb93019ef5d08d97360030115074171',
  hash: '0e8dc7fae032e7b705c5aa6ce0ad29ab'
};

export const environment = {
  production: false,
  endpoints: API_URL,
  authorization: AUTHORIZATION_DATA
};
