import 'react-native-gesture-handler';
import AppNavigations from './src/navigations/AppNavigations';
import {NavigationContainer} from '@react-navigation/native';



function App(): React.JSX.Element {
  return (
    <NavigationContainer>
   <AppNavigations/>
   
  </NavigationContainer>
  );
}

export default App;   


/*
import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from 'react-native';

const App = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  

  const navigationView = () => (
    <View style={{backgroundColor: '#ecf0f1',}}>
      <Text style={{padding: 16,
    fontSize: 15,
    textAlign: 'center',}}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      //drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View >
        <Button
          title="Open drawer"
          onPress={() => drawer.current?.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};



export default App;

*/