import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import {useTranslation} from 'react-i18next'
import {useNavigation} from '@react-navigation/native'

import { Plus } from '../../assets/index.js'
import { Recipe } from '../../models/'
import jambon from '../../assets/img/jambon.jpg'
import { RecipeCard } from '../../components/index'
import { colors } from '../../theme/index.js'
import styles from './styles'

const MyRecipes = () => {
  const {t, i18n} = useTranslation()
  const navigation = useNavigation()

  const list = []
  const RECIPE = new Recipe('Endives au jambon', 4, 10, 10, jambon)
  for (let i = 0; i < 5; i++) {
    list.push(<RecipeCard recipe={RECIPE} />)
    // list.push(<View />)
  }
    return(
      <>
        <View style={styles.topContainer}>
          <Plus onPress={()=>{}} width={25} height={25} fill={colors.textWhite} style={styles.plusButton}/> 
          <Text style={styles.title}>{t('my_recipes')}</Text>
        </View>
        <ScrollView>
          {list}
        </ScrollView>
      </>
    )
}

export default MyRecipes