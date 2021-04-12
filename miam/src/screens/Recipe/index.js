import React from 'react'
import useState, { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'


import { ActionButton, DurationIndicator } from '../../components'

const title = 'Endives au jambon'

const Recipe = () => {
    const { t, i18n } = useTranslation()

    return (
        <View>
            <Text>{title}</Text>
            <DurationIndicator duration={10}/>
            <ActionButton label={t('stove')}/>
        </View>
    )
}

export default Recipe