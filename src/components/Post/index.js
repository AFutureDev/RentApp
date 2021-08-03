import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://assets.bedful.com/images/21896bfd778e98fb84b1e69dbd77bad9c9107714/large.jpg',
        }}
      />

      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        There aren't too many places in Britain where you can squint and pretend
        you're in the Caribbean for the moment, But on a sunny day the Buddha
        Beach House is one of them.
      </Text>

      {/* Old price & new Price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.newPrice}> $30</Text>
        <Text style={styles.nightText}>/ night</Text>
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
