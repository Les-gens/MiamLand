import React from 'react'
import styles from './styles'
import { Pressable, View, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { clearToken } from '../../auth/token';
import { useTranslation } from 'react-i18next';

const Settings = ({route}) => {
    const navigation = useNavigation()
    const {t} = useTranslation()

    return(
      <View style={styles.firstView}>
        <Text style={styles.title}>{t("Settings")}</Text>
        <View style={styles.order}>
            <Pressable 
                onPress={() => navigation.navigate('Account')}
                style={({ pressed }) => [
                {
                    backgroundColor: pressed
                    ? 'darkgrey'
                    : 'grey'
                },
                styles.button
            ]}>
                <Text style={styles.text}>{'Compte'}</Text>
            </Pressable>
        </View>
        <View style={styles.order}>
            <Pressable 
                onPress={() => navigation.navigate('Infos')}
                style={({ pressed }) => [
                {
                    backgroundColor: pressed
                    ? 'darkgrey'
                    : 'grey'
                },
                styles.button
            ]}>
                <Text style={styles.text}>{'Infos'}</Text>
            </Pressable>
        </View>
        <View style={styles.order}>
            <Pressable 
                onPress={(e) => {
                  clearToken().then((res)=>{
                    route.params.setUserToken(res)
                  })
                }}
                style={({ pressed }) => [
                {
                    backgroundColor: pressed
                    ? 'darkgrey'
                    : 'grey'
                },
                styles.button
            ]}>
                <Text style={styles.text}>{'Deconnexion'}</Text>
            </Pressable>
        </View>
      </View>
    )
}

export default Settings