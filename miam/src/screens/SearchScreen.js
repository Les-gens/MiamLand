import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {research} from '../api/recipes';
import {Searchbar, Card, Paragraph, Button} from 'react-native-paper';

// TODO : might put this in a lib afterwards
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const SearchScreen = navigation => {
  const [search, setResearch] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipe() {
      const recipeAPI = await research(search);
      setRecipes(recipeAPI);
    }
    debounce(fetchRecipe(), 2500);
  }, [search]);

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={setResearch}
        value={search}
      />
      {recipes.length !== 0 ? (
        recipes.map(recipe => (
          <Card styles={styles.card}>
            <Card.Title title={recipe.name} />
            <Card.Content>
              <Paragraph>{recipe.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button
                onPress={() => {
                  navigation.navigate('Recipes', {recipeId: recipe.recipeid});
                }}>
                View
              </Button>
            </Card.Actions>
          </Card>
        ))
      ) : (
        <Text>Nothing was found.</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
  },
});
export default SearchScreen;
