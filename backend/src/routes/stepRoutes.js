import { getAllStep, getSingleStepByID, getSingleStepByRecipe, addNewStep, updateStep, deleteStep } from '../controller/stepController.js';

const routes = [
  {
    method: 'GET',
    url: '/api/steps',
    handler: getAllStep
  },
  {
    method: 'GET',
    url: '/api/steps/:id',
    handler: getSingleStepByID
  },
  {
    method: 'GET',
    url: '/api/steps/:id/byRecipe',
    handler: getSingleStepByRecipe
  },
  {
    method: 'POST',
    url: '/api/steps',
    handler: addNewStep
  },
  {
    method: 'PUT',
    url: '/api/steps/:id',
    handler: updateStep
  },
  {
    method: 'DELETE',
    url: '/api/steps/:id',
    handler: deleteStep
  }
];

export default routes;
