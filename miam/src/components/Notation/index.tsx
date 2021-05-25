import React from 'react'
import {Text, View} from 'react-native'
import {emojifyNotation} from '../../helpers/stringHelpers'
import styles from './styles'

interface Props {
  notation: number
  numberNotation: number
}

const Notation = ({notation, numberNotation}: Props) => {
  return (
    <View style={styles.notationContainer}>
      <Text style={styles.notation}>
        {`${emojifyNotation(notation)} ${notation}`}
      </Text>
      <Text style={styles.numberNotation}> ({numberNotation})</Text>
    </View>
  )
}

export default Notation
