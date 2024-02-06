import React from 'react';
import {Button} from 'react-native';
import {signUp} from '../api/auth.js';
import AuthForm from '../forms/AuthForm.js';

const SignUpScreen = ({navigation}) => {
  return (
    <AuthForm
      buttonText="Create Account"
      onSubmit={signUp}
      onAuthentication={() => navigation.navigate('Home')}>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </AuthForm>
  );
};

export default SignUpScreen;
