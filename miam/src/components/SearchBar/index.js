import React from 'react'
import { View, TextInput } from 'react-native'

const SearchBar = () => {
    const { t } = useTranslation()

    const [research, onChangeResearch] = useState(t('research'))
    return (
        <View>
            <TextInput
                onChangeText={onChangeResearch}
                value={research}
            />
        </View>
    )
}