import React, {useEffect, useState} from 'react';
import {getFridgeIngredient, getProfileInformation} from '../api/profile.js';
import {Card, IconButton, Paragraph} from 'react-native-paper';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {List} from 'react-native-paper';
import {AirbnbRating} from 'react-native-elements';

const ProfileScreen = (navigation) => {
  const [fridgeIngredient, setFridgeIngredient] = useState([]);
  const [profileInformation, setProfileInformation] = useState({});

  useEffect(() => {
    async function fetchProfile() {
      const allIngredients = await getFridgeIngredient();
      const profile = await getProfileInformation();
      setFridgeIngredient(allIngredients);
      setProfileInformation(profile);
    }
    fetchProfile();
  }, []);

  return (
    <ScrollView>
      <Text style={styles.title}>Profile Information</Text>
      <Text>Username: {profileInformation?.user?.username}</Text>
      <Text style={styles.title}>User Recipes</Text>
      {profileInformation?.recipes?.map(recipe => (
        <Card style={styles.card}>
          <Card.Title title={recipe.name} />
          <Card.Content>
            <Paragraph>{recipe.description}</Paragraph>
          </Card.Content>
        </Card>
      ))}
      <Text style={styles.title}>Rated recipes</Text>
      {profileInformation?.ratings?.map(recipeRating => (
        <Card style={styles.card}>
          <Card.Title
            title={recipeRating['recipe.name']}
            subtitle={
              <AirbnbRating
                style={styles.rating}
                isDisabled={true}
                defaultRating={recipeRating.grade}
                size={20}
                reviews=""
              />
            }
          />
          <Card.Content>
            <Paragraph>{recipeRating['recipe.description']}</Paragraph>
          </Card.Content>
        </Card>
      ))}
      <View style={styles.container}>
        <Text style={styles.title}>Fridge</Text>
        <IconButton
          icon="plus-box"
          style={styles.addFridgeIngredientBtn}
          onPress={() => navigation.navigate('AddIngredient')}
        />
      </View>
      <List.Section>
        {fridgeIngredient.map(ingredient => (
          <List.Item title={'- ' + ingredient.name} />
        ))}
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addFridgeIngredientBtn: {
    alignSelf: 'flex-start',
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    paddingTop: 10,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default ProfileScreen;
