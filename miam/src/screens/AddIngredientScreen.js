import React from 'react';
import {login} from '../api/auth.js';
import {Button} from 'react-native';
import IngredientForm from '../forms/IngredientForm.js';
import {addIngredientFridge} from '../api/profile.js';

// TODO: find a better way than navigation.push() problem is that navigate() doesn't trigger a rerender

const AddIngredientScreen = ({navigation}) => {
  return (
    <IngredientForm
      buttonText="Add Ingredient"
      onSubmit={addIngredientFridge}
      onSuccess={() => navigation.push('Home')}
    />
  );
};

export default AddIngredientScreen;
