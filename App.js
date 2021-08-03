import React from 'react';
import {SafeAreaView} from 'react-native';

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';

const App = () => {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      <Post />
    </SafeAreaView>
  );
};

export default App;
