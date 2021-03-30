import React from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import styles from './styles'

const DurationIndicator = (props) => {
    const { t, i18n } = useTranslation()
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.duration} {t('minutes')}</Text>
        </View>
    )
}

export default DurationIndicator