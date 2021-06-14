import Fridge from '../models/Fridge.js';
import pkg from 'boom';
import Ingredient from '../models/Ingredient.js';
const boom = pkg;

const getAllFridge = async (req, res) => {
  try {
    const fridges = await Fridge.findAll();
    return fridges;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleFridgeByID = async (req, res) => {
  try {
    const id = req.params.id;
    const fridge = await Fridge.findAll({
      where: {
        fridgeID: id
      }
    });
    return fridge;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getIngredientsFridge = async (req, res) => {
  try {
    const userID = req.user.userID;
    console.log(userID);
    const fridge = await Fridge.findOne({
      where: {
        userID
      }
    });
    const ingredients = await Ingredient.findAll({
      where: {
        fridgeID: fridge.fridgeID
      }
    });
    return ingredients;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleFridgeByUser = async (req, res) => {
  try {
    const id = req.params.id;
    const fridge = await Fridge.findAll({
      where: {
        userID: id
      }
    });
    return fridge;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addNewFridge = async (req, res) => {
  try {
    const fridge = await Fridge.create({
      userID: req.body.userID
    });
    return fridge;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateFridge = async (req, res) => {
  try {
    const fridge = await Fridge.update({
      userID: req.body.userID
    },
    {
      where: {
        fridgeID: req.params.id
      }
    });
    return fridge;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteFridge = async (req, res) => {
  try {
    const fridge = await Fridge.destroy({
      fridgeID: req.params.id
    });
    return fridge;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllFridge, getIngredientsFridge, getSingleFridgeByID, getSingleFridgeByUser, addNewFridge, updateFridge, deleteFridge };
