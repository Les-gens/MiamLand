import React from 'react';
import RecipeForm from "../forms/RecipeForm";

const AddRecipeScreen = ({navigation}) => {
    return (
        <RecipeForm
            buttonText="Add Recipe"
            //onSubmit={addRecipe}
            onSuccess={() => navigation.push('Home')}
        />
    );
};

export default AddRecipeScreen;