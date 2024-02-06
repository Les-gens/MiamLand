import React from 'react';
import {Button, Text, View} from 'react-native';
import {login} from '../api/auth.js';
import AuthForm from '../forms/AuthForm.js';

const LoginScreen = ({navigation}) => {
  return (
    <AuthForm
      buttonText="Log in"
      onSubmit={login}
      onAuthentication={() => navigation.navigate('Home')}>
      <Button
        title="Create account"
        onPress={() => navigation.navigate('CreateAccount')}
      />
    </AuthForm>
  );
};

export default LoginScreen;
