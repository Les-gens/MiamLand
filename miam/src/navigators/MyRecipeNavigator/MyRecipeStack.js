import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {MyRecipes, NewRecipe, Recipe} from '../../screens/index'
import {colors} from '../../theme'

const Stack = createStackNavigator()

export default function MyRecipeStack() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {backgroundColor: colors.primaryGrey},
      }}>
      <Stack.Screen name="MyRecipes" component={MyRecipes} />
      <Stack.Screen name="Recipe" component={Recipe} />

      <Stack.Screen name="NewRecipe" component={NewRecipe}/>
      
    </Stack.Navigator>
  )
}
