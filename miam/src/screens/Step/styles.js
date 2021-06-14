import {StyleSheet} from 'react-native'
import { colors } from '../../theme'

export default StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonNext: {
    color: '#D8A600'
  },
  stepText: {
    margin:10,
    color: '#FFFFFF'
  },
  buttonStep: {
    flexDirection: "row",
  },
  buttonStepBack: {
    marginRight:"20%",
  },
  backButton: {
    fontSize: 30,
    
     
  },
  containerBackButton: {
    alignSelf: 'flex-start',
     paddingLeft: '3%'
     
  }    

})