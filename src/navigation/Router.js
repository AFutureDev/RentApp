import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';
import PostDetailedScreen from '../screens/PostDetailedScreen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearchScreen}
          options={{
            title: 'Search Your Destination',
          }}
        />
        <Stack.Screen
          name={'Guests'}
          component={GuestsScreen}
          options={{
            title: 'How Many People?',
          }}
        />
        <Stack.Screen
          name={'Post'}
          component={PostDetailedScreen}
          options={{
            title: 'Accomondation',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
