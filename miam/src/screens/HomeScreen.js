import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {setToken} from '../api/token.js';
import {getAllRecipes} from '../api/recipes.js';
import {BottomNavigation, Card, Paragraph, Title, Button, IconButton} from 'react-native-paper';
import ProfileScreen from './ProfileScreen.js';
import SearchScreen from './SearchScreen.js';

const HomeRoute = navigation => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const allRecipes = await getAllRecipes();
      setRecipes(allRecipes);
    }
    fetchRecipes();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Title>Recipes</Title>
      <View style={styles.containerAddRecipe}>
        <Text style={styles.title}>Add a recipe</Text>
        <IconButton
            icon="plus-box"
            onPress={() => navigation.navigate('AddRecipe')}
        />
      </View>
      {recipes.map(recipe => (
        <Card style={styles.card}>
          <Card.Title title={recipe.name} />
          <Card.Content>
            <Paragraph>{recipe.description}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => {navigation.navigate('Recipes', {recipeId: recipe.recipeid})}}>View</Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
};

const LogOutRoute = navigation => {
  setToken('');
  navigation.navigate('Login');
  return null;
};

const HomeScreen = ({navigation}) => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Home', title: 'Home', icon: 'home'},
    {key: 'Search', title: 'Search', icon: 'feature-search-outline'},
    {key: 'Profile', title: 'Profile', icon: 'account'},
    {key: 'LogOut', title: 'Log Out', icon: 'logout'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: () => HomeRoute(navigation),
    Search: () => SearchScreen(navigation),
    Profile: () => ProfileScreen(navigation),
    LogOut: () => LogOutRoute(navigation),
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,

  },
  containerAddRecipe: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default HomeScreen;
