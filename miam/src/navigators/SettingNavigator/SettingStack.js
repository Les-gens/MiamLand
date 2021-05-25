import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {Settings, Account, Infos, Disconnect} from '../../screens/index'
import {colors} from '../../theme'

const Stack = createStackNavigator()

export default function SettingStack() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {backgroundColor: colors.primaryGrey},
      }}>
      <Stack.Screen name="SettingsScreen" component={Settings} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Infos" component={Infos} />
      <Stack.Screen name="Disconnect" component={Disconnect} />
      {}
    </Stack.Navigator>
  )
}
