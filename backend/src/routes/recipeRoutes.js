import { getAllRecipe, getSingleRecipeByID, getRecipesFromUser, getSingleRecipeByUser, addNewRecipe, updateRecipe, deleteRecipe, addNewRecipeUser } from '../controller/recipeController.js';

const routes = [
  {
    method: 'GET',
    url: '/api/recipes',
    handler: getAllRecipe
  },
  {
    method: 'GET',
    url: '/api/recipes/:id/',
    handler: getSingleRecipeByID
  },
  {
    method: 'GET',
    url: '/api/recipes/:id/byUser',
    handler: getSingleRecipeByUser
  },
  {
    method: 'GET',
    url: '/api/recipes/me',
    handler: getRecipesFromUser
  },
  {
    method: 'POST',
    url: '/api/recipes',
    handler: addNewRecipe
  },
  {
    method: 'POST',
    url: '/api/recipes/me',
    handler: addNewRecipeUser
  },
  {
    method: 'PUT',
    url: '/api/recipes/:id',
    handler: updateRecipe
  },
  {
    method: 'DELETE',
    url: '/api/recipes/:id',
    handler: deleteRecipe
  }
];

export default routes;
