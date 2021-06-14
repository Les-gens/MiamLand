import {Recipe, User} from '../models'
import axios from 'axios'
import { clearToken, setToken } from '../auth/token'

const base_url = 'http://10.0.2.2:8000/api'
const config = { headers: {'Content-Type': 'application/json'} }
export const signin =async (usrname: string, pwd: string): Promise<any> => {
  await axios.post(`${base_url}/login`, {
    password: pwd,
    username: usrname
  }, config).then((res)=>{
    setToken(res.data.token)
  }).catch(e=>{
    console.error(e)
  })
}

export const signup = async (usrname: string, pwd: string): Promise<any> => {
  console.log(usrname, pwd)
  await axios.post(`${base_url}/signup`, {
    password: pwd,
    username: usrname
  }, config).then((res)=>{
    setToken(res.data.token)
  }).catch(e=>{
    console.error(e)
  })
}

export const signout = async () => {
  await clearToken()
  return ''
}

export const getUser = (userId: number): User => {
  return new User('toto')
}

export const getUserRecipes = (userId: number): Recipe => {
  return new Recipe('toto', 10, 10, 10, 1)
}


