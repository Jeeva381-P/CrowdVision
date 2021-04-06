import React from 'react';
import {View, Text} from 'react-native';
// Navigation
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/tabNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;
