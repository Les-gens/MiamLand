import { POST } from './fetch.js';

export const login = (username, password) => {
  return POST('/api/login', {
    username: username,
    password
  })
};

export const signUp = async (username, password) => {
  return POST('/api/signup', {
    username: username,
    password
  })
}
