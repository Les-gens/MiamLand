import React, {useEffect, useState} from 'react'
import { View, TextInput, Text } from 'react-native'
import {useTranslation} from 'react-i18next'
import { Picker } from '@react-native-community/picker'
import styles from './styles'
import { colors } from '../../theme'
import { color } from 'react-native-reanimated'

const NewRecipe = () => {
  const {t, i18n} = useTranslation()

  const [selectedIngredient, setSelectedIngredient] = useState('jambon')
  return(
    <View style={styles.container}>
      <View style={styles.input_container}>
        <Text>{t('title')}</Text>
        <TextInput style={styles.text_input} placeholderTextColor={colors.grey5} placeholder={t('pumpkin_pie')}></TextInput>
      </View>
      <View style={styles.container}>
      <Picker
      itemStyle={{color: "white"}}
        selectedValue={selectedIngredient}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {setSelectedIngredient(itemValue)}}
      >
        <Picker.Item label="Jambon" value="jambon" color="black"/>
        <Picker.Item label="Farine" value="farine" color="black"/>
        <Picker.Item label="Pomme" value="pomme" color="black"/>
      </Picker>
      </View>
    </View>
  )
}

export default NewRecipe