import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigation from './HomeNavigation';
import {Entypo} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomSidebarMenu from '../home/CustomSidebarMenu';

const Drawer = createDrawerNavigator();
const DrawerNavigation = ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerContent={CustomSidebarMenu}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#30887a',
        },
        headerTitleStyle: {
          alignSelf: 'center',
          color: 'white',
        },
        headerTintColor: 'white',
        headerRight: () => {
          return <Icon name="lock" size={20} color="#30887a" />;
        },
      }}>
      <Drawer.Screen name="BlogPosts" component={HomeNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
