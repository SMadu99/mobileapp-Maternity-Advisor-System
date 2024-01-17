import 'react-native-gesture-handler';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LoadPage from './src/screen/LoadPage';
import LoginPage from './src/screen/LoginPage';
import ChangePassword from './src/screen/ChangePassword';
import UserVerify from './src/screen/UserVerify';
import AppNavigations from './src/navigations/AppNavigations';
import MainScreen from './src/navigation_examples/MainScreen';
import Navigate from './src/navigation_examples/Navigate';
import MenuNavigations from './src/navigations/MenuNavigator';
import MenuNavigator from './src/navigations/MenuNavigator';

function App(): React.JSX.Element {
  return (
    <AppNavigations />
    //<MainScreen/>
    //<Navigate />
    //<MenuNavigator/>

);
};




export default App;

