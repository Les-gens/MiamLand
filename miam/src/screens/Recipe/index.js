import React from 'react'
import useState, {View, Text, Image} from 'react-native'
import {useTranslation} from 'react-i18next'
import styles from './styles'

import {ActionButton, DurationIndicator, Notation} from '../../components'
import jambon from '../../assets/img/jambon.jpg'
const title = 'Endives au jambon'

const Recipe = () => {
  const {t, i18n} = useTranslation()

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={jambon} />
      <View style={styles.recipeContainer}>
        <View style={styles.topElements}>
          <View style={styles.left}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.right}>
            <DurationIndicator duration={10} />
            <Notation numberNotation={150} notation={5} />
          </View>
        </View>
        <View style={styles.bottomElements}>
          <View style={styles.ingredientsContainer}></View>
          <View style={styles.startButton}>
            <ActionButton label={t('stove')} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Recipe
