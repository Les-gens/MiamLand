import React, {useState, useEffect} from 'react'
import { Text, View, ScrollView, Pressable, Alert} from 'react-native'
import ingredient from '../../assets/img/ingredient.png'
import styles from './styles'
import {Ingredient} from '../../models/Ingredient'
import {IngredientCard, SearchBar} from '../../components'
import {useNavigation} from '@react-navigation/native'
import axios from 'axios'

const Fridge = () => {
    const navigation = useNavigation()

    const[list, setList] = useState([])
    useEffect(() => {},[list])
    useEffect( () => {
        axios.get(`http://10.0.2.2:8000/api/me/ingredients/fridge`)
                .then(response => {
                    let tab2 = [];
                    response.data.forEach(e => {
                        console.log("Ing ME : ",e)
                        tab2.push(<IngredientCard ingredient={new Ingredient(e.name, ingredient)} />) 
                    })
                    setList(tab2);
                })
                .catch(error => {
                    console.error('There was an error!', error);
            });
    },[])
    
    return(
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
                    onPress = {() => {navigation.navigate('AddIngredient')}}>
                        <Text style={styles.text}>{'Ajout ou Retrait'}</Text>
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