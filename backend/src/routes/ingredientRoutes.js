import { getAllIngredient, getSingleIngredient, addNewIngredient, updateIngredient, deleteIngredient } from '../controller/ingredientController.js';

const routes = [
  {
    method: 'GET',
    url: '/api/ingredients',
    handler: getAllIngredient
  },
  {
    method: 'GET',
    url: '/api/ingredient/:id',
    handler: getSingleIngredient
  },
  {
    method: 'POST',
    url: '/api/ingredient',
    handler: addNewIngredient
  },
  {
    method: 'PUT',
    url: '/api/ingredient/:id',
    handler: updateIngredient
  },
  {
    method: 'DELETE',
    url: '/api/ingredient/:id',
    handler: deleteIngredient
  }
];

export default routes;
