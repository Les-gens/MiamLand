import Quantity from '../models/Quantity.js';
import pkg from 'boom';
const boom = pkg;

const getAllQuantity = async (req, res) => {
  try {
    const quantities = await Quantity.findAll();
    return quantities;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleQuantity = async (req, res) => {
  try {
    const quantity = await Quantity.findAll({
      where: {
        quantityid: req.params.id
      }
    });
    return quantity;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addNewQuantity = async (req, res) => {
  try {
    const quantity = Quantity.create({
      number: req.body.number,
      unit: req.body.unit,
      ingredientidfk: req.body.ingredientidfk,
      stepidfk: req.body.stepidfk
    });
    return quantity;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateQuantity = async (req, res) => {
  try {
    const quantity = await Quantity.update({
      number: req.body?.number,
      unit: req.body?.unit,
      ingredientidfk: req.body?.ingredientidfk,
      stepidfk: req.body?.stepidfk
    },
    {
      where: {
        quantityid: req.params.id
      }
    });
    return quantity;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteQuantity = async (req, res) => {
  try {
    const quantity = await Quantity.destroy({
      where: { quantityid: req.params.id }
    });
    return quantity;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllQuantity, getSingleQuantity, addNewQuantity, updateQuantity, deleteQuantity };
