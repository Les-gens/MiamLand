import React from 'react'
import {View, Text} from 'react-native'
import { Saladier } from '../../assets/index.js'
import styles from './styles.js'
import { colors } from '../../theme/index.js'
import { useTranslation } from 'react-i18next'
import { ActionButton, TextIpt } from '../../components/index'

const Auth = () => {
  const { t } = useTranslation()
  const login =true
  return (
    <View style={styles.container}>
      <View>
        <Saladier width={110} height={97} fill={colors.textWhite}/>

      </View>
      <Text style={styles.welcome}>{t('welcome')}</Text>
      <TextIpt placeholder={t('username')}/>
      <TextIpt placeholder={t('password')}/>
      <ActionButton label={login ? t('signin') : t('signup')}/>
    </View>
  )
}

export default Auth