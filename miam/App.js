import LoginScreen from './src/screens/LoginScreen';
import React from 'react';

import HomeScreen from './src/screens/HomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import RecipesScreen from './src/screens/RecipesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="CreateAccount" component={SignUpScreen} />
        <Stack.Screen name="Recipes" component={RecipesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
