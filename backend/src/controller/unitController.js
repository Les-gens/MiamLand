import Unit from '../models/Unit.js';
import pkg from 'boom';
const boom = pkg;

const getAllUnit = async (req, res) => {
  try {
    const units = await Unit.findAll();
    return units;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleUnit = async (req, res) => {
  try {
    const name = req.params.name;
    const unit = await Unit.findAll({
      where: {
        name
      }
    });
    return unit;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addNewUnit = async (req, res) => {
  try {
    const unit = Unit.create({
      name: req.body.name
    });
    return unit;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateUnit = async (req, res) => {
  try {
    const unit = Unit.update({
      name: req.body.name
    });
    return unit;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteUnit = async (req, res) => {
  try {
    const unit = Unit.destroy({
      unitID: req.params.id
    });
    return unit;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllUnit, getSingleUnit, addNewUnit, updateUnit, deleteUnit };
