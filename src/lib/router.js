import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import HomeScreen from "../screens/home";
import ProfileScreen from "../screens/profile";

const AppNavigator = createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: 'red'
      }
    },
  }
)
export default createAppContainer(AppNavigator);