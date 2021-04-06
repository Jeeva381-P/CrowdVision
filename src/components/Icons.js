import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import color from '../config/color';

const Icons = ({
  name,
  size = 40,
  iconColor = color.white,
  backgroundColor = color.primary,
}) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: size / 2,
      }}>
      <Icon name={name} size={size - 20} color={iconColor} />
    </View>
  );
};

export default Icons;
