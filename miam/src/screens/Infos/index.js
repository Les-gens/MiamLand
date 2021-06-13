import React from 'react'
import { Pressable, Text, TextPropTypes, View } from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'

const Infos = () => {
    const navigation = useNavigation()

    return(
        <>
            <View style={styles.centralView}>
                <Text style={styles.text}>MiamLand</Text>
                <Text style={styles.text}>Projet réalisé à la FGES, en cours de Ac'Lab</Text>
                <Text></Text>
                <Text style={styles.text}>Réalisé par :</Text>
                <Text style={styles.text}>Neel-Léo Coffin</Text>
                <Text style={styles.text}>Mathieu Degand</Text>
                <Text style={styles.text}>François Lannoy</Text>
                <Text style={styles.text}>Arthur Verzele</Text>
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