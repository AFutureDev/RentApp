import React from 'react';
import { View, Text } from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import { useRoute } from '@react-navigation/native';

import places from '../../../assets/data/feed';

const PostDetailedScreen = () => {
  const route = useRoute();

  console.warn(route.params);
  const post = places.find((place) => place.id === route.params.postId);

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostDetailedScreen;
