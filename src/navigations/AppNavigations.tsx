import 'react-native-gesture-handler';
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
import {View, Text, Button, DrawerLayoutAndroid, Image, TouchableOpacity} from 'react-native';
import Register from '../screen/Midwife/Register';
import ViewDetails from '../screen/Midwife/ViewDetails';
import Summary from '../screen/Midwife/Summary';
import { useRef, useState } from 'react';

const Stack = createStackNavigator();


function DrawerRoutes(props:any) {
  const stack = props.navigation;
  function goPersonal() {
    stack.navigate('personal');
  }
  function goRegister() {
    stack.navigate('regitser');
  }
  function goView() {
    stack.navigate('viewdetails');
  }
  function goClinic() {
    stack.navigate('clinicschedule');
  }
  function goSummary() {
    stack.navigate('summary');
  }

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
      



        <View style={{flex: 1}}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          resizeMode: 'cover',
        }}
        source={require('../assests/images/login.png')}
      />
      <View style={{
        flex:1,flexDirection:'row'
      }}>
        <View style={{flex:1,backgroundColor:'yellow'}}></View>
        <View style={{flex:2,backgroundColor:'red'}}></View>
      </View>
      <View style={{
        flex:7
      }}>
      <View
        style={{
          backgroundColor: 'rgba(214, 182, 197, 0.70)',
          height: 400,
          width:370,
          borderRadius: 30,
          marginHorizontal: 28,
          marginTop: 60,
          position: 'absolute',
           marginBottom: 0,
          flex: 1,
        }}>

          <View style={{
        flex:1,flexDirection:'row'
      }}>
        <View style={{flex:1,}}>
          <TouchableOpacity onPress={goPersonal}>
          <View style={{
            width:80,
            height:80,
            backgroundColor:'#fff',
            marginTop:10,
            marginLeft:50,
            alignItems:'center',
            borderRadius:10          }}>
              <Image style={{
                 width: '80%',
                 height: '80%',
                 position: 'absolute',
                 resizeMode: 'cover',
                 marginTop:8,
                 
                 
        }}
        source={require('../assests/images/personal.png')}/>
              
            </View>
            <Text style={{
              fontWeight:'bold',
              fontSize:18,
              marginTop:10,
              marginLeft:10
              
            }}>Personal Information</Text></TouchableOpacity>
        </View>
        <View style={{flex:1,alignItems:'center',}}>
          <TouchableOpacity onPress={goRegister}>
        <View style={{
            width:80,
            height:80,
            backgroundColor:'#fff',
            marginTop:10,
            alignItems:'center',
            borderRadius:10
                     }}>
              
                <Image style={{
                 width: '80%',
                 height: '80%',
                 position: 'absolute',
                 resizeMode: 'cover',
                 marginTop:8
                 
        }}
        source={require('../assests/images/register.png')}/>
              
            </View>
            <Text style={{
              fontWeight:'bold',
              fontSize:18,
              marginTop:10,
              marginLeft:5
            }}>Register</Text></TouchableOpacity>
        </View>
      </View>
      <View style={{
        flex:1,flexDirection:'row'
      }}>
        <View style={{flex:1,}}>
        <TouchableOpacity onPress={goView}>
        <View style={{
            width:80,
            height:80,
            backgroundColor:'#fff',
            marginTop:10,
            alignItems:'center',
            marginLeft:50,
            borderRadius:10
                     }}>
                      <Image style={{
                 width: '80%',
                 height: '80%',
                 position: 'absolute',
                 resizeMode: 'cover',
                 marginTop:8,
                 
                 
        }}
        source={require('../assests/images/view.png')}/>
                     </View>
            <Text style={{
              fontWeight:'bold',
              fontSize:18,
              marginTop:10,
              paddingLeft:70
            }}>View</Text></TouchableOpacity>
        </View>
        <View style={{flex:1,}}>
          <TouchableOpacity onPress={goClinic}>
        <View style={{
            width:80,
            height:80,
            backgroundColor:'#fff',
            marginTop:10,
            marginLeft:50,
            alignItems:'center',
            borderRadius:10          }}><Image style={{
              width: '80%',
              height: '80%',
              position: 'absolute',
              resizeMode: 'cover',
              marginTop:8
              
     }}
     source={require('../assests/images/clinic.png')}/></View>
            <Text style={{
              fontWeight:'bold',
              fontSize:18,
              marginTop:10,
              marginLeft:30,
            }}>Clinic Schedule</Text></TouchableOpacity>
        </View>
      </View>
      <View style={{
        flex:1,flexDirection:'row'
      }}>
        <View style={{flex:1,}}>
          <TouchableOpacity onPress={goSummary}>
        <View style={{
            width:80,
            height:80,
            backgroundColor:'#fff',
            marginTop:10,
            marginLeft:50,
            alignItems:'center',
            borderRadius:10          }}><Image style={{
              width: '80%',
              height: '80%',
              position: 'absolute',
              resizeMode: 'cover',
              marginTop:8
              
     }}
     source={require('../assests/images/summary.png')}/></View>
            <Text style={{
              fontWeight:'bold',
              fontSize:18,
              marginTop:10,
              marginLeft:50
            }}>Summary</Text></TouchableOpacity>
        </View>
        <View style={{flex:1,}}>
          <TouchableOpacity>
        <View style={{
            width:80,
            height:80,
            backgroundColor:'#fff',
            marginTop:10,
            marginLeft:50,
            alignItems:'center',
            borderRadius:10          }}><Image style={{
              width: '80%',
              height: '80%',
              position: 'absolute',
              resizeMode: 'cover',
              marginTop:8
              
     }}
     source={require('../assests/images/register.png')}/></View>
            <Text style={{
              fontWeight:'bold',
              fontSize:18,
              marginTop:10,
              marginLeft:50
            }}>Shanilka</Text></TouchableOpacity>
        </View>
      </View>

        </View>
        </View>


    </View>





      <View >
        <Button
          title="Open drawer"
          onPress={() => drawer.current?.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
}
const AppNavigations = () => {
  
  
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
          component={DrawerRoutes}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="personal"
          component={Personal}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
       
      </Stack.Navigator>
    
  );
};

export default AppNavigations;
function navigate(arg0: string) {
  throw new Error('Function not implemented.');
}

