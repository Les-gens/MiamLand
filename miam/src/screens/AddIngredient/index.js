import React, { useEffect, useState} from 'react'
import { Text, View, Pressable, Switch } from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import axios from 'axios'
import { add } from 'react-native-reanimated'

const AddIngredient = () => {
    const navigation = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)
    const [ingredientState, setIngredient] = useState('')
    
    //recup id user
    const getFridgeId = () => {        
        axios.get(`http://10.0.2.2:8000/api/me`)
            .then(response => {
                getFridgeIdWithUser(response.data[0].userID)
            })
            .catch(error => {
                console.error('There was an error!', error);
        });
        return -1;
    }
    
    //recup id frigo avec id user
    const getFridgeIdWithUser = (userID) => {
        axios.get(`http://10.0.2.2:8000/api/fridges/` + userID + `/byUser`)
            .then(response => {
                let fId = response.data[0].fridgeID
                if(fId < 0){
                    console.log('fridgeID not found!');
                }else{
                    if(!isEnabled)
                    {
                        add(fId)
                    }else{
                        remove(fId)
                    }
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
        });
    }

    //ajout
    const add = (fId) => {
        console.log('add')
        setIngredient(ingredientState.toLowerCase())//TODO erreur avec tolowercase
        const ingredientPost = { name: {ingredientState}, fridgeID: fId };
        axios.post('http://10.0.2.2:8000/api/ingredients', ingredientPost)
            .then(response => console.log(response.data[0]))
            .catch(error => {
                console.error('There was an error!', error);
        });
    }

    //retrait
    const remove = (fId) => {
        console.log('remove')
        //TODO recup id de l'ingredient (premier qui a le m^me libelle)
        
    }

    //retrait avec ingredient
    const removeWithIngredient = (fId) => {
        axios.delete('http://10.0.2.2:8000/api/ingredients/' + ingredientId)
        .then(() => console.log(response.data[0]))
        .catch(error => {
            console.error('There was an error!', error);
        });
    }

    const sendIngredient = () => {
        getFridgeId()
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