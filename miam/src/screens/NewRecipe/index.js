import React, {useEffect, useState} from 'react'
import { ScrollView, View, TextInput, Text, Pressable,LogBox } from 'react-native'
import {useTranslation} from 'react-i18next'
import { Picker } from '@react-native-community/picker'
import styles from './styles'
import { colors } from '../../theme'
import axios from 'axios'
import {CustomPicker} from './CustomPicker'
import { useNavigation } from '@react-navigation/native'
import { Recipe } from '../../models/'
import jambon from '../../assets/img/jambon.jpg'
import { RecipeCard } from '../../components/index'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const NewRecipe = ({route, navigation}) => {

  const {setList} = route.params;
  const {list} = route.params;
  const {t, i18n} = useTranslation()
  const [ingredients, setIngredients] = useState([])
  const [selectedIngredient, setSelectedIngredient] = useState('')
  const [recipeIngredients, setRecipeIngredients] = useState([])
  const [recipeSteps, setRecipeSteps] = useState([])
  const [recipeTitle, setRecipeTitle] = useState('')
  const [recipeDescription, setRecipeDescription] = useState('')

  useEffect(()=>{
    console.log('ici je suppose',recipeSteps)
  },[recipeIngredients, recipeSteps, recipeTitle])

  useEffect(()=>{
  axios.get(`http://10.0.2.2:8000/api/ingredients/withoutFridge`)
    .then(response => {
      console.log('without fridge ! ',response.data)
      let tab = []
      response.data.forEach(ingredient => {
        tab.push(<Picker.Item label={ingredient.name} value={ingredient.ingredientID} color='black' />)
      });
      setIngredients(tab)
    }).catch(error => {
      console.error('There was an error!', error);
    });
  },[])

  const sendRecipe = async()=>{
    const config = { headers: {'Content-Type': 'application/json'} }
    let rID 
    await axios.post(`http://10.0.2.2:8000/api/recipes/me`, {name: recipeTitle, description: recipeDescription})
      .then(res=>{
        console.log('ici',res.data)
        console.log('la',res.data.recipeID)
        rID = res.data.recipeID
      }).catch(error => {
        console.error('There was an error!', error);
      });
    console.log('IDDDDDDDDDDDDDDDDDD',rID)

    start(rID)
      
    setList([...list, <View key = {rID}><RecipeCard recipe = {new Recipe(recipeTitle, rID ,5
      , 1,(Math.floor( Math.random() * 20)+1) , jambon)}/>
      </View>])
    navigation.navigate('MyRecipes')

  }

  const start = async(rID) => {
    for(let step of recipeSteps){
      await setStepFor(step,rID).then((
        res) => {
          console.log("add step -> ",res.data)
        }
      )
    }
  }

  const setStepFor = (step,rID) => {
    return new Promise((resolve, reject) => {
      axios.post(`http://10.0.2.2:8000/api/steps`, {action: step, recipeID: rID})
      .then(res => {
        return resolve(res.data)
      })
      .catch(error => {
        return reject(error.message)
      })
    })
  }

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

  return(
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.input_container}>
        <Text>{t('title')}</Text>
        <TextInput style={styles.text_input} placeholderTextColor={colors.grey5} placeholder={t('pumpkin_pie')} onChangeText={(value)=>{setRecipeTitle(value)}}></TextInput>
      </View>
      <View style={styles.input_container}>
        <Text>{'Description'}</Text>
        <TextInput style={styles.text_input} placeholderTextColor={colors.grey5} placeholder={t('description')} onChangeText={(value)=>{setRecipeDescription(value)}}></TextInput>
      </View>
      <View style={styles.container}>

      
      <Picker
        selectedValue={selectedIngredient}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedIngredient(itemValue)
        }}
      >{ingredients ? ingredients : null}</Picker>
      {renderSteps()}
      
      </View>
      <Pressable
        onPress={()=>{sendRecipe()}}
      >
        <Text>Create</Text>
      </Pressable>
    </ScrollView>
  )
}

export default NewRecipe