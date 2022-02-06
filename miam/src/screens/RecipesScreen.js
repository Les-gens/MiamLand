import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Paragraph, Subheading, Title} from "react-native-paper";
import {getRecipeById} from "../api/recipes";

const RecipesScreen = ({route}) => {
    const {recipeId} = route.params;
    const [myRecipe, setRecipe] = useState([]);

    useEffect(() => {
        console.log({recipeId})
        async function fetchRecipe() {
            const recipe = await getRecipeById(recipeId);
            setRecipe(recipe);
        }
        fetchRecipe();
    }, []);


return (
    <View>
        <Title>{myRecipe.recipe.name}</Title>
        <Paragraph>{myRecipe.recipe.description}</Paragraph>
        {myRecipe.recipe.steps.map(step => (
            <Paragraph>     - {step.description}</Paragraph>
        ))}


    </View>
);


const styles = StyleSheet.create({


});

}
export default RecipesScreen;