import { StyleSheet } from 'react-native'
import { colors } from '../../theme'

export default StyleSheet.create({
    center:{
        alignItems: 'center',
        flexDirection: 'column',
    },
    title:{
        margin: 20,
        fontSize : 30,
        lineHeight: 42,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    container: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    row: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center',
    },
    marge: {
        margin:7,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        margin: 7
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})