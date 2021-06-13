import Step from '../models/Step.js';
import pkg from 'boom';
const boom = pkg;

const getAllStep = async (req, res) => {
  try {
    const steps = await Step.findAll();
    return steps;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleStepByID = async (req, res) => {
  try {
    const id = req.params.id;
    const step = await Step.findAll({
      where: {
        stepID: id
      }
    });
    return step;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleStepByRecipe = async (req, res) => {
  try {
    const id = req.params.id;
    const step = await Step.findAll({
      where: {
        recipeID: id
      }
    });
    return step;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addNewStep = async (req, res) => {
  try {
    const step = await Step.create({
      recipeID: req.body.recipeID,
      action: req.body.action,
      IngredientID: req.body.IngredientID
    });
    return step;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateStep = async (req, res) => {
  try {
    const step = await Step.update({
      recipeID: req.body?.recipeID,
      action: req.body?.action,
      IngredientID: req.body?.IngredientID
    },
    {
      where: {
        stepID: req.params.id
      }
    });
    return step;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteStep = async (req, res) => {
  try {
    const step = await Step.destroy({
      stepID: req.params.id
    });
    return step;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllStep, getSingleStepByID, getSingleStepByRecipe, addNewStep, updateStep, deleteStep };
