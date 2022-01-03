import Ingredient from '../models/Ingredient.js';
import User from '../models/User.js';
import Quantity from '../models/Quantity.js';
import Recipe from '../models/Recipe.js';
import Step from '../models/Step.js';
import Rating from '../models/Rating.js';
import UserIngredient from '../models/UserIngredient.js';

import pkg from 'bcrypt';
const bcrypt = pkg;

const createFakeData = async () => {
  const plainPassword = 'toto';
  let hashed = '';
  await bcrypt.genSalt(10)
    .then(salt => {
      return bcrypt.hash(plainPassword, salt);
    })
    .then(hash => {
      hashed = hash;
    })
    .catch(err => console.error(err.message));
  const user = await User.create({
    userName: 'toto',
    password: hashed
  });
  // Ingredient
  const endives = await Ingredient.create({
    name: 'endives',
    category: 2
  });
  const jambon = await Ingredient.create({
    name: 'jambon',
    category: 1
  });
  const chocolat = await Ingredient.create({
    name: 'chocolat',
    category: 3
  });
  // Frigo
  await UserIngredient.create({
    ingredientIdFk: endives.ingredientId,
    userIdFk: user.userId
  });
  await UserIngredient.create({
    ingredientIdFk: jambon.ingredientId,
    userIdFk: user.userId
  });
  await UserIngredient.create({
    ingredientIdFk: chocolat.ingredientId,
    userIdFk: user.userId
  });
  // Recettes
  const recipeEndive = await Recipe.create({
    name: 'Endives au jambon',
    maxStep: '2',
    description: "Endive au jambon de la plus grande banalité",
    userIdFk: user.userId});
  // Evaluation
  await Rating.create({
    recipeIdFk: recipeEndive.recipeId,
    userIdFk: user.userId,
    grade: 4
  });
  // Steps endives au jambon
  const step1 = await Step.create({
    description: 'ouvrir les endives',
    numberStep: 1,
    recetteIdFk: recipeEndive.recipeId
  });
  const step2 = await Step.create({
    description: 'mettre le jambon dans les endives',
    numberStep: 2,
    recetteIdFk: recipeEndive.recipeId
  });
  // Quantite
  await Quantity.create({
    number: 1,
    unit: 1,
    ingredientIdFk: endives.ingredientId,
    stepIdFk: step1.stepId
  });
  await Quantity.create({
    number: 1,
    unit: 1,
    ingredientIdFk: endives.ingredientId,
    stepIdFk: step2.stepId
  });
  await Quantity.create({
    number: 1,
    unit: 1,
    ingredientIdFk: chocolat.ingredientId,
    stepIdFk: step2.stepId
  });
};

export default createFakeData;