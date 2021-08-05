/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* Search Bar */}
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Destination Search')}>
          <Fontisto name={'search'} size={25} color={'#f15454'} />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>

        {/* Title */}
        <Text style={styles.title}>Go Near</Text>

        {/* Button */}
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore button')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
