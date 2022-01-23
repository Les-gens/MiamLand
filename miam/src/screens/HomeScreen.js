import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { setToken } from '../api/token.js';
import { getAllRecipes } from '../api/recipes.js';
import { Card, Paragraph, Title } from 'react-native-paper';

const HomeScreen = ({navigation}) => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const allRecipes = await getAllRecipes();
      setRecipes(allRecipes);
    }
    fetchRecipes();
  }, []);

  const logOut = async () => {
    await setToken('');
    navigation.navigate('Login');
  };

  return(
    <View style={styles.container}>
      <Title>Recipes</Title>
      {recipes.map((recipe) =>(
        <Card style={styles.card}>
          <Card.Title title={recipe.name} />
          <Card.Content>
            <Paragraph>{recipe.description}</Paragraph>
          </Card.Content>
        </Card>
      ))}
      <Button title="Sign out" onPress={logOut}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
  }
});

export default HomeScreen;
