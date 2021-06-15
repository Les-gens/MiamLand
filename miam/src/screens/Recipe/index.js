import React from 'react'
import useState, {View, Text, Image,ScrollView, Button} from 'react-native'
import {useTranslation} from 'react-i18next'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'

import {ActionButton, DurationIndicator, Notation} from '../../components'
import jambon from '../../assets/img/jambon.jpg'
import { Recipe } from '../../models'


/*TODO
  récupérer id avec les props navigation const Recipe = ({route, navigation}) => ...
  const {id} = route.params;

  afficher les ingrédients de la recette

  envoyer l'id aux steps
  */


const RecipeScreen = ({route}) => {
  const {recipe} = route.params;
  const {t, i18n} = useTranslation()
  const navigation = useNavigation()
  const start=()=>{
    navigation.navigate('Step', {id:recipe.id})
  }
  
  return (
    <View style={styles.container}>
      
      <Image style={styles.image} source={recipe.image} />

      <View style={styles.recipeContainer}>

        <View style={styles.topElements}>
          <View style={styles.left}>
            <Text style={styles.title}>{recipe.name}</Text>
            <Notation numberNotation={recipe.totalNotations} notation={recipe.notation} />
          </View>

          <View style={styles.right}>
            <DurationIndicator duration={recipe.duration} />
          </View>
        </View>

        <View style={styles.bottomElements}>
          <View style={styles.ingredientsContainer}>
            <Text style={styles.textIngredients}>ingrédients ici</Text>
            <ActionButton label={t('stove')} onpress={start}/>
          </View>
        </View>
      </View>
      
    </View>
    
    )


    
}



export default RecipeScreen
