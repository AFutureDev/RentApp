import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import Fontlisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExploreNavigator from './ExploreNavigator';
import SearchResultsMap from '../screens/SearchResultsMap';
import PostDetailedScreen from '../screens/PostDetailedScreen';
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
      }}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontlisto name="search" color={color} size={25} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Airbnb"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="airbnb" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
