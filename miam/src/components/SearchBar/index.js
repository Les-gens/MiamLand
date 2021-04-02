import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from './styles'

const SearchBar = () => {
    const { t } = useTranslation()

    const [research, onChangeResearch] = useState(t('research'))
    return (
        <View style={styles.searchBar}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeResearch}
                value={research}
            />
        </View>
    )
}

export default SearchBar