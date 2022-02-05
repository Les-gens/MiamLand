import { GET } from './fetch.js';

export const getFridgeIngredient = async () => {
  return await GET('/api/fridge');
};

export const getProfileInformation = async () => {
  return await GET('/api/profile');
}







