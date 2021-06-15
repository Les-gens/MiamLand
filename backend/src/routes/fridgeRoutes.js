import { getAllFridge, getSingleFridgeByID, getSingleFridgeByUser, addNewFridge, updateFridge, deleteFridge, getIngredientsFridge, deleteFridgeIngredientUser } from '../controller/fridgeController.js';
// import server from '../index.js';

const routes = [
  {
    method: 'GET',
    url: '/api/fridges',
    handler: getAllFridge
  },
  {
    method: 'GET',
    url: '/api/me/ingredients/fridge',
    handler: getIngredientsFridge
  },
  {
    method: 'GET',
    url: '/api/fridges/:id/',
    handler: getSingleFridgeByID
  },
  {
    method: 'GET',
    url: '/api/fridges/:id/byUser',
    handler: getSingleFridgeByUser
  },
  {
    method: 'POST',
    url: '/api/fridges',
    handler: addNewFridge
  },
  {
    method: 'PUT',
    url: '/api/fridges/:id',
    handler: updateFridge
  },
  {
    method: 'DELETE',
    url: '/api/fridges/:id',
    handler: deleteFridge
  },
  {
    method: 'DELETE',
    url: '/api/fridges/:name/ingredients/me',
    handler: deleteFridgeIngredientUser
  }
];

export default routes;
