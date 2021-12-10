import React from 'react';
import { View, Text } from 'react-native';
import { Marker } from 'react-native-maps';

const CustomMarker = (props) => {
  const { coordinate, price, onPress, isSelected } = props;

  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? 'black' : '#fff',
          borderRadius: 10,
          borderColor: 'grey',
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: isSelected ? '#fff' : '#000',
            fontWeight: 'bold',
          }}
        >
          {price}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
