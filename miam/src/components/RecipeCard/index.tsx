import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {capitalize} from '../../helpers/stringHelpers'
import DurationIndicator from '../DurationIndicator'
import styles from './styles'
import {Notation} from '../index'
/* this is a component that displays recipes on the home page */

interface Props {
  recipe: Record<string, any>
  onPress: () => void
}

const RecipeCard = ({recipe}: Props) => {
  const {recipeName, notation, numberNotation, duration, source} = recipe
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Recipe', {recipe: recipe})}>
      <View style={styles.informations}>
        <View>
          <Text style={styles.recipeName}>{capitalize(recipeName)}</Text>
          <Notation numberNotation={numberNotation} notation={notation} />
        </View>
        <DurationIndicator duration={duration} />
      </View>
      <Image style={styles.image} source={source} />
    </TouchableOpacity>
  )
}

export default RecipeCard
