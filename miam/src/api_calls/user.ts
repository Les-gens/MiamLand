import {Recipe, User} from '../models'

const signin = () => {

}

const signup = () => {

}

const getUser = (userId: number): User => {
  return new User('toto')
}

const getUserRecipes = (userId: number): Recipe => {
  return new Recipe('toto', 10, 10, 10, 1)
}

export default {getUser, getUserRecipes}
