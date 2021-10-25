import { getAllStep, getSingleStep, addNewStep, updateStep, deleteStep } from '../controller/StepController.js';

const routes = [
  {
    method: 'GET',
    url: '/api/step',
    handler: getAllStep
  },
  {
    method: 'GET',
    url: '/api/step/:name',
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
