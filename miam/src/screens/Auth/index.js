import React, {useEffect, useState} from 'react'
import {View, Text, Pressable} from 'react-native'
import { Saladier } from '../../assets/index.js'
import styles from './styles.js'
import { colors } from '../../theme/index.js'
import { useTranslation } from 'react-i18next'
import { ActionButton, TextIpt } from '../../components/index'

import { signin, signup } from '../../api_calls/user'

const Auth = () => {
  const { t } = useTranslation()
  const [signingin, setSigningin] = useState(true)

  useEffect(()=>{},[signingin])

  return (
    <View style={styles.container}>
      <View style={styles.bowl}>
        <Saladier width={125} height={110} fill={colors.textWhite}/>
      </View>
      <Text style={styles.welcome}>{t('welcome')}</Text>
      <View style={styles.input}>
        <TextIpt placeholder={t('username')}/>
      </View>
      <View style={styles.input}>
        <TextIpt placeholder={t('password')}/>
      </View>
      <Pressable style={styles.cta} onPress={signingin ? ()=>{setSigningin(false)} : ()=>{setSigningin(true)}}>
        <Text style={styles.cta_text}>{signingin ? t('cta_signup') : t('cta_signin')}</Text>
      </Pressable>
      <ActionButton 
        onpress={signingin ? ()=>{signin()} : ()=>{signup()} } 
        label={signingin ? t('signin') : t('signup')}
      />
    </View>
  )
}

export default Auth