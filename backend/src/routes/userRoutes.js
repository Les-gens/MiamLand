import { getAllUser, getSingleUser, addNewUser, updateUser, deleteUser, login, getProfile } from '../controller/userController.js';

const routes = [
  {
    method: 'GET',
    url: '/api/users',
    handler: getAllUser
  },
  {
    method: 'GET',
    url: '/api/users/:id',
    handler: getSingleUser
  },
  {
    method: 'GET',
    url: '/api/me',
    handler: getProfile
  },
  {
    method: 'POST',
    url: '/api/signup',
    handler: addNewUser
  },
  {
    method: 'POST',
    url: '/api/login',
    handler: login
  },
  {
    method: 'PUT',
    url: '/api/users/:id',
    handler: updateUser
  },
  {
    method: 'DELETE',
    url: '/api/users/:id',
    handler: deleteUser
  }
];

export default routes;
