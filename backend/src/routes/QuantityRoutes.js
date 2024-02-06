import { getAllQuantity, getSingleQuantity, addNewQuantity, updateQuantity, deleteQuantity } from '../controller/QuantityController.js';

const routes = [
  {
    method: 'GET',
    url: '/api/quantities',
    handler: getAllQuantity
  },
  {
    method: 'GET',
    url: '/api/quantity/:id',
    handler: getSingleQuantity
  },
  {
    method: 'POST',
    url: '/api/quantity',
    handler: addNewQuantity
  },
  {
    method: 'PUT',
    url: '/api/quantity/:id',
    handler: updateQuantity
  },
  {
    method: 'DELETE',
    url: '/api/quantity/:id',
    handler: deleteQuantity
  }
];

export default routes;
