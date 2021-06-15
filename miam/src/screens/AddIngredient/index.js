import React, { useEffect, useState} from 'react'
import { Text, View, Pressable, Switch } from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import axios from 'axios'

const AddIngredient = () => {
    const navigation = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)
    const [ingredientState, setIngredient] = useState(false)

    const getFridgeId = () => {
        console.log("fridge id");
        let fridgeID = -1;
        let userID = -1;
        //recup id user
        axios.get(`http://10.0.2.2:8000/api/me`)
            .then(response => {
                console.log('step 1: '+response.data[0].userID)
                userID = response.data[0].userID;
            })
            .catch(error => {
                console.error('There was an error!', error);
        });
        //recup id frigo avec id user
        axios.get(`http://10.0.2.2:8000/api/fridges/` + userID + `/byUser`)
            .then(response => {
                console.log('step 2: '+response.data[0].fridgeID)
                fridgeID = response.data[0].fridgeID;
            })
            .catch(error => {
                console.error('There was an error!', error);
        });
        console.log('step 3: '+fridgeID)
        return fridgeID;
    }

    const sendIngredient = () => {
        let fId = getFridgeId()
        console.log('step 4: '+fId)
        if(fId < 0){
            console.log('fridgeID not found!');
        }else{
            if(!isEnabled)
            {
                console.log("add")
                //envoi ingredient
                setIngredient(ingredientState.toLowerCase())
                const ingredientPost = { name: {ingredientState}, fridgeID: fId };
                axios.post('http://10.0.2.2:8000/api/ingredients', ingredientPost)
                .then(response => console.log(response.data[0]))
                .catch(error => {
                    console.error('There was an error!', error);
                });

            }else{
                console.log("delete")
                //TODO recup id de l'ingredient (premier qui a le m^me libelle)
                let ingredientId = '';

                //delete ingredient
                useEffect(() => {
                    axios.delete('http://10.0.2.2:8000/api/ingredients/' + ingredientId)
                    .then(() => console.log(response.data[0]))
                    .catch(error => {
                        console.error('There was an error!', error);
                    });
                }, []);
            }
        }
    }

    return(
        <>
            <View style={styles.container}>

                <TextInput style={styles.textInput} 
                placeholder="Ingrédient (oeuf, lardon, camembert, ...)"
                placeholderTextColor="#f8f8f8"
                onChangeText={(newIngredient) => setIngredient({newIngredient})}
                underlineColorAndroid={'transparent'} />

                <View style={styles.containerVertical}>
                    <Text>Ajout</Text>
                    <Switch
                        trackColor={{ false: "#008000", true: "#ff0000" }}
                        thumbColor={isEnabled ? "#B22222" : "#556B2F"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text>Retrait</Text>
                </View>

                <Pressable
                onPress={ () => {sendIngredient()}}
                    style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'darkgrey'
                        : 'grey'
                    }, styles.button]}>
                    <Text style={styles.text}>{'Envoyer'}</Text>
                </Pressable>
            </View>
        </>
    )
}

export default AddIngredient