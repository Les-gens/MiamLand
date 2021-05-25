import React from 'react'
import { View, TextInput, Text } from 'react-native'
import {useTranslation} from 'react-i18next'

import styles from './styles'
import { colors } from '../../theme'

const NewRecipe = () => {
  const {t, i18n} = useTranslation()
  
  return(
    <View style={styles.container}>
      <View style={styles.input_container}>
        <Text>{t('title')}</Text>
        <TextInput style={styles.text_input} placeholderTextColor={colors.grey5} placeholder={t('pumpkin_pie')}></TextInput>
      </View>
    </View>
  )
}

export default NewRecipe