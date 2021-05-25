import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'

const Disconnect = () => {
    const navigation = useNavigation()

    return(
        <>
            <View style={styles.firstView}>
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

export default Disconnect