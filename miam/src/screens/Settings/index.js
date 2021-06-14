import React from 'react'
import styles from './styles'
import { Pressable, View, Alert, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { signout } from '../../api_calls/user';
import { clearToken } from '../../auth/token';

const Settings = ({route}) => {
    const navigation = useNavigation()

    const disconnect = (e)=>{
      console.log('disconnecting...')

      signout().then((res)=>{
        route.params.setUserToken('')

      })
    }
    return(
        <>
      <View style={styles.firstView}>
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
                onPress={(e) => disconnect(e)}
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
    </>
    )
}

export default Settings