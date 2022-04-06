import React from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';

const SplashScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View
        style={{
          height: '70%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#30887a',
        }}>
        <Image
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            backgroundColor: '#30887a',
          }}
          source={require('./../assets/logo.png')}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 30,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          position: 'relative',
          top: -20,
          zIndex: 1,
          backgroundColor: 'white',
        }}>
        <Text style={{color: '#334850', fontWeight: 'bold', fontSize: 25}}>
          Stay connected with{'\n'}everyone
        </Text>
        <Text style={{color: '#afafaf'}}>Sign in with account</Text>
        <TouchableOpacity
          style={{
            marginTop: 10,
            alignSelf: 'flex-end',
            backgroundColor: '#3eaa9b',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 15,
          }}
          onPress={() => {
            navigation.navigate('Login');
            // console.log('clicked well');
          }}>
          <Text style={{color: 'white'}}>Get Started {'>'} </Text>
        </TouchableOpacity>
      </View>
      <StatusBar hidden />
    </View>
  );
};

export default SplashScreen;
