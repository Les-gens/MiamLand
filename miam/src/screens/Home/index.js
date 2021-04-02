import React from 'react';
import {
  Text,
  ScrollView,
  View,
  Image
} from 'react-native';
import { useTranslation } from 'react-i18next'
import { RecipeCard, SearchBar } from '../../components';

import Heart from '../../assets/svg/heart.svg'
import jambon from '../../assets/img/jambon.jpg'
import styles from './styles';
import { colors } from '../../theme';

const Home = () => {
  const { t, i18n } = useTranslation()
  let list = []
  
  for (let i = 0; i< 5; i++){
    list.push(<RecipeCard 
      duration={'10'} 
      notation={4} 
      numberNotation={10} 
      recipeName={'jambon'} 
      source={jambon}
    />)
  }
  return (
    <>
      <View style={styles.searchContainer}>
        <SearchBar/>
      </View>
      <ScrollView contentContainerStyle={styles.favoritesContainer}>
        <Heart width={20} height={20} fill={colors.textWhite} />
        <Text style={styles.favoritesLabel}>{t('favorites')}</Text>
        {list}
      </ScrollView>
    </>
  );
};

export default Home;
