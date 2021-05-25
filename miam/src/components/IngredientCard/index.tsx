import React from 'react'
import {View, Text, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
import {Ingredient} from '../../models/Ingredient'
/* this is a component that displays ingredients on the Fridge page */

interface Props {
  ingredient: Ingredient
}

const IngredientCard = ({ingredient}: Props) => {
  const {name, image, weight, measure} = ingredient
  const navigation = useNavigation()

  return (
    <>
      <View style={styles.order}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.container}>
          <Text>{name}</Text>
        </View>
        <View style={styles.container}>
          <Text>{weight + ' ' + measure}</Text>
        </View>
      </View>
    </>
  )
}

export default IngredientCard
