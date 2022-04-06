import 'react-native-gesture-handler';
import React from 'react';
import AuthContextProvider from './context/AuthContextProvider';
import NavRoute from './navigation/NavRoute';

const App = () => {
  return (
    <AuthContextProvider>
      <NavRoute />
    </AuthContextProvider>
  );
};

export default App;
