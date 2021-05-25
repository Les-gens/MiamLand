import React from 'react'
import { Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'


const AddIngredient = () => {
    const navigation = useNavigation()

    return(
        <>
            <Text>Welcome to add Ingredient Sir</Text>
        </>
    )
}

export default AddIngredient