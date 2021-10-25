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

const getSingleStep = async (req, res) => {
  try {
    const step = await Step.findAll({
      where: {
        stepId: req.params.id
      }
    });
    return step;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addNewStep = async (req, res) => {
  try {
    const step = Step.create({
      description: req.body.description,
      numberStep: req.body.numberStep,
      recetteIdFk: req.body.recetteIdFk
    });
    return step;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateStep = async (req, res) => {
  try {
    const step = await Step.update({
      name: req.body?.name,
      category: req.body?.category
    },
    {
      where: {
        stepId: req.params.id
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
      where: { stepId: req.params.id }
    });
    return step;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllStep, getSingleStep, addNewStep, updateStep, deleteStep };
