import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {capitalize} from '../../helpers/stringHelpers'
import DurationIndicator from '../DurationIndicator'
import styles from './styles'
import {Notation} from '../index'
import {Recipe} from '../../models/'
/* this is a component that displays recipes on the home page */

interface Props {
  recipe: Recipe
}

const RecipeCard = ({recipe}: Props) => {
  const {name, notation, totalNotations, duration, image} = recipe
  const navigation = useNavigation()
  console.log("RECIPE INSIDE CARD ",recipe)

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Recipe', {recipe: recipe})}>
      <View style={styles.informations}>
        <View>
          <Text style={styles.recipeName}>{capitalize(name)}</Text>
          <Notation numberNotation={totalNotations} notation={notation} />
        </View>
        <DurationIndicator duration={duration} />
      </View>
      <Image style={styles.image} source={image} />
    </TouchableOpacity>
  )
}

export default RecipeCard
