import {Ingredient, UserIngredient, Quantity} from '../models/Models.js';
import pkg from 'boom';
const boom = pkg;

const getAllIngredient = async (req, res) => {
  try {
    const ingredients = await Ingredient.findAll();
    return ingredients;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.findAll({
      where: {
        ingredientid: req.params.id
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
      category: req.body.category
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
      category: req.body?.category
    },
    {
      where: {
        ingredientid: req.params.id
      }
    });
    return ingredient;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteIngredient = async (req, res) => {
  try {
    await UserIngredient.destroy({
      where: { ingredientidfk: req.params.id }
    });
    await Quantity.update({
      ingredientidfk: null
    },
    {
      where: {
        ingredientidfk: req.params.id
      }
    });
    const quantity = await Quantity.destroy({
      where: { quantityid: req.params.id }
    });
    const ingredient = await Ingredient.destroy({
      where: { ingredientid: req.params.id }
    });
    return ingredient;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllIngredient, getSingleIngredient, addNewIngredient, updateIngredient, deleteIngredient };
