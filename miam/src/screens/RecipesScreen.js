import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Paragraph, Title} from 'react-native-paper';
import {getRecipeById} from '../api/recipes';
import {colors} from "react-native-elements";

const RecipesScreen = ({route}) => {
  const {recipeId} = route.params;
  const [myRecipe, setRecipe] = useState({});
  const ingredients = [];

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
      <Text style={styles.subtitleText}>Steps :</Text>
          {myRecipe?.steps?.map(step => {
        if(step.description === "") return ;
        step.quantities.forEach((quantity) => {
          ingredients.push(quantity.ingredient.name);
        })
        return (
            <Paragraph> - {step.description}</Paragraph>
        );
      })}
      <Text style={styles.subtitleText}>Ingredients :</Text>
      {ingredients.map(ingredient => {
        console.log(ingredient)
        if(ingredient === "" || ingredient.startsWith('noIngredient')) return ;
        return (
            <Paragraph> - {ingredient}</Paragraph>
        )
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleText: {
    fontSize: 25,
    color: colors.black,
  },
});
export default RecipesScreen;
