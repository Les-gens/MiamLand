import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import { createStackNavigator } from '@react-navigation/stack';

import {Settings, Fridge, MyRecipes} from '../screens/index'
import {colors} from '../theme'
import {tabIcon} from '../helpers/navigatorHelpers'
import SearchStack from './SearchRecipeNavigator/SearchStack'
import SettingStack from './SettingNavigator/SettingStack'
import FridgeStack from './FridgeNavigator/FridgeStack'
import { createStackNavigator } from '@react-navigation/stack'
import MyRecipeStack from './MyRecipeNavigator/MyRecipeStack'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{
          backgroundColor: colors.primaryGrey,
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            return tabIcon(focused, route.name)
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.yellow1,
          inactiveTintColor: colors.textWhite,
          style: {
            backgroundColor: colors.grey2,
          },
        }}>
        <Tab.Screen name="MyRecipes" component={MyRecipeStack} />
        <Tab.Screen name="Fridge" component={FridgeStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Settings" component={SettingStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
