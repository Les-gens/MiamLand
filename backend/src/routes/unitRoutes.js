import { getAllUnit, getSingleUnit, addNewUnit, updateUnit, deleteUnit } from '../controller/unitController.js';

const routes = [
  {
    method: 'GET',
    url: '/api/units',
    handler: getAllUnit
  },
  {
    method: 'GET',
    url: '/api/units/:name',
    handler: getSingleUnit
  },
  {
    method: 'POST',
    url: '/api/units',
    handler: addNewUnit
  },
  {
    method: 'PUT',
    url: '/api/units/:id',
    handler: updateUnit
  },
  {
    method: 'DELETE',
    url: '/api/units/:id',
    handler: deleteUnit
  }
];

export default routes;
