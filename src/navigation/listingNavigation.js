import React from 'react';

// Navigation
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import ListingScreen from '../screens/listingScreen';
import ListingDetailScreen from '../screens/listingDetailScreen';

const Stack = createStackNavigator();

const ListingNavigation = () => {
  return (
    <Stack.Navigator mode="card" screenOptions={{headerShown: false}}>
      <Stack.Screen name="ListingScreen" component={ListingScreen} />
      <Stack.Screen
        name="ListingDetailScreen"
        component={ListingDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default ListingNavigation;
