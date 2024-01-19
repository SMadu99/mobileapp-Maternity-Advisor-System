//import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import LoadPage from '../screen/LoadPage';
import LoginPage from '../screen/LoginPage';
import ChangePassword from '../screen/ChangePassword';
import UserVerify from '../screen/UserVerify';
import MidWifeHome from '../screen/Midwife/MidWifeHome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Personal from '../screen/Midwife/Personal';
import {View, Text, Button, DrawerLayoutAndroid} from 'react-native';
import Summary from '../screen/Midwife/Summary';
import CliniSchedule from '../screen/Midwife/CliniSchedule';
import ViewDetails from '../screen/Midwife/ViewDetails';
import Register from '../screen/Midwife/Register';


const AppNavigations = () => {
 
  const Stack = createStackNavigator();
  return (
    
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
    
  );
};

export default AppNavigations;
