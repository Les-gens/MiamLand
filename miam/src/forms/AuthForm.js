import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Text } from 'react-native';
import { setToken } from '../api/token';

const AuthForm = ({ buttonText, onSubmit, children, onAuthentication }) => {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submit = () => {
    onSubmit(username, password)
      .then(async (res) => {
        await setToken(res.auth_token);
        // Clear fields on success
        onChangeUsername('')
        onChangePassword('')
        setErrorMessage('');
        onAuthentication();
      })
      .catch((res) => {
        if(res && res.error) {
        setErrorMessage(res.error);
        } else {
          setErrorMessage('Something went wrong');
        }
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangePassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title={buttonText} onPress={submit} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  },
});

export default AuthForm;
