import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    bottomView:{
      width: '98%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'flex-end',
      position: 'absolute',
      bottom:0,
      margin:10,
    },
    button: {
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
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
})