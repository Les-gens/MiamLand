import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, Pressable, Alert } from 'react-native'
import ingredient from '../../assets/img/ingredient.png'
import styles from './styles'
import { Ingredient } from '../../models/Ingredient'
import { IngredientCard, SearchBar } from '../../components'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const Fridge = () => {
    const navigation = useNavigation()

    const [list, setList] = useState([])
    useEffect(() => { }, [list])
    useEffect(() => {
        axios.get(`http://10.0.2.2:8000/api/me/ingredients/fridge`)
            .then(response => {
                let tab2 = [];
                response.data.forEach(e => {
                    tab2.push(
                        <View style={{flexDirection: 'row'}}>
                            <IngredientCard ingredient={new Ingredient(e.name, ingredient, e.ingredientID)} />
                            <Pressable onPress={() => { removeIngredient(e.ingredientID) }}>
                                <Text style={{ fontSize: 50 }}>-</Text>
                            </Pressable>
                        </View>

                    )
                })
                setList(tab2);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [])


    const  removeIngredient = (id) => {
        axios.delete(`http://10.0.2.2:8000/api/ingredients/${id}`)
            .catch(error => {
                console.error('erreur dans get', error);
            })

            axios.get(`http://10.0.2.2:8000/api/me/ingredients/fridge`)
            .then(response => {
                let tab2 = [];
                response.data.forEach(e => {
                    tab2.push(
                        <View style={{flexDirection: 'row'}}>
                            <IngredientCard ingredient={new Ingredient(e.name, ingredient, e.ingredientID)} />
                            <Pressable onPress={() => { removeIngredient(e.ingredientID) }}>
                                <Text style={{ fontSize: 50 }}>-</Text>
                            </Pressable>
                        </View>

                    )
                })
                setList(tab2);
            })
}

    return (
        <>
            <View style={styles.center}>
                <Text style={styles.title}>{'Votre Frigo'}</Text>
                <View style={styles.row}>
                    <Pressable style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? 'darkgrey'
                                : 'grey'
                        },
                        styles.button
                    ]}
                        onPress={() => { navigation.navigate('AddIngredient', { setList, list, removeIngredient }) }}>
                        <Text style={styles.text}>{'Ajouter un ingrédient'}</Text>
                    </Pressable>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                {list}
            </ScrollView>
        </>
    )
}

export default Fridge