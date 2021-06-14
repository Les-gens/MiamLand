import React, { useState} from 'react'
import { Text, View, Pressable, Switch } from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'


const AddIngredient = () => {
    const navigation = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)
    const [selected, setSelected] = useState(false)


    const getFridgeId = () => {
        console.log("fridge id")
    }

    const sendIngredient = () => {
        let fId = getFridgeId()

        if(!isEnabled){
            console.log("add")
            // do post request whith fridge id
        }else{
            console.log("delete")
            // do delete request with fridge id
        }
    }
    return(
        <>
            <View style={styles.container}>

                <TextInput style={styles.textInput} 
                placeholder="Ingrédient (oeuf, lardon, camembert, ...)"
                placeholderTextColor="#f8f8f8"
                underlineColorAndroid={'transparent'} />

                <View style={styles.containerVertical}>
                    <Text>Ajout</Text>
                    <Switch
                        trackColor={{ false: "#008000", true: "#ff0000" }}
                        thumbColor={isEnabled ? "#B22222" : "#556B2F"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text>Retrait</Text>
                </View>

                <Pressable
                onPress={ () => {sendIngredient()}}
                    style={({ pressed }) => [{
                        backgroundColor: pressed
                        ? 'darkgrey'
                        : 'grey'
                    }, styles.button]}>
                    <Text style={styles.text}>{'Envoyer'}</Text>
                </Pressable>
            </View>
        </>
    )
}

export default AddIngredient