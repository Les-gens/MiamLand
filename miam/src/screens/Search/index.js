import React, {useState, useEffect} from 'react'
import {Text, ScrollView, View, Image, } from 'react-native'
import {useTranslation} from 'react-i18next'
import {RecipeCard, SearchBar} from '../../components'
import {Recipe} from '../../models/'
import Heart from '../../assets/svg/heart.svg'
import jambon from '../../assets/img/jambon.jpg'
import styles from './styles'
import {colors} from '../../theme'
import axios from 'axios'

const Search = () => {
  const {t, i18n} = useTranslation()
  const[list, setList] = useState([])
  useEffect(() => {
  
  },[list])
  useEffect( () => {
    axios.get(`http://10.0.2.2:8000/api/recipes`)
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
  return (
    <>
      <View style={styles.searchContainer}>
      </View>
      <ScrollView contentContainerStyle={styles.favoritesContainer}>
        <View style={styles.favoritesLabelContainer}>
          <Heart width={20} height={20} fill={colors.textWhite} />
          <Text style={styles.favoritesLabel}>{t('favorites')}</Text>
        </View>
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

export default Search
