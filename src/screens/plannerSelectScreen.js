import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import color from '../config/color';

const PlannerSelectScreen = ({navigation, route}) => {
  const item = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate(
            'PlannerDetailScreen',
            'https://karthickraja.me/Backend-Server/',
          )
        }>
        <Image
          source={require('../service/assets/planner/top15.jpg')}
          style={styles.img}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Top 15 Places Under 5000 in </Text>
          <Text style={styles.subtitle}>{item}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate(
            'PlannerDetailScreen',
            'https://karthickraja.me/Backend-Server/2',
          )
        }>
        <Image
          source={require('../service/assets/planner/top10.jpg')}
          style={styles.img}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Top 10 Places Under 3000 in </Text>
          <Text style={styles.subtitle}>{item}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate(
            'PlannerDetailScreen',
            'https://karthickraja.me/Backend-Server/3',
          )
        }>
        <Image
          source={require('../service/assets/planner/top5.jpg')}
          style={styles.img}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Top 5 Places Under 1000 in </Text>
          <Text style={styles.subtitle}>{item}</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PlannerSelectScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: color.secondary,
    paddingBottom: 10,
  },
  card: {
    paddingHorizontal: 10,
    width: '95%',
    height: 300,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
    overflow: 'hidden',
    borderRadius: 20,
    marginTop: 10,
  },
  img: {
    height: 220,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: color.primary,
  },
});
