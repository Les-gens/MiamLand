import {Quantity, Step} from '../models/Models.js';
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
        stepid: req.params.id
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
      numberstep: req.body.numberstep,
      recipeidfk: req.body.recipeidfk
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
        stepid: req.params.id
      }
    });
    return step;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteStep = async (req, res) => {
  try {
    await Quantity.destroy({
      where: { stepidfk: req.params.id }
    });
    const step = await Step.destroy({
      where: { stepid: req.params.id }
    });
    return step;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllStep, getSingleStep, addNewStep, updateStep, deleteStep };
