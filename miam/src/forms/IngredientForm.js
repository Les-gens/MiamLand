import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TextInput, Button, Text} from 'react-native';
import {setToken} from '../api/token';

const IngredientForm = ({buttonText, onSubmit, onSuccess}) => {
  const [ingredient, onChangeIngredient] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submit = () => {
    onSubmit(ingredient)
      .then(async res => {
        // Clear fields on success
        onChangeIngredient('');
        setErrorMessage('');
        onSuccess();
      })
      .catch(res => {
        if (res && res.error) {
          setErrorMessage(res.error);
        } else {
          setErrorMessage('Something went wrong');
        }
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Ingredient</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeIngredient(text)}
        value={ingredient}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Button title={buttonText} onPress={submit} />
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

export default IngredientForm;
