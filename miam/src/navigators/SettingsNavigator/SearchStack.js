import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {Search, Recipe} from '../../screens/index'
import {colors} from '../../theme'

const Stack = createStackNavigator()

export default function SearchStack() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {backgroundColor: colors.primaryGrey},
      }}>
      <Stack.Screen name="SettingsScreen" component={Settings} />
      <Stack.Screen name="Account" component={Account} />
      {}
    </Stack.Navigator>
  )
}
