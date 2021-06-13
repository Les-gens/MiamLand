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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const storeData = async (value) => {
  try {
    console.log('setting : ', value)
    await AsyncStorage.setItem('@token', value)
  } catch (e) {
    console.log(e)
  }
}

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@token')
    console.log('getting : ', value)
    return value
  } catch(e) {
    console.log(e)
  }
}
export default function MainNavigator() {
  storeData('ttoot')
  let tok 
  getData().then(value => {
    tok = value
  })
  console.log('tok :', tok)
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
