import React, {useEffect, useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {setToken} from '../api/token.js';
import {getAllRecipes} from '../api/recipes.js';
import {BottomNavigation, Card, Paragraph, Title} from 'react-native-paper';
import ProfileScreen from './ProfileScreen.js';

const HomeRoute = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const allRecipes = await getAllRecipes();
      setRecipes(allRecipes);
    }
    fetchRecipes();
  }, []);

  return (
    <View style={styles.container}>
      <Title>Recipes</Title>
      {recipes.map(recipe => (
        <Card style={styles.card}>
          <Card.Title title={recipe.name} />
          <Card.Content>
            <Paragraph>{recipe.description}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </View>
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
    {key: 'Profile', title: 'Profile', icon: 'account'},
    {key: 'LogOut', title: 'Log Out', icon: 'logout'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: HomeRoute,
    Profile: ProfileScreen,
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
  card: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
