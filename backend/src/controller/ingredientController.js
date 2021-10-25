import Ingredient from '../models/Ingredient.js';
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
        ingredientId: req.params.id
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
        ingredientId: req.params.id
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
      where: { ingredientId: req.params.id }
    });
    return ingredient;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllIngredient, getSingleIngredient, addNewIngredient, updateIngredient, deleteIngredient };
