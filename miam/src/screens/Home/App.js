import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {DurationIndicator, RecipeCard} from '../../components/';

import jambon from '../../assets/img/jambon.jpg'
import styles from './styles';

const App = () => {

  return (
    <View style={styles.homeContainer}>
      <RecipeCard 
        duration={'10'} 
        notation={4} 
        numberNotation={10} 
        recipeName={'jambon'} 
        source={jambon}
      />
      <DurationIndicator duration={'10'}/>
      <Text>tototiti</Text>
    </View>
  );
};

export default App;
