import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Paragraph, Subheading, Title} from 'react-native-paper';
import {getRecipeById} from '../api/recipes';

const RecipesScreen = ({route}) => {
  const {recipeId} = route.params;
  const [myRecipe, setRecipe] = useState({});

  useEffect(() => {
    async function fetchRecipe() {
      const recipeAPI = await getRecipeById(recipeId);
      setRecipe(recipeAPI.recipe);
    }
    fetchRecipe();
  }, [recipeId]);

  return (
    <View>
      <Title>{myRecipe.name}</Title>
      <Paragraph>{myRecipe.description}</Paragraph>
      {myRecipe?.steps?.map(step => (
        <Paragraph> - {step.description}</Paragraph>
      ))}
    </View>
  );

  const styles = StyleSheet.create({});
};
export default RecipesScreen;
