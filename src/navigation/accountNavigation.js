import React from 'react';

// Navigation
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

//Screens
import AccountScreen from '../screens/accountScreen';

const AccountNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'AccountScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigation;
