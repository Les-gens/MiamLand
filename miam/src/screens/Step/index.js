import React, { useState } from 'react'
import {View, Text,Button, Pressable} from 'react-native'
import styles from './styles';
import { Saladier } from '../../assets/index.js'
import {colors} from '../../theme'
import { useNavigation } from '@react-navigation/native';

/*TODO
fetch avec l'id déjà réucpérer en param et le stock dans le tableau tab
*/

const Step = ({route, navigation}) => {

  const {id} = route.params;
 /* const axios = require('axios').default;
    axios.get('http://localhost:8000/api/steps/'+{id}+'/byRecipe')
        .then(response => console.log(response))
        .catch(error => {
            console.error('There was an error!', error);
    });*/

let tab = ["fait du chocolat mamene", 
"met du lait l'artiste", "au four bg", "miam c'est prêt"];
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("étape suivante")
  const [disable, setDisable] = useState(true)
  return  (
  <View style={styles.MainContainer}>
    <Pressable
      onPress={()=>navigation.pop()}
      style={styles.backButton}
    >
      <Text>{'<'}</Text>
    </Pressable>

    <Text style={{paddingBottom: "20%", fontSize:20, paddingTop: "10%"}}>{count+1} / {tab.length}</Text>
    <Saladier width={125} height={110} fill={colors.textWhite} style={{marginBottom:20}}/>
    <Text style={{fontSize:30, color: "#FFFFFF", paddingBottom: 20}}>Etape {count+1}</Text>
    
    <View style = {styles.stepText}>
      <Text style={{padding:20, backgroundColor: "#868383",borderRadius:10, marginBottom:"25%"}}>{tab[count]}</Text>
    </View>
    
    <View style={styles.buttonStep}>
      <View style={styles.buttonStepBack}>
        <Button 
        title="Etape précédente"
        disabled = {disable}
        onPress={() => {
          if(count+1<tab.length+1){
            setTitle("étape suivante")
          }
          if(count-1>=0){
            setDisable(false)
            setCount(count -1)
            
          }if(count-1<=0){
            
            setDisable(true)
          }
          
        }}
        ></Button>
      </View>
      <View>
        <Button 
          color = '#D8A600'
          title={title}
          onPress= {() => {
            if(count+1>=tab.length){
              navigation.navigate('MyRecipes')
            }else {
            setCount(count +1)
            setDisable(false)
            if(count+1>=tab.length-1){
              setTitle("Acceuil")
            }
            if(count+1>=tab.length){
              navigation.navigate('MyRecipes')
            }
          }
        }} >
        </Button>
      </View>
    </View>
  </View>
  )
}

export default Step
