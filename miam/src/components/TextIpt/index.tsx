import React from "react"
import { TextInput } from "react-native"
import { colors } from "../../theme"
import styles from "./styles"

interface Props {
  placeholder: string
}

const TextIpt = ({placeholder}: Props) => {
  return (
    <TextInput placeholderTextColor={colors.grey5} placeholder={placeholder} style={styles.input}/>
  )
}

export default TextIpt