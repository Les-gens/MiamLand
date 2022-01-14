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
    username: 'toto',
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
    ingredientidfk: endives.ingredientid,
    useridfk: user.userid
  });
  await UserIngredient.create({
    ingredientidfk: jambon.ingredientid,
    useridfk: user.userid
  });
  await UserIngredient.create({
    ingredientidfk: chocolat.ingredientid,
    useridfk: user.userid
  });
  // Recettes
  const recipeEndive = await Recipe.create({
    name: 'Endives au jambon',
    maxstep: '2',
    description: "Endive au jambon de la plus grande banalité",
    useridfk: user.userid});
  // Evaluation
  await Rating.create({
    recipeidfk: recipeEndive.recipeid,
    useridfk: user.userid,
    grade: 4
  });
  // Steps endives au jambon
  const step1 = await Step.create({
    description: 'ouvrir les endives',
    numberstep: 1,
    recipeidfk: recipeEndive.recipeid
  });
  const step2 = await Step.create({
    description: 'mettre le jambon dans les endives',
    numberstep: 2,
    recipeidfk: recipeEndive.recipeid
  });
  // Quantite
  await Quantity.create({
    number: 1,
    unit: 1,
    ingredientidfk: endives.ingredientid,
    stepidfk: step1.stepid
  });
  await Quantity.create({
    number: 1,
    unit: 1,
    ingredientidfk: endives.ingredientid,
    stepidfk: step2.stepid
  });
  await Quantity.create({
    number: 1,
    unit: 1,
    ingredientidfk: chocolat.ingredientid,
    stepidfk: step2.stepid
  });
};

export default createFakeData;