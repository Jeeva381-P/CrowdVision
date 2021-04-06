import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
//Config
import color from '../config/color';
import font from '../config/font';

const UserCard = ({title, subtitle, image, ImageComponent, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {ImageComponent && <View style={styles.icon}>{ImageComponent}</View>}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.infoContainer}>
        {title && <Text style={styles.infoTitle}>{title}</Text>}
        {subtitle && <Text style={styles.infoSubTitle}>{subtitle}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 2,
    marginHorizontal: 10,
    backgroundColor: color.white,
    padding: 7,
    borderRadius: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  infoContainer: {
    padding: 5,
    justifyContent: 'center',
  },
  infoTitle: {
    fontSize: 18,
    fontFamily: font.primary,
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  infoSubTitle: {
    fontSize: 15,
    color: color.textSecondary,
  },
});
