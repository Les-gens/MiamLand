import { getAllRating, getSingleRating, addNewRating, updateRating, deleteRating, getRatingForOneRecipe, getProfile } from '../controller/RatingController.js';

const routes = [
  {
    method: 'GET',
    url: '/api/ratings',
    handler: getAllRating
  },
  {
    method: 'GET',
    url: '/api/rating',
    schema: {
      querystring: {
        recipeid: { type: 'integer' },
        userid: { type: 'integer' }
      }
    },
    handler: getSingleRating
  },
  {
    method: 'POST',
    url: '/api/rating',
    handler: addNewRating
  },
  {
    method: 'PUT',
    url: '/api/rating',
    schema: {
      querystring: {
        recipeid: { type: 'integer' },
        userid: { type: 'integer' }
      }
    },
    handler: updateRating
  },
  {
    method: 'DELETE',
    url: '/api/rating',
    schema: {
      querystring: {
        recipeid: { type: 'integer' },
        userid: { type: 'integer' }
      }
    },     
    handler: deleteRating
  },
  {
    method: 'GET',
    url: '/api/ratings/:recipeid',
    handler: getRatingForOneRecipe
  },
  {
    method: 'GET',
    url: '/api/profile',
    handler: getProfile
  }
];

export default routes;
