import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './styles'

interface Props {
  label: number
}
const DurationIndicator = ({label}: Props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default DurationIndicator
