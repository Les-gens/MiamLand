import pkg from 'boom';
import { User, Rating, Recipe } from '../models/Models.js';
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

const getProfile = async (req, res) => {
  try {
    const currentuser = await User.findOne({
      attributes: ['userid', 'username', 'createdAt', 'updatedAt'],
      where: {userid: req.user.userid}
    });
    const recipesUser = await Recipe.findAll({
      include: [{
        model: User,
        where: {userid: req.user.userid}
      }]  
    });
    const ratings = await Rating.findAll({
      raw: true,
      where: {useridfk: req.user.userid},
      include: [Recipe],
      attributes: ['recipeidfk', 'grade', 'recipe.name', 'updatedAt', 'recipe.description'] 
    });

    return {
      user: currentuser,
      recipes: recipesUser.map((recipe) => {
        return {
          recipeid: recipe.recipeid,
          name: recipe.name,
          description: recipe.description,
          createdAt: recipe.createdAt,
          updatedAt: recipe.updatedAt
        }
      }),
      ratings: ratings.map((rating) => {
        return {
          recipeid: rating.recipeidfk,
          grade: rating.grade,
          recipename: rating.name,
          updatedAt: rating.updatedAt,
          recipedescription: rating.description
        }
      })
    }
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllRating, getSingleRating, addNewRating, updateRating, deleteRating, getRatingForOneRecipe, getProfile };
