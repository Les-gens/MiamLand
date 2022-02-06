import React from 'react';
import RecipeForm from "../forms/RecipeForm";
import {addRecipe} from "../api/recipes";

const AddRecipeScreen = ({navigation}) => {
    return (
        <RecipeForm
            buttonText="Add Recipe"
            onSubmit={addRecipe}
            onSuccess={() => navigation.push('Home')}
        />
    );
};

export default AddRecipeScreen;