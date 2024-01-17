import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import LoadPage from '../screen/LoadPage';
import LoginPage from '../screen/LoginPage';
import ChangePassword from '../screen/ChangePassword';
import UserVerify from '../screen/UserVerify';
import MidWifeHome from '../screen/MidWifeHome';

const AppNavigations = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="loadpage" component={LoadPage} />
        <Stack.Screen
          name="loginpage"
          component={LoginPage}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="userverify"
          component={UserVerify}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="changepassword"
          component={ChangePassword}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="midwifehome"
          component={MidWifeHome}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigations;
