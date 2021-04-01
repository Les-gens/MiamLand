import React from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import styles from './styles'

/* This is a little component to display the estimated duration of a recipe */
interface Props {
    duration: number
}
const DurationIndicator = ({duration}: Props) => {
    const { t, i18n } = useTranslation()
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{duration} {t('minutes')}</Text>
        </View>
    )
}

export default DurationIndicator