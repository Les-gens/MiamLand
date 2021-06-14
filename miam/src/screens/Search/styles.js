import { StyleSheet } from 'react-native'
import { colors } from '../../theme'

export default StyleSheet.create({
  searchContainer:{
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'column',
  },
  favoritesContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  favoritesLabel: {
    marginLeft: 6,
    fontSize: 17,
  },
  favoritesLabelContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    marginBottom: 15,
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  empty: {
    fontSize: 35,
  }
})