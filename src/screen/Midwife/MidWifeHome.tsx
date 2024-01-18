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

const MidWifeHome = () => {
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
        <View style={{flex:1,backgroundColor:'yellow',alignItems:'center'}}>
          <View style={{
            width:80,
            height:80,
            backgroundColor:'#fff',
            marginTop:10,
            alignItems:'center',
            borderRadius:10          }}>
              <Image style={{
                 width: '80%',
                 height: '80%',
                 position: 'absolute',
                 resizeMode: 'cover',
                 marginTop:8
                 
        }}
        source={require('../../assests/images/personal.png')}/>
              <View style={{}}></View>
            </View>
            <Text style={{
              fontWeight:'bold',
              fontSize:18,
              marginTop:10
              
            }}>Personal Information</Text>
        </View>
        <View style={{flex:1,backgroundColor:'red',alignItems:'center',}}>
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
              marginTop:10
            }}>Register</Text>
        </View>
      </View>
      <View style={{
        flex:1,flexDirection:'row'
      }}>
        <View style={{flex:1,backgroundColor:'red',alignItems:'center'}}>
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
        source={require('../../assests/images/view.png')}/>
                     </View>
            <Text style={{
              fontWeight:'bold',
              fontSize:18,
              marginTop:10
            }}>View</Text>
        </View>
        <View style={{flex:1,backgroundColor:'yellow',alignItems:'center'}}>
        <View style={{
            width:80,
            height:80,
            backgroundColor:'#fff',
            marginTop:10,
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
              marginTop:10
            }}>Clinic Schedule</Text>
        </View>
      </View>
      <View style={{
        flex:1,flexDirection:'row'
      }}>
        <View style={{flex:1,backgroundColor:'yellow',alignItems:'center'}}>
        <View style={{
            width:80,
            height:80,
            backgroundColor:'#fff',
            marginTop:10,
            alignItems:'center',
            borderRadius:10          }}><Image style={{
              width: '80%',
              height: '80%',
              position: 'absolute',
              resizeMode: 'cover',
              marginTop:8
              
     }}
     source={require('../../assests/images/summary.png')}/></View>
            <Text>Shanilka</Text>
        </View>
        <View style={{flex:1,backgroundColor:'red',alignItems:'center'}}>
        <View style={{
            width:80,
            height:80,
            backgroundColor:'#fff',
            marginTop:10,
            alignItems:'center',
            borderRadius:10          }}><Image style={{
              width: '80%',
              height: '80%',
              position: 'absolute',
              resizeMode: 'cover',
              marginTop:8
              
     }}
     source={require('../../assests/images/register.png')}/></View>
            <Text>Shanilka </Text>
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
