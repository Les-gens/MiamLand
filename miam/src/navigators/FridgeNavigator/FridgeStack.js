import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {Fridge, AddIngredient, RemoveIngredient} from '../../screens/index'
import {colors} from '../../theme'

const Stack = createStackNavigator()

export default function SettingStack() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {backgroundColor: colors.primaryGrey},
      }}>
      <Stack.Screen name="Fridge" component={Fridge} />
      <Stack.Screen name="AddIngredient" component={AddIngredient} />
      <Stack.Screen name="RemoveIngredient" component={RemoveIngredient} />
      {}
    </Stack.Navigator>
  )
}
