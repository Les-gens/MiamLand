import { getAllFridge, getSingleFridgeByID, getSingleFridgeByUser, addNewFridge, updateFridge, deleteFridge } from '../controller/fridgeController.js';

const routes = [
  {
    method: 'GET',
    url: '/api/fridges',
    handler: getAllFridge
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
  }
];

export default routes;
