import React from 'react'
import styles from './styles'
import { Pressable, View, Alert, Text } from 'react-native';

const Settings = () => {
    
    return(
        <>
      <View style={styles.firstView}>
        <View style={styles.order}>
            <Pressable style={({ pressed }) => [
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
            <Pressable style={({ pressed }) => [
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
            <Pressable style={({ pressed }) => [
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