import {Recipe, User} from '../models'
import axios from 'axios'

const base_url = 'http://127.0.0.1:8000'

const signin =async (usrname: string, pwd: string) => {
  await axios.post(`${base_url}/login`, {
    password: pwd,
    username: usrname
  }).then(()=>{

  })
}

const signup = async (usrname: string, pwd: string) => {
  await axios.post(`${base_url}/signup`, {
    password: pwd,
    username: usrname
  })
}

const getUser = (userId: number): User => {
  return new User('toto')
}

const getUserRecipes = (userId: number): Recipe => {
  return new Recipe('toto', 10, 10, 10, 1)
}

export default {getUser, getUserRecipes, signin, signup}
