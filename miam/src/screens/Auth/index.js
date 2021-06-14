import React, {useEffect, useState} from 'react'
import {View, Text, Pressable, ToastAndroid} from 'react-native'
import { Saladier } from '../../assets/index.js'
import styles from './styles.js'
import { colors } from '../../theme/index.js'
import { useTranslation } from 'react-i18next'
import { ActionButton, TextIpt } from '../../components/index'
import {signin, signup} from '../../api_calls/user.ts'
import { useNavigation } from '@react-navigation/native'

const Auth = ({route}) => {
  const { t } = useTranslation()

  const [signingin, setSigningin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirmPassword] = useState('')

  const navigation = useNavigation()
  useEffect(()=>{},[signingin, username, password])

  const submit = (e) => {
    if (signingin){
      signin(username, password).then((res)=>{
        console.log('res: ',res)

        route.params.setUserToken(res.data.token)
      }).catch((e)=>{
        console.error(e)
      })
    }else{
      if (confirm_password == password){
        signup(username, password).then((res)=>{
          console.log('res: ',res)

          route.params.setUserToken(res.data.token)

        })
      } else {
        ToastAndroid.show("Confirm password is not the same", ToastAndroid.SHORT)
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.bowl}>
        <Saladier width={125} height={110} fill={colors.textWhite}/>
      </View>
      <Text style={styles.welcome}>{t('welcome')}</Text>
      <View style={styles.input}>
        <TextIpt onChange={setUsername} content={username} placeholder={t('username')}/>
      </View>
      <View style={styles.input}>
        <TextIpt onChange={setPassword} content={password} placeholder={t('password')}/>
      </View>
      {signingin ? null : 
        <View style={styles.input}>
          <TextIpt onChange={setConfirmPassword} content={confirm_password} placeholder={t('confirm_password')}/>
        </View>
      }
      <Pressable style={styles.cta} onPress={signingin ? 
        ()=>{
          setConfirmPassword('')
          setPassword('')
          setUsername('')
          setSigningin(false)
        } : ()=>{
          setPassword('')
          setUsername('')
          setSigningin(true)
        }}
      >
        <Text style={styles.cta_text}>{signingin ? t('cta_signup') : t('cta_signin')}</Text>
      </Pressable>
      <ActionButton 
        onpress={ e => submit(e) } 
        label={signingin ? t('signin') : t('signup')}
      />
    </View>
  )
}

export default Auth