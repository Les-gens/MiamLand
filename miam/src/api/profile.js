import { GET, POST } from './fetch.js';

export const getFridgeIngredient = async () => {
  return await GET('/api/fridge');
};

export const getProfileInformation = async () => {
  return await GET('/api/profile');
};

export const addIngredientFridge = async ingredientName => {
  return await POST('/api/userIngredient/me', {
    ingredient: {
      name: ingredientName,
      category: 0,
    },
  });
};
