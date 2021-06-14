import React, {useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import { createStackNavigator } from '@react-navigation/stack';

import {Settings, Fridge, MyRecipes, Auth} from '../screens/index'
import {colors} from '../theme'
import {tabIcon} from '../helpers/navigatorHelpers'
import SearchStack from './SearchRecipeNavigator/SearchStack'
import SettingStack from './SettingNavigator/SettingStack'
import FridgeStack from './FridgeNavigator/FridgeStack'
import { createStackNavigator } from '@react-navigation/stack'
import MyRecipeStack from './MyRecipeNavigator/MyRecipeStack'
import { clearToken, getToken } from '../auth/token'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function MainNavigator() {
  const [userToken, setUserToken] = useState('')
  useEffect(()=>{}, [userToken])
  useEffect(()=>{
    console.log('rendering mainnav with token : ',getToken())
    setUserToken(getToken())
  }, [])
  const mainNav = () => {
    return (
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
    )
  }

  const authNav = () => {
    return (
      <Stack.Navigator
        headerMode= 'none'
        cardStyle={{
           backgroundColor: colors.primaryGrey,
        }}
      >
        
        <Stack.Screen name="Auth" component={Auth}/>
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      { userToken != '' ? mainNav() : authNav() }
      {/* { mainNav() } */}
    </NavigationContainer>
  )
}
