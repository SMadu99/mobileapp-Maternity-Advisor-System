import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from './MainScreen';
import ScreenA from './ScreenA';
import Screen2 from './Screen2';

const Stack = createStackNavigator();

const Navigate = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Main' component={MainScreen}/>
            <Stack.Screen name='A' component={ScreenA}/>
            <Stack.Screen name='B' component={Screen2}/>
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigate