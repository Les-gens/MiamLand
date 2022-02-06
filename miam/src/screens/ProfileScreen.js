import React, {useEffect, useState} from 'react';
import {getFridgeIngredient, getProfileInformation} from '../api/profile.js';
import {Card, Paragraph} from 'react-native-paper';
import {ScrollView, Text} from 'react-native';
import {List} from 'react-native-paper';

const ProfileScreen = ({navigation}) => {
  const [fridgeIngredient, setFridgeIngredient] = useState([]);
  const [profileInformation, setProfileInformation] = useState({});

  useEffect(() => {
    async function fetchProfile() {
      const allIngredients = await getFridgeIngredient();
      const profile = await getProfileInformation();
      setFridgeIngredient(allIngredients);
      setProfileInformation(profile.user);
    }
    fetchProfile();
  }, []);

  return (
    <ScrollView>
      <Text>Profile Information</Text>
      <Text>Username: {profileInformation.username}</Text>
      <List.Section>
        <List.Subheader>Fridge</List.Subheader>
        {fridgeIngredient.map(ingredient => (
          <List.Item title={'- ' + ingredient.name} />
        ))}
      </List.Section>
    </ScrollView>
  );
};

export default ProfileScreen;
