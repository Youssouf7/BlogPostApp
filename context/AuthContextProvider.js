import React, {createContext, useState, useEffect} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  function login(username, password) {
    auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        Alert.alert('Logged in succesfully');
      })
      .catch(error => {
        console.error(error);
      });
  }

  function logout() {
    auth()
      .signOut()
      .then(() => {})
      .catch(error => console.error(error));
  }

  function signup(name, sid, username, password) {
    auth()
      .createUserWithEmailAndPassword(username, password)
      .then(() => {
        firebase.auth().currentUser.updateProfile({
          displayName: name,
        });

        Alert.alert('New User created');
      })
      .catch(error => console.error(error));

    firestore().collection('Users').add({
      name: name,
      student_id: sid,
      email: username,
    });
  }

  function updateUser(user) {
    setUser(user);
  }

  useEffect(() => {
    // const unsubsribe = auth().onAuthStateChanged(updateUser);
    const unsubsribe = auth().onUserChanged(updateUser);
    return unsubsribe;
  }, []);

  return (
    <AuthContext.Provider value={{user, initializing, login, logout, signup}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
