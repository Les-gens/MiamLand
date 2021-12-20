import { getAllRecipe, getSingleRecipe, addNewRecipe, updateRecipe, deleteRecipe } from '../controller/recipeController.js';

const routes = [
  {
    method: 'GET',
    url: '/api/recipe',
    handler: getAllRecipe
  },
  {
    method: 'GET',
    url: '/api/recipe/:name',
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
  }
];

export default routes;
