import React from 'react'
import {Text, ScrollView, View, Image} from 'react-native'
import {useTranslation} from 'react-i18next'
import {RecipeCard, SearchBar} from '../../components'
import {useNavigation} from '@react-navigation/native'

import Heart from '../../assets/svg/heart.svg'
import jambon from '../../assets/img/jambon.jpg'
import styles from './styles'
import {colors} from '../../theme'

const Search = () => {
  const navigation = useNavigation()
  const {t, i18n} = useTranslation()
  let list = []

  for (let i = 0; i < 5; i++) {
    list.push(
      <RecipeCard
        duration={'10'}
        notation={4}
        numberNotation={10}
        recipeName={'jambon'}
        source={jambon}
        onPress={() => navigation.navigate('Recipe')}
      />,
    )
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
