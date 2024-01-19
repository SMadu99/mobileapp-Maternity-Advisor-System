import {
  View,
  Text,
  Button,
  DrawerLayoutAndroid,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const MidWifeHome = (props:any) => {
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

  return (

    

    


    <View style={{flex: 1}}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          resizeMode: 'cover',
        }}
        source={require('../../assests/images/login.png')}
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
        source={require('../../assests/images/personal.png')}/>
              
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
        source={require('../../assests/images/register.png')}/>
              
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
        source={require('../../assests/images/view.png')}/>
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
     source={require('../../assests/images/clinic.png')}/></View>
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
     source={require('../../assests/images/summary.png')}/></View>
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
     source={require('../../assests/images/register.png')}/></View>
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
   
);
}
 


export default MidWifeHome;

const sty = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E9EAEE',
  },
});
