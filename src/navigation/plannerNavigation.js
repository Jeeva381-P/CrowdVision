import React from 'react';

// Navigation
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

//Screens
import PlannerScreen from '../screens/plannerScreen';
import PlannerSelectScreen from '../screens/plannerSelectScreen';
import PlannerDetailScreen from '../screens/plannerDetailScreen';

const PlannerNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'PlannerScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="PlannerScreen" component={PlannerScreen} />
      <Stack.Screen
        name="PlannerDetailScreen"
        component={PlannerDetailScreen}
      />
      <Stack.Screen
        name="PlannerSelectScreen"
        component={PlannerSelectScreen}
      />
    </Stack.Navigator>
  );
};

export default PlannerNavigation;
