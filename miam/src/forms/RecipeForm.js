import React, {useRef, useState} from "react";
import {ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from 'react-native-paper';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AntDesign from "react-native-vector-icons/AntDesign";

const RecipeForm = ({buttonText, onSubmit, onSuccess}) => {
    const [recipeName, onChangeRecipeName] = useState('');
    const [recipeDesc, onChangeRecipeDesc] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [stepTextValue, setStepTextValue] = useState('');
    const [stepNumInputs, setStepNumInputs] = useState(1);
    const refStepInputs = useRef ([stepTextValue]);

    const [ingredientTextValue, setIngredientTextValue] = useState('');
    const [ingredientNumInputs, setIngredientNumInputs] = useState(1);
    const refIngredientInputs = useRef ([ingredientTextValue]);

    const submit = () => {
        onSubmit(recipeName, recipeDesc, refStepInputs, refIngredientInputs)
            .then(async res => {
                // Clear fields on success
                onChangeRecipeName('');
                onChangeRecipeDesc('');
                setIngredientNumInputs(1);
                setStepNumInputs(1);
                setStepTextValue('');
                setIngredientTextValue('');
                setErrorMessage('');
                onSuccess();
            })
            .catch(res => {
                if (res && res.error) {
                    setErrorMessage(res.error);
                } else {
                    setErrorMessage('Something went wrong');
                }
            });
    };

    const stepInput = [];
    for (let i = 0; i < stepNumInputs; i ++)
    {
        stepInput.push(
            <View key={i} style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>{i + 1}.</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={value => setInputValue(i, value)}
                    value={refStepInputs.current[i]}
                    placeholder="step description"
                />
                {/* To remove the input */}
                <Pressable onPress={() => removeInput(i)} style={{marginLeft: 5}}>
                    <AntDesign name="minuscircleo" size={20} color="red" />
                </Pressable>
            </View>
        );
    }

    const setInputValue = (index: number, value: string) => {
        // first, we are storing input value to refInputs array to track them
        const inputs = refStepInputs.current;
        inputs[index] = value;
        // we are also setting the text value to the input field onChangeText
        setStepTextValue(value)
    }
    const addInput = () => {
        // add a new element in our refInputs array
        refStepInputs.current.push('');
        // increase the number of inputs
        setStepNumInputs(value => value + 1);
    }


    const removeInput = (i: number) => {
        // remove from the array by index value
        refStepInputs.current.splice(i, 1)[0];
        // decrease the number of inputs
        setStepNumInputs(value => value - 1);
    }

    const ingredientInput = [];
    for (let i = 0; i < ingredientNumInputs; i ++)
    {
        ingredientInput.push(
            <View key={i} style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>{i + 1}.</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={value => setInputIngredientValue(i, value)}
                    value={refIngredientInputs.current[i]}
                    placeholder="ingredient description"
                />
                {/* To remove the input */}
                <Pressable onPress={() => removeIngredientInput(i)} style={{marginLeft: 5}}>
                    <AntDesign name="minuscircleo" size={20} color="red" />
                </Pressable>
            </View>
        );
    }
    const setInputIngredientValue = (index: number, value: string) => {
        // first, we are storing input value to refInputs array to track them
        const inputs = refIngredientInputs.current;
        inputs[index] = value;
        // we are also setting the text value to the input field onChangeText
        setIngredientTextValue(value)
    }
    const addIngredientInput = () => {
        // add a new element in our refInputs array
        refIngredientInputs.current.push('');
        // increase the number of inputs
        setIngredientNumInputs(value => value + 1);
    }
    const removeIngredientInput = (i: number) => {
        // remove from the array by index value
        refIngredientInputs.current.splice(i, 1)[0];
        // decrease the number of inputs
        setIngredientNumInputs(value => value - 1);
    }







    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => onChangeRecipeName(text)}
                value={recipeName}
            />
            <Text>Description</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => onChangeRecipeDesc(text)}
                value={recipeDesc}
            />
            {ingredientInput}
            <Button mode="outlined" onPress={addIngredientInput} style={styles.addButton}>
                <Text style={styles.ingredientStep}>Add ingredient</Text>
            </Button>
            {stepInput}
            <Button mode="outlined" onPress={addInput} style={styles.addButton}>
                <Text style={styles.inputStep}>Add a new step</Text>
            </Button>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Button mode="contained" onPress={() => submit()}>{buttonText}</Button>
        </ScrollView>

    );


}



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'space-between',
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 20,
        borderRadius: 10,
    },
    children: {
        marginVertical: 10,
    },
    addButton: {
        marginVertical: 5,
    },
    ingredientStep: {

    },

});

export default RecipeForm;