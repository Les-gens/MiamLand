import { StyleSheet } from 'react-native'
import { colors } from '../../theme'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primaryGrey,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  bowl: {
    marginTop: 80,
    marginBottom: 20
  },
  welcome: {
    fontSize: 29,
    marginBottom: 20,
  },
  input: {
    width: '55%',
    marginBottom: 25,
  },
  cta_text: {
    color: colors.yellow2,
    fontWeight: 'bold',
    fontSize: 15
  },
  cta: {
    marginTop: 15,
    marginBottom: 100
  }
})