import {StyleSheet} from 'react-native'
import {colors} from '../../theme'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 160,
    width: 140,
    backgroundColor: colors.grey4,
    borderRadius: 12,
    marginRight: 20,
    marginBottom: 7,
    borderBottomWidth: 2.5,
    borderBottomColor: '#151515',
  },
  order: {
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'center',
  },
  image: {
    borderRadius: 50,
    height: 160,
    width: 140,
    resizeMode: 'stretch',
    margin: 20
  },
  text: {
    margin: 20,
    bottom:0,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
