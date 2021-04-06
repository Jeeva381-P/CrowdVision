import React, {useState} from 'react';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
// Components
import Card from '../components/card';
//Config
import color from '../config/color';
//Service
import apiService from '../service/apiService';

const ListingScreen = ({navigation}) => {
  const data = apiService();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={color.primary} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({item}) => (
          <Card
            item={item}
            onPress={() => navigation.navigate('ListingDetailScreen', {item})}
          />
        )}
      />
    </View>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondary,
    paddingHorizontal: 7,
  },
});
