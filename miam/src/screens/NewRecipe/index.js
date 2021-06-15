import React, {useEffect, useState} from 'react'
import { ScrollView, View, TextInput, Text, Pressable } from 'react-native'
import {useTranslation} from 'react-i18next'
import { Picker } from '@react-native-community/picker'
import styles from './styles'
import { colors } from '../../theme'
import axios from 'axios'
import {CustomPicker} from './CustomPicker'
const NewRecipe = () => {
  const {t, i18n} = useTranslation()

  const [recipeIngredients, setRecipeIngredients] = useState([])
  const [recipeSteps, setRecipeSteps] = useState([])
  const [recipeTitle, setRecipeTitle] = useState('')
  useEffect(()=>{
    console.log(recipeSteps)
  },[recipeIngredients, recipeSteps, recipeTitle])


  const renderSteps = () => {
    let tab = []
      for(let i = 0; i <= recipeSteps.length;i++){
        tab.push(
          <View style={styles.input_container}>
            <Text>{`${t('step')} ${i+1}`}</Text>
            <TextInput style={styles.text_input} value={recipeSteps[i]} placeholderTextColor={colors.grey5} placeholder={t('pumpkin_pie')} onChangeText={
              (value)=>{
                let oldSteps = recipeSteps
                oldSteps[i] = value
                setRecipeSteps([...oldSteps])
              }}></TextInput>
            <Pressable onPress={()=>{
              setRecipeSteps(recipeSteps.filter(step=>step != recipeSteps[i]))
            }}>
              { recipeSteps.length <0 ? <Text style = {{fontSize: 35}}>-</Text> : null}
            </Pressable>
          </View>
        )
      }
    return tab
  } 

  const renderIngredients = () => {
    console.log('renderIngredients')
    let tab = []
      for(let i = 0; i <= recipeIngredients.length;i++){
        tab.push(
          <CustomPicker/>
        )
      }
    return tab
  }

  return(
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.input_container}>
        <Text>{t('title')}</Text>
        <TextInput style={styles.text_input} placeholderTextColor={colors.grey5} placeholder={t('pumpkin_pie')} onChangeText={(value)=>{setRecipeTitle(value)}}></TextInput>
      </View>
      <View style={styles.container}>

      
      {renderIngredients()}
      {renderSteps()}
      
      </View>
    </ScrollView>
  )
}

export default NewRecipe