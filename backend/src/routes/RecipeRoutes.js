import { getAllRecipe, getSingleRecipe, addNewRecipe, updateRecipe, deleteRecipe, getRecipeSearch } from '../controller/RecipeController.js';

const routes = [
  {
    method: 'GET',
    url: '/api/recipes',
    handler: getAllRecipe
  },
  {
    method: 'GET',
    url: '/api/recipe/:id',
    handler: getSingleRecipe
  },
  {
    method: 'POST',
    url: '/api/recipe',
    handler: addNewRecipe
  },
  {
    method: 'PUT',
    url: '/api/recipe/:id',
    handler: updateRecipe
  },
  {
    method: 'DELETE',
    url: '/api/recipe/:id',
    handler: deleteRecipe
  },
  {
    method: 'GET',
    url: '/api/recipe/search',
    schema: {
      querystring: {
        keyword: { type: 'string' }
      }
    },
    handler: getRecipeSearch
  },
];

export default routes;
