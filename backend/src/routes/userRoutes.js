import { getAllUser, getSingleUser, addNewUser, updateUser, deleteUser, login, getProfile } from '../controller/UserController.js';

const routes = [
  {
    method: 'GET',
    url: '/api/user',
    handler: getAllUser
  },
  {
    method: 'GET',
    url: '/api/user/:id',
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
    url: '/api/user/:id',
    handler: updateUser
  },
  {
    method: 'DELETE',
    url: '/api/user/:id',
    handler: deleteUser
  }
];

export default routes;
