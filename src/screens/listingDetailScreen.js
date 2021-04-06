import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  ScrollView,
  Modal,
  Linking,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
//Components
import Chart from '../components/chart';
import Graph from '../components/graph';
import Rating from '../components/rating';
import ViewImage from '../components/viewImage';
import Review from '../components/review';
import Ratings from '../components/ratings';
//Config
import color from '../config/color';
import font from '../config/font';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListingDetailScreen = ({navigation, route}) => {
  const {item} = route.params;
  const [trigger, setTrigger] = useState(false);
  const [viewtrigger, setViewtrigger] = useState(false);
  const reviewData = [
    {
      id: 1,
      name: 'Karthick',
      review:
        'I frequently visiting this temple with my family. It is located in sathiyamangalam to mysore (16kms from sathiyamangalam) and there frequent buses from sathy. The temple is huge and dedicated to Sakthi Bannari Amman.The temple is well maintained and clean.Best time to hit the place is around at any time',
    },
    {
      id: 2,
      name: 'Bala Vignesh',
      review:
        'In this Covid situation less people are visiting, all age people can visit this place no restriction... Pooja item temple people not getting, but you can break the coconut... Very good parking space available, near temple no hotel are there, very small hotel are there around 2 to 3 kilometres... Template and surrounding is clean and greeny... Near by bhavani saagar dam and kodiveri waterfalls are there... But now this are not opened',
    },
  ];
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar backgroundColor={color.primary} />
        <SliderBox
          images={item.img}
          style={styles.image}
          dotColor={color.white}
          inactiveDotColor={color.medium}
          circleLoop
        />
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>{item.name}</Text>
          <Text style={styles.infoSubTitle}>{item.Desc}</Text>
        </View>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => setViewtrigger(true)}>
          <Text style={styles.viewButtonText}>Play Video</Text>
        </TouchableOpacity>
        <View style={styles.graphContainer}>
          <Chart item={item} fontSize={50} />
          <Text style={styles.graphText}>{`out of ${item.max}`}</Text>
          <Text style={styles.infoButton} onPress={() => setTrigger(true)}>
            View More
          </Text>
        </View>
        <View style={styles.ratingContainer}>
          <Rating rating={item.safetyRating} />
        </View>
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: item.lat,
              longitude: item.lon,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={{
                latitude: item.lat,
                longitude: item.lon,
              }}
              image={require('../service/assets/marker.png')}
            />
          </MapView>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(`google.navigation:q=${item.lat}+${item.lon}`)
            }>
            <View style={styles.mapDirectionButton}>
              <Icon name="directions" color="#fff" size={25} />
              <Text style={styles.mapDirectionButtonText}>Direction</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.reviewContainer}>
          <Text style={styles.reviewText}>Reviews and Ratings</Text>
          <Ratings rating={4} />
          <Review review={reviewData} />
        </View>
      </ScrollView>
      <Modal visible={trigger} animationType={'fade'} transparent={true}>
        <Graph onPress={() => setTrigger(false)} id={item.max} />
      </Modal>
      <Modal visible={viewtrigger} animationType={'fade'} transparent={true}>
        <ViewImage onPress={() => setViewtrigger(false)} id={item.video} />
      </Modal>
    </>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: color.secondary,
    paddingTop: 7,
  },
  graphContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.white,
    paddingTop: 5,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  graphText: {
    color: color.medium,
    fontSize: 17,
  },
  image: {
    width: '98%',
    height: 270,
    alignSelf: 'center',
    borderRadius: 12,
  },
  infoButton: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 15,
    color: color.primary,
  },
  infoContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: font.primary,
    marginBottom: 10,
  },
  infoSubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: font.primary,
    color: color.medium,
  },
  map: {
    height: 250,
    width: '100%',
  },
  mapContainer: {
    marginBottom: 10,
  },
  mapDirectionButton: {
    width: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: color.primary,
    borderRadius: 30,
    marginTop: 7,
    alignSelf: 'center',
  },
  mapDirectionButtonText: {
    color: color.white,
    fontWeight: 'bold',
    fontSize: 17,
    paddingLeft: 7,
  },
  ratingContainer: {
    margin: 10,
    backgroundColor: color.white,
    borderRadius: 12,
  },
  reviewContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: color.white,
    borderRadius: 15,
  },
  reviewText: {
    fontFamily: font.primary,
    fontSize: 18,
    fontWeight: 'bold',
    color: color.medium,
  },
  viewButton: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: color.primary,
    borderRadius: 20,
    marginBottom: 10,
  },
  viewButtonText: {
    fontSize: 16,
    color: color.white,
    fontWeight: 'bold',
  },
});
