import React from 'react'
import { Plus, Gear, MagGlass, Bowl, Fridge } from '../assets/index.js'
import { colors } from '../theme';

export const tabIcon = (focused, routeName) => {
  let icon
  let iconColor = focused ? colors.yellow1 : colors.textWhite 
    
    switch (routeName){
      case 'MyRecipes':
        icon = <Bowl width={20} height={21} fill={iconColor}/>
        break
      case 'Search':
        icon = <MagGlass width={20} height={20} fill={iconColor}/>
        break
      case 'Fridge':
        icon = <Fridge width={20} height={20} />
        break
      case 'Settings':
        icon = <Gear width={20} height={20} fill={iconColor}/>
        break
    }
    return icon    
}