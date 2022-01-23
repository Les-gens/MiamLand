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
        await setToken(res.token);
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
      <Text>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeUsername(text)}
        value={username}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangePassword(text)}
        value={password}
        secureTextEntry
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Button title={buttonText} onPress={submit} />
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 20,
  },
  children: {
    marginVertical: 10,
  },
});

export default AuthForm;
