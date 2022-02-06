import {GET} from './fetch.js';
import {getToken} from './token.js';

export const getAllRecipes = async () => {
  return await GET('/api/recipes');
};

export const getRecipeById = async recipeId => {
  return await GET(`/api/recipe/${recipeId}`);
};

export const addRecipe = async (name, maxstep, description) => {
  return await POST('/api/recips', {
    name,
    maxstep,
    description,
    //useridfk TODO: ask to be automated in the backend
  });
};

export const updateRecipe = async (name, maxstep, description) => {
  return await POST('/api/recipe', {
    name,
    maxstep,
    description,
    //useridfk TODO: ask to be automated in the backend
  });
};

// export const deleteRecipe = async (recipeId) => {
//   return await DELETE(`/api/recipes/${recipeId}`);
// };
