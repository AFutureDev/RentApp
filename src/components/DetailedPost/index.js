import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import styles from './styles';

const DetailedPost = (props) => {
  const post = props.post;

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Image */}
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />

        {/* Bed & Bedroom */}
        <Text style={styles.bedrooms}>
          {post.bed} bed {post.bedroom} bedroom
        </Text>

        {/* Type & Description */}
        <Text style={styles.description} numberOfLines={2}>
          {post.type}. {post.title}
        </Text>

        {/* Old price & new Price */}
        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>${post.oldPrice}</Text>
          <Text style={styles.newPrice}> ${post.newPrice}</Text>
          <Text style={styles.nightText}> / night</Text>
        </Text>

        {/* Total price */}
        <Text style={styles.totalPrice}>${post.totalPrice} total</Text>

        <Text style={styles.longDescription}>{post.description}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailedPost;
