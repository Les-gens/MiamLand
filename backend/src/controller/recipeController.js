import Recipe from '../models/Recipe.js';
import pkg from 'boom';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { pipeline } from 'stream';
import util from 'util';
const pump = util.promisify(pipeline);
const boom = pkg;

const getAllRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    return recipes;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleRecipeByID = async (req, res) => {
  try {
    const recipe = await Recipe.findAll({
      where: {
        recipeID: req.params.id
      }
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleRecipeByUser = async (req, res) => {
  try {
    const recipe = await Recipe.findAll({
      where: {
        userID: req.params.id
      }
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addNewRecipe = async (req, res) => {
  let filename = '';
  try {
    const parts = req.parts();
    let data = '';
    for await (const part of parts) {
      if (part.file) {
        part.filename = `${uuidv4()}.${part.mimetype.split('/')[1]}`;
        filename = part.filename;
        await pump(part.file, fs.createWriteStream(`uploads/${filename}`));
      } else if (part.fieldname === 'data') {
        const json = JSON.parse(part.value);
        console.log(json);
        if (!json.name || !json.description) {
          fs.unlinkSync(`uploads/${filename}`);
          return boom.badData('Bad json format');
        }
        data = json;
      }
    }
    const recipe = await Recipe.create({
      name: data.name,
      description: data.description,
      filename
    });

    return recipe;
  } catch (err) {
    fs.unlinkSync(`uploads/${filename}`);
    throw boom.boomify(err);
  }
};

const updateRecipe = async (req, res) => {
  let filename = '';
  try {
    const parts = req.parts();
    let data = '';
    for await (const part of parts) {
      if (part.file) {
        part.filename = `${uuidv4()}.${part.mimetype.split('/')[1]}`;
        filename = part.filename;
        await pump(part.file, fs.createWriteStream(`uploads/${filename}`));
      } else if (part.fieldname === 'data') {
        const json = JSON.parse(part.value);
        console.log(json);
        if (!json.name || !json.description) {
          fs.unlinkSync(`uploads/${filename}`);
          return boom.badData('Bad json format');
        }
        data = json;
      }
    }
    const recipe = await Recipe.update({
      name: data?.name,
      description: data?.description,
      filename: data?.filename
    },
    {
      where: {
        recipeID: req.params.id
      }
    });

    return recipe;
  } catch (err) {
    fs.unlinkSync(`uploads/${filename}`);
    throw boom.boomify(err);
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.destroy({
      recipeID: req.params.id
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export { getAllRecipe, getSingleRecipeByID, getSingleRecipeByUser, addNewRecipe, updateRecipe, deleteRecipe };
