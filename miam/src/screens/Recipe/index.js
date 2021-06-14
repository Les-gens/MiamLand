import React from 'react'
import useState, {View, Text, Image,ScrollView, Button} from 'react-native'
import {useTranslation} from 'react-i18next'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'

import {ActionButton, DurationIndicator, Notation} from '../../components'
import jambon from '../../assets/img/jambon.jpg'


/*TODO
  récupérer id avec les props navigation const Recipe = ({route, navigation}) => ...
  const {id} = route.params;

  afficher les ingrédients de la recette

  envoyer l'id aux steps
  */

const title = 'Endives au jambon'
const Recipe = () => {
  const {t, i18n} = useTranslation()
  const navigation = useNavigation()
  
  
  
  return (
   <>
    <View style={styles.container}>
      
      <Image style={styles.image} source={jambon} />
      <View style={styles.recipeContainer}>
        <View style={styles.topElements}>
          <View style={styles.left}>
            <Text style={styles.title}>{title}</Text>
            <Notation numberNotation={150} notation={5} />
          </View>
          <View style={styles.right}>
            <DurationIndicator duration={10} />
          </View>
        </View>
        <View style={styles.bottomElements}>
          <View style={styles.ingredientsContainer}>
            <Text style={styles.textIngredients}>ingrédients ici</Text>
            <Button title={t('stove')} style={styles.buttonStove}   
            color='#D8A600'       
          onPress = {() => {navigation.navigate('Step', {id:1});
          }}>
          <Text>{t('stove')}</Text>
          </Button>
            </View>
        </View>
      </View>
      
    </View>
    
    </>  
    )


    
}



export default Recipe
