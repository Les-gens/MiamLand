import { Recipe, Rating, Quantity, Step, Ingredient, UserIngredient, User } from '../models/Models.js';
import pkg from 'boom';
import { Console } from 'console';
const boom = pkg;

const getAllRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    return recipes;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleRecipe = async (req, res) => {
  try {
    const recipeId = await Recipe.findOne({
      where: {
        recipeid: req.params.id
      },
      include: [{
        model: Step,
        include: [{
          model: Quantity,
          include: [{
            model: Ingredient
          }]
        }]
      }]
    });

    const ratings = await Rating.findAll({
      where: {
        recipeidfk: req.params.id
      }
    });
    var average = 0;
    if(ratings.length>0){
      for (var i = 0; i < ratings.length; i++){
        average += ratings[i].grade;
      }
      average = average/ratings.length;
    }

    return {
      recipe: recipeId,
      rating: average
    };
  } catch (err) {
    throw boom.boomify(err);
  }
};

const addNewRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create({
      name: req.body.name,
      maxstep: req.body.maxstep,
      description: req.body.description,
      useridfk: req.body.userid
    });
    req.body.steps.forEach(async (steptmp) => {
      const step = await Step.create({
        description: steptmp.description,
        numberstep: steptmp.numberstep,
        recipeidfk: recipe.recipeid
      });
      
      steptmp.quantities.forEach(async (quantitytmp) => {
        var ingId;
        if(quantitytmp.ingredient.ingredientid == null || quantitytmp.ingredient.ingredientid == undefined){
          var ingredient = await Ingredient.findOne({
            where: {
              name: quantitytmp.ingredient.name
            }
          });
          if(ingredient == null){
            ingredient = await Ingredient.create({
              name: quantitytmp.ingredient.name,
              category: quantitytmp.ingredient.category
            });
          }
          ingId = ingredient.ingredientid;
        }else{
          ingId = quantitytmp.ingredient.ingredientid;
        }

        const quantity = await Quantity.create({
          number: quantitytmp.number,
          unit: quantitytmp.unit,
          ingredientidfk: ingId,
          stepidfk: step.stepid
        });
      });
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.update({
      name: req.body?.name,
      maxstep: req.body?.maxstep,
      description: req.body?.description,
      useridfk: req.body?.userid
    },
    {
      where: {
        recipeid: req.params.id
      }
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteRecipe = async (req, res) => {
  try {
    await Rating.destroy({
      where: { 
        recipeidfk: req.params.id
      }
    });
    const steps = await Step.findAll({
      where: {
        recipeidfk: req.params.id
      }
    });
    steps.forEach(async (step) => {
      await Quantity.destroy({
        where: { stepidfk: step.stepid }
      });
    });
    //On rapelle Quantity, car sinon il ne sait pas que des données ont été supprimé
    await Quantity.findAll();
    await Step.destroy({
      where: { recipeidfk: req.params.id }
    });

    const recipe = await Recipe.destroy({
      where: { recipeid: req.params.id }
    });
    return recipe;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getRecipeSearch = async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    return research(recipes, req.query.keyword);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getRecipeByFridge = async (req, res) => {
  try {
    var fridge = [];
    var tmp = await UserIngredient.findAll(
      {
        where: { useridfk: req.user.userid }
      }
    );
    tmp.forEach((f) => {
      fridge.push(f.ingredientidfk);
    });

    const recipes = await Recipe.findAll({
      include: [{
        model: Step,
        include: [{
          model: Quantity,
          include: [{
            model: Ingredient
          }]
        }]
      }]
    });
    //return recipes;
    var response = [];
    recipes.forEach(recipe => {
      var test = containsIngredient(recipe, fridge);
      console.log("\nRecipe "+recipe.name+" est "+test+"\n");
      if(test){
        response.push(recipe);
      }
    });

    response = response.map((recipe) => {
      return {
        recipeid: recipe.recipeid,
        name: recipe.name,
        description: recipe.description,
        maxstep: recipe.maxstep,
        useridfk: recipe.useridfk,
        createdAt: recipe.createdAt,
        updatedAt: recipe.updatedAt
      }
    });

    if(req.query.keyword == null || req.query.keyword == undefined){
      return response;
    }
    return research(response, req.query.keyword);
  } catch (err) {
    throw boom.boomify(err);
  }
};

//private
const research = (list, word) => {
  var keyword = word.toLowerCase();
  var response = [];
  list.forEach(recipe => {
    var namelower = recipe.name.toLowerCase().substring(0, keyword.length);
    if(keyword == namelower){
      response.push(recipe);
    }
  });

  return response;
};

const containsIngredient = (recipe, fridge) => {
  var isContains = false;
  recipe.steps.forEach(step => {
    step.quantities.forEach(quantity => {
      if(fridge.includes(quantity.ingredient.ingredientid)){
        isContains = true;
      }
    });
  });
  return isContains;
};

export { getAllRecipe, getSingleRecipe, addNewRecipe, updateRecipe, deleteRecipe, getRecipeSearch, getRecipeByFridge };
