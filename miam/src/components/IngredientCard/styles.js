import {StyleSheet} from 'react-native'
import {colors} from '../../theme'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 90,
    width: '20%',
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
    height: 80,
    width: 80,
    resizeMode: 'stretch',
    margin: 20
  },
})
