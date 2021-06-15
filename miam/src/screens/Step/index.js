import React, { useEffect, useState } from 'react'
import {View, Text,Button, Pressable} from 'react-native'
import styles from './styles';
import { Saladier } from '../../assets/index.js'
import {colors} from '../../theme'

import { getToken } from '../../auth/token';
import axios from 'axios'

import { useNavigation } from '@react-navigation/native';


/*TODO
fetch avec l'id déjà réucpérer en param et le stock dans le tableau tab
*/

const Step = ({route, navigation}) => {
  const {id} = route.params;
  const[tab, setTab] = useState([])
  useEffect(() => {},[tab])

  useEffect(() => {

        axios.get(`http://10.0.2.2:8000/api/steps/${id}/byRecipe`)
            .then(response => {
              let tab2 = [];
              response.data.forEach(e => {
                console.log("e : ",e)
                tab2.push(e.action)
            })
            setTab(tab2);
          }
            )
            .catch(error => {
                console.error('There was an error!', error);
        });
    }
  ,[]) 

  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("étape suivante")
  const [disable, setDisable] = useState(true)
  return  (
  <View style={styles.MainContainer}>
    <Pressable
      onPress={()=>navigation.pop()}
      style={styles.containerBackButton}    >
      <Text style={styles.backButton}>{'<'}</Text>
    </Pressable>

    <Text style={{paddingBottom: "20%", fontSize:20, paddingTop: "10%"}}>{count+1} / {tab.length}</Text>
    <Saladier width={125} height={110} fill={colors.textWhite} style={{marginBottom:20}}/>
    <Text style={{fontSize:30, color: "#FFFFFF", paddingBottom: 20}}>Etape {count+1}</Text>
    
    <View style = {styles.stepText}>
      <Text style={{padding:20, backgroundColor: "#868383",borderRadius:10, marginBottom:"10%"}}>{tab[count]}</Text>
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
              setTitle("Accueil")
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
