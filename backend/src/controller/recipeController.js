import Recipe from '../models/Recipe.js';
import pkg from 'boom';
const boom = pkg;

const getAllRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    return recipes;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findAll({
      where: {
        recipeId: req.params.id
      }
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addNewRecipe = async (req, res) => {
  try {
    const recipe = Recipe.create({
      name: req.body.name,
      maxStep: req.body.maxStep,
      description: req.body.description,
      userIdFk: req.body.userId
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.update({
      name: req.body?.name,
      maxStep: req.body?.maxStep,
      description: req.body?.description,
      userIdFk: req.body?.userId
    },
    {
      where: {
        recipeId: req.params.id
      }
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.destroy({
      where: { recipeId: req.params.id }
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllRecipe, getSingleRecipe, addNewRecipe, updateRecipe, deleteRecipe };
