import {StyleSheet} from 'react-native'
import {colors} from '../../theme'

export default StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.yellow1,
    width: '50%',
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 17,
    color: colors.grey3,
  },
})
