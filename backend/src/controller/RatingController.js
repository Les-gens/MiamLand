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
        recipeidfk: req.query.recipeid,
        useridfk: req.query.userid
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
      recipeidfk: req.body.recipeid,
      useridfk: req.body.userid,
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
        recipeidfk: req.query.recipeid,
        useridfk: req.query.userid
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
        recipeidfk: req.query.recipeid,
        useridfk: req.query.userid
      }
    });
    return rating;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getRatingForOneRecipe = async (req, res) => {
  try {
    const ratings = await Rating.findAll({
      where: {
        recipeidfk: req.params.recipeid
      }
    });
    var average = 0;
    for (var i = 0; i < ratings.length; i++){
      average += ratings[i].grade;
    }
    average = average/ratings.length;
    return average;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllRating, getSingleRating, addNewRating, updateRating, deleteRating, getRatingForOneRecipe };
