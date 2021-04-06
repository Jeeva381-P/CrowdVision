import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
//config
import color from '../config/color';

const Review = ({review}) => {
  return (
    <>
      {review.map((data) => (
        <View key={data.id}>
          <View style={styles.container}>
            <Text style={styles.userName} numberOfLines={1}>
              {data.name}
            </Text>
            <Text>{data.review}</Text>
          </View>
          <View style={styles.line} />
        </View>
      ))}
    </>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  line: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: color.medium,
  },
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: color.dark,
    paddingVertical: 5,
  },
});
