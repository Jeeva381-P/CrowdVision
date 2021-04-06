import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
//Config
import color from '../config/color';
import font from '../config/font';

const Button = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '30%',
    backgroundColor: color.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: font.primary,
    fontWeight: 'bold',
    color: color.white,
    fontSize: 18,
  },
});
