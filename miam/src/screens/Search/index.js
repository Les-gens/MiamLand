import React from 'react'
import {Text, ScrollView, View, Image} from 'react-native'
import {useTranslation} from 'react-i18next'
import {RecipeCard, SearchBar} from '../../components'
import {Recipe} from '../../models/Recipe'
import Heart from '../../assets/svg/heart.svg'
import jambon from '../../assets/img/jambon.jpg'
import styles from './styles'
import {colors} from '../../theme'

const Search = () => {
  const {t, i18n} = useTranslation()
  let list = []
  const RECIPE = new Recipe('Endives au jambon', 4, 10, 10, jambon)
  for (let i = 0; i < 5; i++) {
    list.push(<RecipeCard recipe={RECIPE} />)
  }
  return (
    <>
      <View style={styles.searchContainer}>
        <SearchBar />
      </View>
      <ScrollView contentContainerStyle={styles.favoritesContainer}>
        <View style={styles.favoritesLabelContainer}>
          <Heart width={20} height={20} fill={colors.textWhite} />
          <Text style={styles.favoritesLabel}>{t('favorites')}</Text>
        </View>
        {list}
      </ScrollView>
    </>
  )
}

export default Search
