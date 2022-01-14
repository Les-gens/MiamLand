import Recipe from '../models/Recipe.js';
import Rating from '../models/Rating.js';
import Step from '../models/Step.js';
import Quantity from '../models/Quantity.js';
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
        recipeid: req.params.id
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
      maxstep: req.body.maxstep,
      description: req.body.description,
      useridfk: req.body.userid
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
      maxstep: req.body?.maxstep,
      description: req.body?.description,
      useridfk: req.body?.userid
    },
    {
      where: {
        recipeid: req.params.id
      }
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteRecipe = async (req, res) => {//TODO check
  try {
    await Rating.destroy({
      where: { 
        recipeidfk: req.params.id
      }
    });
    const steps = await Step.findAll({
      where: {
        recipeidfk: req.params.id
      }
    });
    steps.forEach(async (step) => {
      await Quantity.destroy({
        where: { stepidfk: step.stepid }
      });
    });
    //On rapelle Quantity, car sinon il ne sait pas que des données ont été supprimé
    await Quantity.findAll();
    await Step.destroy({
      where: { recipeidfk: req.params.id }
    });

    const recipe = await Recipe.destroy({
      where: { recipeid: req.params.id }
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllRecipe, getSingleRecipe, addNewRecipe, updateRecipe, deleteRecipe };
