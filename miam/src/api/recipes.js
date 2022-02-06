import {GET, POST} from './fetch.js';
import {getToken} from './token.js';

export const getAllRecipes = async () => {
  return await GET('/api/recipes');
};

export const getRecipeById = async recipeId => {
  return await GET(`/api/recipe/${recipeId}`);
};

export const addRecipe = async (name, description, steps, ingredients) => {
  console.log('ADDRECIPE', name, description, steps, ingredients);
  const formatedSteps = steps.current.map( (value, index) => {
    if (value == null) return ;
    return {
      description: value,
      numberStep: index,
      quantities: index === 0 ? [
          ...ingredients.current.map( (ingredient, index) => {
            if (value == null) return ;
            return {
              number: 0,
              unit: 0,
              ingredient: {
                name: ingredient,
                category: 0,
              }
            }
          })]: [{
        number: 0,
        unit: 0,
        ingredient: {
          name: `noIngredient-${index}`,
          category: 0,
        }
      }]
    }
  })
  console.log(formatedSteps);
  return await POST('/api/recipe', {
    name,
    maxstep: steps.length,
    description,
    steps: formatedSteps
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

export const research = async keyword => {
  return await GET(`/api/recipe/search?keyword=${keyword}`);
};

// export const deleteRecipe = async (recipeId) => {
//   return await DELETE(`/api/recipes/${recipeId}`);
// };
