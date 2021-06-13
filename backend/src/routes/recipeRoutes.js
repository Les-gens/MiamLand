import { getAllRecipe, getSingleRecipeByID, getSingleRecipeByUser, addNewRecipe, updateRecipe, deleteRecipe } from '../controller/recipeController.js';

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
    method: 'POST',
    url: '/api/recipes',
    handler: addNewRecipe
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
