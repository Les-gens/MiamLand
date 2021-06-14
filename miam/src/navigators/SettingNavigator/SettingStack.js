import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {Settings, Account, Infos} from '../../screens/index'
import {colors} from '../../theme'

const Stack = createStackNavigator()

export default function SettingStack({route}) {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {backgroundColor: colors.primaryGrey},
      }}>
      <Stack.Screen name="SettingsScreen" component={Settings} initialParams={{ setUserToken: route.params.setUserToken }}/>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Infos" component={Infos} />
    </Stack.Navigator>
  )
}
