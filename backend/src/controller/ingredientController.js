import Ingredient from '../models/Ingredient.js';
import pkg from 'boom';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Op } = require('sequelize');
const boom = pkg;

const getAllIngredient = async (req, res) => {
  try {
    const ingredients = await Ingredient.findAll();
    return ingredients;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getAllIngredientWithoutFridge = async (req, res) => {
  try {
    const ingredients = await Ingredient.findAll({
      where: {
        fridgeID: null
      }
    });
    return ingredients;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getAllIngredientFridge = async (req, res) => {
  try {
    const ingredients = await Ingredient.findAll({
      where: {
        fridgeID: {
          [Op.not]: null
        }
      }
    });
    return ingredients;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleIngredient = async (req, res) => {
  try {
    const name = req.params.name;
    const ingredient = await Ingredient.findAll({
      where: {
        name
      }
    });
    return ingredient;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addNewIngredient = async (req, res) => {
  try {
    const ingredient = Ingredient.create({
      name: req.body.name,
      fridgeID: req.body?.fridgeID
    });
    return ingredient;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.update({
      name: req.body?.name,
      fridgeID: req.body?.fridgeID
    },
    {
      where: {
        IngredientID: req.params.id
      }
    });
    return ingredient;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.destroy({
      IngredientID: req.params.id
    });
    return ingredient;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllIngredient, getAllIngredientWithoutFridge, getAllIngredientFridge, getSingleIngredient, addNewIngredient, updateIngredient, deleteIngredient };
