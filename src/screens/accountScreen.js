import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Linking,
  Text,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Icons from '../components/Icons';
//Components
import UserCard from '../components/UserCard';
//Config
import color from '../config/color';

const AccountScreen = () => {
  const [img, setImg] = useState(null);
  const locate = () => {
    Geolocation.getCurrentPosition((info) =>
      Linking.openURL(
        `whatsapp://send?text=I am in Danger Situation at https://www.google.com/maps/?q=${info.coords.latitude},${info.coords.longitude}  &phone=+917373883345`,
      ),
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={color.primary} />
      <View style={styles.arrangementContainer}>
        <UserCard
          title="Deepak Kumar"
          subtitle="deepakgsty@gmail.com"
          image={img || require('../service/assets/user.jpg')}
        />
      </View>
      <View style={styles.arrangementContainer}>
        <UserCard
          subtitle="Edit Profile"
          ImageComponent={
            <Icons name="gear" size={40} backgroundColor="#01CBC6" />
          }
        />
        <UserCard
          subtitle="Logout"
          ImageComponent={
            <Icons name="share-square-o" size={40} backgroundColor="#FAC42F" />
          }
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => locate()}>
        <Text style={styles.text}>SOS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  arrangementContainer: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: color.primary,
    borderRadius: 35,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: 600,
  },
  container: {
    flex: 1,
    backgroundColor: color.secondary,
    paddingTop: 10,
  },
  text: {
    color: color.white,
    fontWeight: 'bold',
  },
});
