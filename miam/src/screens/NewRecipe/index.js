import React, {useEffect, useState} from 'react'
import { View, TextInput, Text } from 'react-native'
import {useTranslation} from 'react-i18next'
import { Picker } from '@react-native-community/picker'
import styles from './styles'
import { colors } from '../../theme'
import { color } from 'react-native-reanimated'

const NewRecipe = () => {
  const {t, i18n} = useTranslation()

  const [selectedIngredient, setSelectedIngredient] = useState('white')
  const [itemColor, setItemColor] = useState()
  useEffect(()=>{},[itemColor])
  return(
    <View style={styles.container}>
      <View style={styles.input_container}>
        <Text>{t('title')}</Text>
        <TextInput style={styles.text_input} placeholderTextColor={colors.grey5} placeholder={t('pumpkin_pie')}></TextInput>
      </View>

      <Picker
        selectedValue={selectedIngredient}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {setSelectedIngredient(itemValue);setItemColor('white')}}
        dropdownIconColor='black'
        onFocus={()=>{console.log('toto')}}
        itemStyle={{color: 'black'}}
        // style={{color: 'black'}}
      >
        <Picker.Item label="Jambon" value="jambon" />
        <Picker.Item label="Farine" value="farine" />
        <Picker.Item label="Pomme" value="pomme" />
      </Picker>
    </View>
  )
}

export default NewRecipe