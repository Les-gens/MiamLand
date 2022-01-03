import React from 'react';
import { View, Text, Button } from 'react-native';
import { setToken } from '../api/token.js';

const HomeScreen = ({navigation}) => {

  const logOut = async () => {
    await setToken('');
    navigation.navigate('Login');
  };

  return(
    <View>
      <Text>HomeScreen</Text>
      <Button title="Sign out" onPress={logOut}/>
    </View>
  )
};

export default HomeScreen;
