import React, {useState, useEffect} from "react"
import { TextInput } from "react-native"
import { colors } from "../../theme"
import styles from "./styles"

interface Props {
  placeholder: string
  content?: string
  onChange: (text:string)=> void
}

const TextIpt = ({placeholder, content = '', onChange}: Props) => {
  const [isFocused, setIsFocused] = useState(false)
  useEffect(()=>{}, [isFocused])
  return (
    <TextInput 
      onFocus={()=>setIsFocused(true)} 
      onBlur={()=>setIsFocused(false)} 
      placeholderTextColor={colors.grey5} 
      placeholder={placeholder} 
      style={isFocused ? styles.input_focused: styles.input}
      onChangeText={text=>onChange(text)}
    >
      {content !== '' ? content : null}
    </TextInput>
  )
}

export default TextIpt