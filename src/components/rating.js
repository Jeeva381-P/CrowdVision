import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//config
import color from '../config/color';
import font from '../config/font';

const Rating = ({rating}) => {
  var element = [];
  var tot = 0;
  var count = 1;
  for (let index = 0; index < 5; index++) {
    if (rating > tot) {
      element.push(<Icon name="star" size={25} color="#F3B431" key={count} />);
      tot += 1;
      count += 1;
    } else {
      element.push(
        <Icon name="star-o" size={25} color="#F3B431" key={count} />,
      );
      count += 1;
    }
  }
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://www.pinclipart.com/picdir/big/457-4576580_nhtsa-5-star-overall-safety-rating-emblem-clipart.png',
        }}
        style={styles.image}
      />
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Safety Rating</Text>
        <View style={styles.ratingStar}>{element}</View>
      </View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  image: {
    width: 39,
    height: 45,
  },
  ratingContainer: {
    marginLeft: 10,
    flexDirection: 'row',
    flex: 1,
  },
  ratingStar: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flex: 1,
  },
  ratingText: {
    fontFamily: font.primary,
    fontSize: 17,
    color: color.medium,
    fontWeight: 'bold',
  },
});
