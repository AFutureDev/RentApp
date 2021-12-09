import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const SearchResultsMap = () => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <MapView
        style={{ width: '100%', height: '100%' }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 54.8985,
          longitude: 23.9036,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        <Marker coordinate={{ latitude: 54.8985, longitude: 23.9036 }} />
      </MapView>
    </View>
  );
};

export default SearchResultsMap;
