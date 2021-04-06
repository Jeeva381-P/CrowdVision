import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
//Config
import color from '../config/color';

const PlannerScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.Text}>Select a city to plan</Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PlannerSelectScreen', 'Chennai')}>
          <View style={styles.Button}>
            <Image
              source={require('../service/assets/place/chennai.jpg')}
              style={styles.img}
            />
            <Text style={styles.ButtonText}>Chennai</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PlannerSelectScreen', 'Bangalore')
          }>
          <View style={styles.Button}>
            <Image
              source={require('../service/assets/place/bangalore.png')}
              style={styles.img}
            />
            <Text style={styles.ButtonText}>Bangalore</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            alert('Data Not Available. Please select above cities')
          }>
          <View style={styles.Button}>
            <Image
              source={require('../service/assets/place/other.png')}
              style={[styles.img, {height: 50, width: 50}]}
            />
            <Text style={styles.ButtonText}>Others</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlannerScreen;

const styles = StyleSheet.create({
  Button: {
    height: 100,
    width: 100,
    borderRadius: 15,
    borderColor: color.primary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 10,
  },
  ButtonText: {
    color: color.primary,
    fontWeight: 'bold',
    paddingVertical: 4,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '70%',
    alignSelf: 'center',
    color: color.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 70,
    width: 70,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    position: 'absolute',
    top: 200,
    color: color.primary,
    fontWeight: 'bold',
    fontSize: 28,
  },
});
