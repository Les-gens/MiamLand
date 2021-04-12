import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import { createStackNavigator } from '@react-navigation/stack';

import {Settings, Fridge, MyRecipes} from '../screens/index'
import {colors} from '../theme'
import {tabIcon} from '../helpers/navigatorHelpers'
import SearchStack from './SearchRecipeNavigator/SearchStack'

const Tab = createBottomTabNavigator()

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
        <Tab.Screen name="MyRecipes" component={MyRecipes} />
        <Tab.Screen name="Fridge" component={Fridge} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
