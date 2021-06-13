import {StyleSheet} from 'react-native'
import {colors} from '../../theme'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: colors.grey4
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
  },
  right: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    height: 80,
    marginTop: 15,
    borderColor: 'red',
  },
  left: {
    width: 150,
    marginTop: 15,
  },
  topElements: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  ingredientsContainer: {
    height: '75%',
    width: '100%',
    alignItems: 'center',
  },
  startButton: {
    // marginBottom: 60,
    justifyContent: 'center',
    height: '25%',
    width: '100%',
    alignItems: 'center',
  },
  bottomElements: {
    width: '100%',
    height: '81%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '30%',
  },
  recipeContainer: {
    flexDirection: 'column',
    position: 'absolute',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: '45%',

    backgroundColor: colors.grey4,
    borderColor: 'red',
  },
})
