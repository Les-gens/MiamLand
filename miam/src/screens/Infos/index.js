import React from 'react'
import { Pressable, Text, TextPropTypes, View } from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'

const Infos = () => {
    const navigation = useNavigation()

    return(
        <>
            <View style={styles.centralView}>
                <Text>MiamLand</Text>
                <Text>Projet réalisé à la FGES, en cours de Ac'Lab</Text>
                <Text></Text>
                <Text>Réalisé par :</Text>
                <Text>Neel-Léo Coffin</Text>
                <Text>Mathieu Degand</Text>
                <Text>François Lannoy</Text>
                <Text>Arthur Verzele</Text>
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

export default Infos