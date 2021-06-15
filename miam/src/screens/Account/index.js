import React, { useEffect, useState } from 'react'
import { Pressable, Text, View, TextInput } from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import axios from 'axios'


const Account = () => {
    const [user, setuser] = useState(0)

    const navigation = useNavigation()
    useEffect( () => {
        axios.get(`http://10.0.2.2:8000/api/me`)
                .then(response => {
                    console.log(response.data);
                    setuser(response.data[0].userName);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
    },[])

    return(
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Nom d'utilisateur</Text>
                <Text>{user}</Text>
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