import React from 'react'
import { Text, View, ScrollView, Pressable, Alert} from 'react-native'
import ingredient from '../../assets/img/ingredient.png'
import styles from './styles'
import {Ingredient} from '../../models/Ingredient'
import {IngredientCard, SearchBar} from '../../components'
import {useNavigation} from '@react-navigation/native'

const Fridge = () => {
    const navigation = useNavigation()
    let list = []
    const INGREDIENT = new Ingredient('Jambon', ingredient)
    for (let i = 0; i < 10; i++) {
        list.push(<IngredientCard ingredient={INGREDIENT} />)
    }
    
    return(
        <>
            <View style={styles.center}>
                <Text style={styles.title}>{'Votre Frigo'}</Text>
                <SearchBar style={styles.marge}/>
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