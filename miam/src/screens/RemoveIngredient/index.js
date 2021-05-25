import React from 'react'
import { Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'


const RemoveIngredient = () => {
    const navigation = useNavigation()

    return(
        <>
            <Text>Welcome to remove Ingredient Sir</Text>
        </>
    )
}

export default RemoveIngredient