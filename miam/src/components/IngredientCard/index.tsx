import React from 'react'
import {View, Text, Image,Pressable} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
import {Ingredient} from '../../models/Ingredient'
import axios from 'axios'
/* this is a component that displays ingredients on the Fridge page */

interface Props {
  ingredient: Ingredient
}

const IngredientCard = ({ingredient}: Props) => {
  const {name, image,ingredientID} = ingredient
  const navigation = useNavigation()

  

  return (
    <>
    
      <View style={styles.order}>
        
      <View>
          <Text style={styles.text}>{name}</Text>
        </View>

        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          
        </View>
      </View>
     
    </>
  )
}

export default IngredientCard
