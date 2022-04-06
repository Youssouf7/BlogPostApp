// / Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native';
import {AuthContext} from '../context/AuthContextProvider';

const CustomSidebarMenu = props => {
  const {logout} = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const BASE_PATH =
    'https://media.gettyimages.com/vectors/male-avatar-icon-vector-id1331350914?s=2048x2048';
  //   const proileImage = "react_logo.png";

  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <Image source={{uri: BASE_PATH}} style={styles.sideMenuProfileIcon} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL('https://google.com/')}
        />
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://google.com/');
            }}>
            Rate Us
          </Text>
          <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
        </View>
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          marginTop: 10,
          backgroundColor: '#30887a',
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 5,
          borderColor: '#3eaa9b',
          borderWidth: 2,
          width: 200,
        }}
        onPress={() => {
          logout();
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Log Out</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey',
        }}>
        CSE 4637
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 30,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
