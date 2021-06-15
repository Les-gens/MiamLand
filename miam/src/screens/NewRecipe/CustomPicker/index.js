import React, {useEffect, useState} from 'react'
import { Picker } from '@react-native-community/picker'
import axios from 'axios'

export const CustomPicker = () => {
  const [ingredients, setIngredients] = useState([])
  const [selectedIngredient, setSelectedIngredient] = useState('')
  useEffect(()=>{},[selectedIngredient, ingredients])
  useEffect(()=>{
  axios.get(`http://10.0.2.2:8000/api/ingredients/withoutFridge`)
    .then(response => {
      console.log(response.data)
      let tab = []
      response.data.forEach(ingredient => {
        tab.push(<Picker.Item label={ingredient.name} value={ingredient.ingredientID} color='black' />)
      });
      setIngredients(tab)
    }).catch(error => {
      console.error('There was an error!', error);
    });
  },[])
  return (
    <Picker
      selectedValue={selectedIngredient}
      style={{ height: 50, width: 150 }}
      onValueChange={(itemValue, itemIndex) => {
        setSelectedIngredient(itemValue)
      }}
    >{ingredients ? ingredients : null}</Picker>
  )
}
