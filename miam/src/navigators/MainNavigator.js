import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home/index'
import { colors } from '../theme';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle= {{
          backgroundColor: colors.primaryGrey
        }}
        tabBarOptions={{
          activeTintColor: colors.yellow1,
          inactiveTintColor: colors.textWhite,
          activrBackgroundColor: colors.grey2,
          inactiveBackgroundColor: colors.grey2,
          style: {
            backgroundColor: colors.grey2,
            marginBottom: 3,
          }
        }}
      >
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
