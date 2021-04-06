import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// Component
import Chart from '../components/chart';
//Config
import color from '../config/color';
import font from '../config/font';

const Card = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: item.img[0]}} style={styles.image} />
      <View style={styles.DetailContainer}>
        <View style={styles.Detailitem}>
          <Text numberOfLines={1} style={styles.title}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={styles.subtitle}>
            {item.Desc}
          </Text>
        </View>
        <View style={styles.graph}>
          <Chart item={item} radius={25} strokeWidth={8} fontSize={17} />
          <Text style={styles.graphText}>{`out of ${item.max}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    borderRadius: 20,
    height: 300,
    overflow: 'hidden',
    marginTop: 10,
  },
  DetailContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingBottom: 5,
  },
  Detailitem: {
    flex: 0.75,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 25,
  },
  graph: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 30,
  },
  graphText: {
    fontSize: 12,
    color: '#99AAAB',
    fontWeight: 'bold',
  },
  image: {
    height: 230,
    width: '100%',
  },
  title: {
    fontSize: 22,
    color: color.dark,
    fontFamily: font.primary,
    fontWeight: '900',
  },
  subtitle: {
    fontSize: 15,
    color: color.medium,
    fontFamily: font.primary,
  },
  statusDetail: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
