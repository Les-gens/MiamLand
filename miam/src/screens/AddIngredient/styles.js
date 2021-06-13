import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      paddingRight: 60,
      paddingLeft: 60,
      alignSelf: 'stretch',
    },
    textInput: {
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 30,
      color: '#fff',
      borderBottomColor: '#f8f8f8',
      borderBottomWidth: 1,
    },
    containerVertical:{
      flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center',
    },
    button: {
      bottom:0,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      margin: 10,
      height: 50
    },
    text: {
      bottom:0,
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
})