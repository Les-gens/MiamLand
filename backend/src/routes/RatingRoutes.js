import { getAllRating, getSingleRating, addNewRating, updateRating, deleteRating } from '../controller/RatingController.js';

const routes = [
  {
    method: 'GET',
    url: '/api/rating',
    handler: getAllRating
  },
  {
    method: 'GET',
    url: '/api/rating/:name',
    handler: getSingleRating
  },
  {
    method: 'POST',
    url: '/api/rating',
    handler: addNewRating
  },
  {
    method: 'PUT',
    url: '/api/rating/:id',
    handler: updateRating
  },
  {
    method: 'DELETE',
    url: '/api/rating/:id',
    handler: deleteRating
  }
];

export default routes;
