import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import SearchResultScreen from '../screens/SearchResults';

const Stack = createNativeStackNavigator();

const Router = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SearchResults"
        component={SearchResultScreen}
        options={{
          title: 'Search for your destination',
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
