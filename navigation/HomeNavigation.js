import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../home/HomeScreen';
import Notifications from '../home/Notifications';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Entypo } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator barStyle={{backgroundColor: '#30887a'}} activeColor="white">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name="home" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name="bell" size={24} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
