import Fridge from './Fridge.js';
import Ingredient from './Ingredient.js';
import Recipe from './Recipe.js';
import Step from './Step.js';
import User from './User.js';
import pkg from 'bcrypt';
const bcrypt = pkg;

const fakeData = async () => {
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
  const fridge = await Fridge.create({
    userID: user.userID
  });
  // Endives au jambon
  const endives = await Ingredient.create({
    name: 'endives'
  });
  const jambon = await Ingredient.create({
    name: 'jambon'
  });
  // Ingredient frigo
  await Ingredient.create({
    name: 'endives',
    fridgeID: fridge.fridgeID
  });
  await Ingredient.create({
    name: 'jambon',
    fridgeID: fridge.fridgeID
  });
  // Gateau au chocolat
  const beurre = await Ingredient.create({
    name: 'beurre'
  });
  const chocolat = await Ingredient.create({
    name: 'chocolat'
  });
  const farine = await Ingredient.create({
    name: 'farine'
  });
  const lait = await Ingredient.create({
    name: 'lait'
  });
  const levure = await Ingredient.create({
    name: 'levure'
  });
  const oeuf = await Ingredient.create({
    name: 'oeuf'
  });
  // Recettes
  const recipeEndive = await Recipe.create({
    name: 'Endives au jambon',
    description: 'Endive au jambon de la plus grande banalité',
    userID: user.userID
  });
  const recipeGateau = await Recipe.create({
    name: 'Gateau au chocolat',
    description: 'Cuz you will love it',
    userID: user.userID
  });
  // Steps gateau
  await Step.create({
    ingredientID: beurre.ingredientID,
    action: 'fondre beurre',
    recipeID: recipeGateau.recipeID
  });
  await Step.create({
    ingredientID: levure.ingredientID,
    action: 'mettre la levure',
    recipeID: recipeGateau.recipeID
  });
  await Step.create({
    ingredientID: lait.ingredientID,
    action: 'ajouter le lait',
    recipeID: recipeGateau.recipeID
  });
  await Step.create({
    ingredientID: farine.ingredientID,
    action: 'mettre la farine',
    recipeID: recipeGateau.recipeID
  });
  await Step.create({
    ingredientID: oeuf.ingredientID,
    action: 'battre les oeufs',
    recipeID: recipeGateau.recipeID
  });
  await Step.create({
    ingredientID: chocolat.ingredientID,
    action: 'casser chocolat',
    recipeID: recipeGateau.recipeID
  });
  await Step.create({
    ingredientID: null,
    action: 'mettre au four',
    recipeID: recipeGateau.recipeID
  });
  // Steps endives au jambon
  await Step.create({
    ingredientID: endives.ingredientID,
    action: 'ouvrir les endives',
    recipeID: recipeEndive.recipeID
  });
  await Step.create({
    ingredientID: jambon.ingredientID,
    action: 'mettre le jambon dans les endives',
    recipeID: recipeEndive.recipeID
  });
};

export default fakeData;
