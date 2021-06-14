import {Recipe, User} from '../models'
import axios from 'axios'
import { clearToken, setToken } from '../auth/token'

const base_url = 'http://10.0.2.2:8000/api'
const config = { headers: {'Content-Type': 'application/json'} }
export const signin =async (usrname: string, pwd: string): Promise<any> => {
  console.log('Login, posted : ',usrname, pwd)
  let token
  await axios.post(`${base_url}/login`, {
    password: pwd,
    username: usrname
  }, config).then((res)=>{
    token = res
    setToken(res.data.token)
  }).catch(e=>{
    console.error(e)
  })
  return token
}

export const signup = async (usrname: string, pwd: string): Promise<any> => {
  console.log('Signup, posted : ',usrname, pwd)
  let token
  await axios.post(`${base_url}/signup`, {
    password: pwd,
    username: usrname
  }, config).then((res)=>{
    token = res
    setToken(res.data.token)
  }).catch(e=>{
    console.error(e)
  })
  return token

}

export const signout = async () => {
  await clearToken().catch(e=>{
    console.error(e)
  })
  return ''
}

export const getUser = (userId: number): User => {
  return new User('toto')
}

export const getUserRecipes = (userId: number): Recipe => {
  return new Recipe('toto', 10, 10, 10, 1)
}


