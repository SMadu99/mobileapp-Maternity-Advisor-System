import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from './MainScreen';
import ScreenA from './ScreenA';
import Screen2 from './Screen2';
import { createDrawerNavigator } from '@react-navigation/drawer';


function Navigation(){
  const Stack = createStackNavigator();
  return (
   
         <Stack.Navigator>
             <Stack.Screen name='Main' component={MainScreen}/>
             <Stack.Screen name='A' component={ScreenA}/>
             <Stack.Screen name='B' component={Screen2}/>
         </Stack.Navigator>
    
   )
 }

const Navigate = () => {
  const Drawer = createDrawerNavigator();
  return (
   <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name='Main' component={MainScreen}/>
            <Drawer.Screen name='A' component={ScreenA}/>
            <Drawer.Screen name='B' component={Screen2}/>
        </Drawer.Navigator>
   </NavigationContainer>
  )
}

export default Navigate