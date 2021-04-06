import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
//Navigation
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

//StackNavigation
import AccountNavigation from './accountNavigation';
import ListingNavigation from './listingNavigation';
import PlannerNavigation from './plannerNavigation';

//Screen
import HeatMapScreen from '../screens/heatMapScreen';

//config
import color from '../config/color';

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: color.primary,
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Map"
        component={HeatMapScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={ListingNavigation}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Planner"
        component={PlannerNavigation}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="list-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
