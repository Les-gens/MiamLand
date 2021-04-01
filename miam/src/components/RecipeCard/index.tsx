import React from 'react'
import { View, Text, Image } from 'react-native'
import { capitalize } from '../../helpers/stringHelpers'
import DurationIndicator from '../DurationIndicator'
import styles from './styles'

/* this is a component that displays recipes on the home page */

interface Props {
    recipeName: string
    notation: number
    numberNotation: number
    duration: number
    source: number //typeof require image returns number
}

const RecipeCard = ({recipeName, notation, numberNotation, duration, source}: Props) => {
    return(
        <View style = {styles.container}>
            <View style={styles.informations}>
                <View>
                    <Text style={styles.recipeName}>{capitalize(recipeName)}</Text>
                    <View style={styles.notationContainer}>
                        <Text style={styles.notation}>{notation}</Text><Text style={styles.notationNumber}> ({numberNotation})</Text>
                    </View>
                </View>
                <DurationIndicator duration={duration}/>

            </View>
            <Image style={styles.image} source={source}/>
        </View>
    )
    
}

export default RecipeCard