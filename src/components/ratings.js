import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Ratings = ({rating}) => {
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
  return <View style={styles.ratingStar}>{element}</View>;
};

export default Ratings;

const styles = StyleSheet.create({
  ratingStar: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
});
