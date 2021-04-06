import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Dimensions, Linking} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Heatmap,
} from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome5';
// //config
import color from '../config/color';

export default class HeatMapScreen extends Component {
  static navigationOptions = {
    title: 'San Francisco',
  };

  state = {
    markers: [],
    coordinates: [
      {
        Desc:
          'Best Place to relax and play with your loved once. Greens make you happy',
        id: 1,
        img: [
          'https://images.jdmagicbox.com/comp/bulandshahr/g8/9999p5732.5732.180302124318.p1g8/catalogue/tanda-park-aulina-bulandshahr-parks-0mc1owzvl1.jpg?clr=#442222',
          'https://images.theconversation.com/files/118645/original/image-20160414-4674-16hp2u9.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop',
          'https://upload.wikimedia.org/wikipedia/commons/8/89/Charles_Bond_Park_1.JPG',
        ],
        lat: 11.500248,
        lon: 77.277969,
        max: 80,
        name: 'National Park',
        safetyRating: 5,
        status: 17,
        video: 'https://www.youtube.com/embed/kHqauFUT9hs',
      },
      {
        Desc:
          'Rest in Amazing and most silent and clean to refresh your mind and body.',
        id: 2,
        img: [
          'https://cf.bstatic.com/images/hotel/max1024x768/211/211874461.jpg',
          'https://images.all-free-download.com/images/graphiclarge/gorgeous_hotel_room_picture_167661.jpg',
          'https://i.pinimg.com/originals/55/c2/54/55c254b9a220a5caf847326c01b2145e.jpg',
        ],
        lat: 11.506298,
        lon: 77.238013,
        max: 150,
        name: 'Meridian Hotel',
        safetyRating: 4,
        status: 60,
        video: 'https://www.youtube.com/embed/4eJ8sJGh5dA',
      },
      {
        Desc: 'Marvelous place to play',
        id: 3,
        img: [
          'https://www.planetware.com/photos-large/VIE/vietnam-danang-beach.jpg',
          'https://blog.goway.com/globetrotting/wp-content/uploads/2018/01/Coconut-palm-trees-line-the-walkway-at-China-Beach-Danang-Vietnam_777926293.jpg?x95206',
          'https://holidaybeachdanang.com/wp-content/uploads/2018/04/DSC_6835.jpg',
        ],
        lat: 11.507555,
        lon: 77.247342,
        max: 120,
        name: 'Marina Beach',
        safetyRating: 3,
        status: 89,
        video: 'https://www.youtube.com/embed/6rd6NCoDKDc',
      },
      {
        Desc: 'Improve Knowledge',
        id: 4,
        img: [
          'https://static.dezeen.com/uploads/2019/09/charles-library-temple-university-snohetta-architecture-philadelphia-pennsylvania-usa_dezeen_2364_hero2.jpg',
          'https://d245m47bicpi64.cloudfront.net/_imager/files/Hire/9129/The-Library_Filming_9df4007ed914189556cc8c6908ab4e68.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg/1200px-Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg',
        ],
        lat: 11.49664,
        lon: 77.244611,
        max: 70,
        name: 'Cental Library',
        safetyRating: 5,
        status: 25,
        video: 'https://www.youtube.com/embed/bn05F8lEibY',
      },
      {
        Desc: 'Calm and Relax in Silence place',
        id: 5,
        img: [
          'https://img.traveltriangle.com/blog/wp-content/uploads/2014/11/Lord-Mahabaleshwar-Temple-in-Mahabaleshwar.jpg',
          'https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Mahabaleshwar-Temple.jpg',
          'https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Mahabaleshwar-Temple.jpg',
        ],
        lat: 11.496424,
        lon: 77.239259,
        max: 50,
        name: 'Shiva Temple',
        safetyRating: 4,
        status: 32,
        video: 'https://www.youtube.com/embed/cpxBvr_Ue4I',
      },
    ],
  };

  onCarouselItemChange = (index) => {
    let location = this.state.coordinates[index];

    this._map.animateToRegion({
      latitude: location.lat,
      longitude: location.lon,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    });

    this.state.markers[index].showCallout();
  };

  onMarkerPressed = (location, index) => {
    this._map.animateToRegion({
      latitude: location.lat,
      longitude: location.lon,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    });

    this._carousel.snapToItem(index);
  };

  renderCarouselItem = ({item}) => (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={{uri: item.img[0]}} />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardDesc} numberOfLines={1}>
        {item.Desc}
      </Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={(map) => (this._map = map)}
          showsUserLocation={true}
          style={styles.map}
          initialRegion={{
            latitude: 11.500248,
            longitude: 77.277969,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035,
          }}>
          {this.state.coordinates.map((marker, index) => (
            <Marker
              key={marker.name}
              ref={(ref) => (this.state.markers[index] = ref)}
              onPress={() => this.onMarkerPressed(marker, index)}
              coordinate={{
                latitude: marker.lat,
                longitude: marker.lon,
              }}>
              <Callout>
                <Text style={styles.tooltip}>{marker.name}</Text>
              </Callout>
            </Marker>
          ))}
          <Heatmap
            points={[
              {
                latitude: 11.500248,
                longitude: 77.277969,
                weight: 0.2,
              },
              {
                latitude: 11.506298,
                longitude: 77.238013,
                weight: 0.7,
              },
              {
                latitude: 11.507555,
                longitude: 77.247342,
                weight: 1,
              },
              {
                latitude: 11.49664,
                longitude: 77.244611,
                weight: 0.2,
              },
              {
                latitude: 11.496424,
                longitude: 77.239259,
                weight: 0.7,
              },
            ]}
            radius={50}
            opacity={0.5}
            gradient={{
              colors: ['green', 'yellow', 'red'],
              startPoints: [0.3, 0.7, 0.9],
            }}
          />
        </MapView>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={this.state.coordinates}
          containerCustomStyle={styles.carousel}
          renderItem={this.renderCarouselItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={300}
          removeClippedSubviews={false}
          onSnapToItem={(index) => this.onCarouselItemChange(index)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
  },
  cardContainer: {
    backgroundColor: color.white,
    height: 220,
    width: 300,
    borderRadius: 24,
    overflow: 'hidden',
  },
  cardImage: {
    height: 150,
    width: 300,
  },
  cardTitle: {
    color: color.black,
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 10,
  },
  cardDesc: {
    color: color.medium,
    paddingLeft: 10,
  },
  tooltip: {
    fontSize: 16,
    padding: 5,
  },
});
