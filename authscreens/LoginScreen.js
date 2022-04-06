import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../context/AuthContextProvider';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useContext(AuthContext);

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View
        style={{
          height: '30%',
          padding: 10,
          backgroundColor: '#30887a',
        }}>
        <Text
          style={{
            marginTop: 60,
            marginLeft: 15,
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Welcome!
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 30,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          position: 'relative',
          top: -20,
          backgroundColor: 'white',
        }}>
        <View style={styles.passwordContainer}>
          <Icon name="envelope" size={20} color="#30887a" />
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            placeholder="Email"
            onChangeText={value => {
              setUsername(value);
            }}
          />
          <Icon name="check-circle" size={20} color="#30887a" />
        </View>
        <View style={styles.passwordContainer}>
          {/* <AntDesign name="lock" size={20} color="#30887a" /> */}
          <Icon name="lock" size={26} color="#30887a" />
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={value => {
              setPassword(value);
            }}
          />
          <Icon name="info-circle" size={20} color="#30887a" />
        </View>
        <TouchableOpacity>
          <Text
            style={{color: '#3eaa9b', fontWeight: 'bold', marginBottom: 10}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: '#3eaa9b',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
          onPress={() => {
            login(username, password);
          }}>
          <Text
            style={{
              paddingVertical: 5,
              color: 'white',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: 'white',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 5,
            borderColor: '#3eaa9b',
            borderWidth: 2,
          }}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text
            style={{
              paddingVertical: 5,
              color: '#3eaa9b',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 10,
  },
});

export default LoginScreen;
