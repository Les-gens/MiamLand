import React, { useState } from 'react'
import { Pressable, Text, View, TextInput } from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'



const Account = () => {
    const [count, setCount] = useState(0)

    const navigation = useNavigation()

    return(
        <>
            <View style={styles.container}>
                <Text>Nom d'utilisateur</Text>
                <TextInput style={styles.textInput} 
                placeholder="Nom d'utilisateur"
                placeholderTextColor="#f8f8f8"
                underlineColorAndroid={'transparent'} />

                <Text>Mot de passe</Text>
                <TextInput style={styles.textInput} 
                placeholder="Mot de passe"
                placeholderTextColor="#f8f8f8"
                underlineColorAndroid={'transparent'} />

                <Pressable
                    style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'darkgrey'
                        : 'grey'
                    }, styles.button]}>
                    <Text style={styles.text}>{'Modifier'}</Text>
                </Pressable>
            </View>

            
            <View style={styles.bottomView}>
                <View>
                    <Pressable 
                    onPress={() => navigation.goBack()}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                            ? 'darkgrey'
                            : 'grey'
                        },
                        styles.button
                    ]}>
                        <Text style={styles.text}>{'Back'}</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export default Account