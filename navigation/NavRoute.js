import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../context/AuthContextProvider';
import AuthNavigation from './AuthNavigation';
import DrawerNavigation from './DrawerNavigation';

const NavRoute = () => {
  const {user} = useContext(AuthContext);

  console.log('Hello this is weird');
  return (
    <NavigationContainer>
      {user ? <DrawerNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default NavRoute;
