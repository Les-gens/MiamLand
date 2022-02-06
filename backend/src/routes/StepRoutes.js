import { getAllStep, getSingleStep, addNewStep, updateStep, deleteStep } from '../controller/StepController.js';

const routes = [
  {
    method: 'GET',
    url: '/api/steps',
    handler: getAllStep
  },
  {
    method: 'GET',
    url: '/api/step/:id',
    handler: getSingleStep
  },
  {
    method: 'POST',
    url: '/api/step',
    handler: addNewStep
  },
  {
    method: 'PUT',
    url: '/api/step/:id',
    handler: updateStep
  },
  {
    method: 'DELETE',
    url: '/api/step/:id',
    handler: deleteStep
  }
];

export default routes;
