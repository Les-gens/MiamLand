import { StyleSheet } from 'react-native'
import { colors } from '../../theme'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '45%',
        width:  '98%',
        backgroundColor: colors.grey4,
        borderRadius:  12, 
    },
    image: {
        marginLeft: 30,
        borderRadius: 140,
        height: 147,
        width: 147,
        resizeMode: 'stretch'
    },
    recipeName: {
        fontSize: 20
    },
    notation: {
       color: colors.yellow1, 
       fontSize: 16,
    },
    notationNumber: {
        color: colors.grey5,
        fontSize: 16,
    },
    notationContainer: {
        flexDirection: 'row',

    },
})