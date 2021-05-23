import { getAllIngredient, getSingleIngredient, addNewIngredient, updateIngredient, deleteIngredient } from '../controller/ingredientController.js';
const routes = [
  {
    method: 'GET',
    url: '/api/ingredients',
    handler: getAllIngredient
  },
  {
    method: 'GET',
    url: '/api/ingredients/:name',
    handler: getSingleIngredient
  },
  {
    method: 'POST',
    url: '/api/ingredients',
    handler: addNewIngredient
  },
  {
    method: 'PUT',
    url: '/api/ingredients/:id',
    handler: updateIngredient
  },
  {
    method: 'DELETE',
    url: '/api/ingredients/:id',
    handler: deleteIngredient
  }
];

export default routes;
