import React, { useEffect ,useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import {useTranslation} from 'react-i18next'
import {useNavigation} from '@react-navigation/native'

import { Plus } from '../../assets/index.js'
import { Recipe } from '../../models/'
import jambon from '../../assets/img/jambon.jpg'
import { RecipeCard } from '../../components/index'
import { colors } from '../../theme/index.js'
import styles from './styles'
import axios from 'axios'

const MyRecipes = () => {
  const {t, i18n} = useTranslation()
  const navigation = useNavigation()
  const[list, setList] = useState([])
  useEffect(() => {
  
  },[list])

  useEffect( () => {
    axios.get(`http://10.0.2.2:8000/api/recipes/me`)
            .then(response => {
              let tab2 = [];
              response.data.forEach(e => {
                console.log("RECIPES ME : ",e)
                tab2.push(<RecipeCard recipe = {new Recipe(e.name, e.recipeID ,(Math.floor( Math.random() * 5)+1)
                  , (Math.floor( Math.random() * 20)+1),(Math.floor( Math.random() * 20)+1) , jambon)}/> ) 
            })
            setList(tab2);
          }
            )
            .catch(error => {
                console.error('There was an error!', error);
        });
  },[])

    return(
      <>
        <View style={styles.topContainer}>
          <Plus onPress={()=>{navigation.push('NewRecipe')}} width={25} height={25} fill={colors.textWhite} style={styles.plusButton}/> 
          <Text style={styles.title}>{t('my_recipes')}</Text>
        </View>
        <ScrollView>
          {list}
          {list == [] ? 
            <View>
              <Text style={styles.empty}>¯\_(ツ)_/¯</Text>
              <Text>No recipe found</Text> 
            </View>
          : null}
        </ScrollView>
      </>
    )
}

export default MyRecipes