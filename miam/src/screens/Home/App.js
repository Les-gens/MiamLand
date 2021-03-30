import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {DurationIndicator} from '../../components/';

const App = () => {

  return (
    <View>
      <DurationIndicator duration={'10'}/>
      <Text>tototiti</Text>
    </View>
  );
};

export default App;
