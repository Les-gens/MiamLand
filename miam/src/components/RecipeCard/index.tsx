import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import {capitalize, emojifyNotation} from '../../helpers/stringHelpers'
import DurationIndicator from '../DurationIndicator'
import styles from './styles'
import {Notation} from '../index'
/* this is a component that displays recipes on the home page */

interface Props {
  recipeName: string
  notation: number
  numberNotation: number
  duration: number
  onPress: () => void
  source: number //typeof require image returns number
}

const RecipeCard = ({
  recipeName,
  notation,
  numberNotation,
  duration,
  onPress,
  source,
}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
