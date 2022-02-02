import {UserIngredient, Ingredient, User} from '../models/UserIngredient.js';
import pkg from 'boom';
const boom = pkg;

const getAllUserIngredient = async (req, res) => {
  try {
    const userIngredients = await UserIngredient.findAll();
    return userIngredients;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleUserIngredient = async (req, res) => {
  try {
    const userIngredient = await UserIngredient.findAll({
      where: {
        ingredientidfk: req.params.ingredientid,
        useridfk: req.params.userid
      }
    });
    return userIngredient;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addNewUserIngredient = async (req, res) => {
  try {
    const userIngredient = UserIngredient.create({
      ingredientidfk: req.body.ingredientid,
      useridfk: req.body.userid
    });
    return userIngredient;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteUserIngredient = async (req, res) => {
  try {
    const userIngredient = await UserIngredient.destroy({
      where: { 
        ingredientidfk: req.params.ingredientid,
        useridfk: req.params.userid
      }
    });
    return userIngredient;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getIngredientsByUser = async (req, res) => {
  try {
    const f = await Ingredient.findAll({
      include: [{
        model: User,
        where: {userid: req.user.userid},
        attributes: ['username']
      }],
    });   

    return f.map((ingredient) => {
      return {
        ingredientid: ingredient.ingredientid,
        name: ingredient.name,
        category: ingredient.category
      }
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllUserIngredient, getSingleUserIngredient, addNewUserIngredient, deleteUserIngredient, getIngredientsByUser };
