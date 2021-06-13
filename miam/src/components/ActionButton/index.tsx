import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './styles'

interface Props {
  label: number
  onpress: ()=>void
}
const ActionButton = ({label, onpress}: Props) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.buttonContainer}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default ActionButton
