import {StyleSheet} from 'react-native'
import {colors} from '../../theme'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 200,
    width: '99%',
    backgroundColor: colors.grey4,
    borderRadius: 12,
    marginBottom: 7,
    borderBottomWidth: 2.5,
    borderBottomColor: '#151515',
  },
  informations: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
  },
  image: {
    marginLeft: 60,
    borderRadius: 140,
    height: 165,
    width: 165,
    resizeMode: 'stretch',
  },
  recipeName: {
    fontSize: 22,
  },
})
