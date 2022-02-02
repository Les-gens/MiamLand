import { getAllUserIngredient, getSingleUserIngredient, addNewUserIngredient, deleteUserIngredient, getIngredientsByUser } from '../controller/UserIngredientController.js';

const routes = [
  {
    method: 'GET',
    url: '/api/userIngredients',
    handler: getAllUserIngredient
  },
  {
    method: 'GET',
    url: '/api/userIngredient/:name',
    handler: getSingleUserIngredient
  },
  {
    method: 'POST',
    url: '/api/userIngredient',
    handler: addNewUserIngredient
  },
  {
    method: 'DELETE',
    url: '/api/userIngredient/:id',
    handler: deleteUserIngredient
  },
  {
    method: 'GET',
    url: '/api/fridge',
    handler: getIngredientsByUser
  }
];

export default routes;
