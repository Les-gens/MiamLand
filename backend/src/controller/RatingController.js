import Rating from '../models/Rating.js';
import pkg from 'boom';
const boom = pkg;

const getAllRating = async (req, res) => {
  try {
    const ratings = await Rating.findAll();
    return ratings;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleRating = async (req, res) => {
  try {
    const rating = await Rating.findAll({
      where: {
        recipeIdFk: req.params.recipeId,
        userIdFk: req.params.userId
      }
    });
    return rating;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addNewRating = async (req, res) => {
  try {
    const rating = Rating.create({
      recipeIdFk: req.body.recipeId,
      userIdFk: req.body.userId,
      name: req.body.grade
    });
    return rating;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateRating = async (req, res) => {
  try {
    const rating = await Rating.update({
      grade: req.body?.grade
    },
    {
      where: {
        recipeIdFk: req.params.recipeId,
        userIdFk: req.params.userId
      }
    });
    return rating;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteRating = async (req, res) => {
  try {
    const rating = await Rating.destroy({
      where: { 
        recipeIdFk: req.params.recipeId,
        userIdFk: req.params.userId
      }
    });
    return rating;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllRating, getSingleRating, addNewRating, updateRating, deleteRating };
