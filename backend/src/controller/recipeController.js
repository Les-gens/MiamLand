import Recipe from '../models/Recipe.js';
import pkg from 'boom';
// import fs from 'fs';
// import { v4 as uuidv4 } from 'uuid';
// import { pipeline } from 'stream';
// import util from 'util';
// const pump = util.promisify(pipeline);
const boom = pkg;

const getAllRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    return recipes;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleRecipeByID = async (req, res) => {
  try {
    const recipe = await Recipe.findAll({
      where: {
        recipeID: req.params.id
      }
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getRecipesFromUser = async (req, res) => {
  try {
    const userID = req.user.userID;
    const recipes = await Recipe.findAll({
      where: {
        userID
      }
    });
    return recipes;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleRecipeByUser = async (req, res) => {
  try {
    const recipe = await Recipe.findAll({
      where: {
        userID: req.params.id
      }
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addNewRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create({
      name: req.body.name,
      description: req.body.description,
      userID: req.body.userID
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addNewRecipeUser = async (req, res) => {
  try {
    const recipe = await Recipe.create({
      name: req.body.name,
      description: req.body.description,
      userID: req.user.userID
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.update({
      name: req.body.name,
      description: req.body.description,
      userID: req.body.userID
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.destroy({
      where: { recipeID: req.params.id }
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllRecipe, addNewRecipeUser, getRecipesFromUser, getSingleRecipeByID, getSingleRecipeByUser, addNewRecipe, updateRecipe, deleteRecipe };
