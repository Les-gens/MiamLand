import React, { useState } from 'react'
import { Button, Pressable, Text, View } from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'



const Account = () => {
    const [count, setCount] = useState(0)

    const navigation = useNavigation()

    return(
        <>
            <Text>Vous avez clique {count} fois</Text>
            <Pressable 
            onPress={() => setCount(count +1)}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed
                    ? 'darkgrey'
                    : 'grey'
                },
                styles.button
            ]}>
                <Text style={styles.text}>{'Clique ici'}</Text>
            </Pressable>

            
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