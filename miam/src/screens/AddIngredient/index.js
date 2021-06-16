import React, { useEffect, useState } from 'react'
import { Text, View, Pressable, Switch } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import axios from 'axios'
import ingredient from '../../assets/img/ingredient.png'
import { add } from 'react-native-reanimated'
import { IngredientCard } from '../../components'
import { Ingredient } from '../../models/Ingredient'

const AddIngredient = ({ route, navigation }) => {
    const { setList } = route.params;
    const { list } = route.params;
    const {removeIngredient} = route.params;
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
                if (fId < 0) {
                    console.log('fridgeID not found!');
                } else {
                    
                        add(fId)
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    //ajout
    const add = (fId) => {
        console.log('add')
        const ingredientPost = { name: ingredientState.newIngredient.toLowerCase(), fridgeID: fId };
        console.log('ingredient state : ', ingredientState)
        axios.post('http://10.0.2.2:8000/api/ingredients', ingredientPost)
            .then(response => {
                console.log(response.data)
                setList([...list,
                <View key={response.data.ingredientID} style={{ flexDirection: 'row' }}>
                    <IngredientCard ingredient={new Ingredient(ingredientPost.name, ingredient, response.data.ingredientID)} />
                    <Pressable onPress={() => { removeIngredient(response.data.ingredientID) }}>
                        <Text style={{ fontSize: 50 }}>-</Text>
                    </Pressable>
                </View>
                ])
                navigation.navigate('Fridge')
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

        axios.get('http://10.0.2.2:8000/api/ingredients')
            .then(res => console.log(res.data))
            .catch(error => {
                console.error('erreur dans get', error);
            })
    }

  

    const sendIngredient = () => {
        getFridgeId()
    }

    return (
        <>
            <View style={styles.container}>

                <TextInput style={styles.textInput}
                    placeholder="Ingrédient (oeuf, lardon, camembert, ...)"
                    placeholderTextColor="#f8f8f8"
                    onChangeText={(newIngredient) => setIngredient({ newIngredient })}
                    underlineColorAndroid={'transparent'} />

                <Pressable
                    onPress={() => { sendIngredient() }}
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