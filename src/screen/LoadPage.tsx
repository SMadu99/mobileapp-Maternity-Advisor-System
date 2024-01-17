import {Image, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React from 'react';
//import { Style } from '@mui/icons-material';


const LoadPage = (props:any) => {
  const stack = props.navigation;

  function goLogin(){
    stack.navigate('loginpage');
  }

  return (
    <View style={sty.container}>
      <Text
        style={{
          color: '#000',
          fontFamily: 'Inika',
          fontSize: 32,
          fontWeight: '700',
          lineHeight: 50,
          marginLeft: 15,
          marginTop: 27,
        }}>
        {'MATERNITY\nADVISOR\nSYSTEM'}
      </Text>
      <Text
        style={{
          color: '#000',
          fontSize: 18,
          fontWeight: '600',
          lineHeight: 23,
          marginLeft: 15,
          marginTop: 50,
        }}>
        {
          'Explore our Maternal and Baby Care System \nyour all-in-one solution for \npersonalized guidance, health tracking, \nand a supportive community. Join us on \nthis comprehensive journey for you and \nyour little one!'
        }
      </Text>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            //position: 'absolute',
          }}
          source={require('../assests/images/img1.png')}
        />
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '50%',
          borderRadius: 40,
          position: 'absolute',
          backgroundColor: 'rgba(255, 255, 255, 0.30)',
          marginTop: 610,
        }}></View>
      <Text
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          borderRadius: 40,
          position: 'absolute',
          marginTop: 645,
          marginLeft: 70,
          color: '#000',
          fontSize: 24,
          fontWeight: '800',
        }}>
        ENJOY YOUR JOURNEY!
      </Text>
      
      <TouchableOpacity  onPress={goLogin} style={{
        flexDirection: 'row', 
        height: 40,
        width:70 , 
        backgroundColor: '#FDD7DB',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 700,
        marginLeft:160,
        position:'absolute',
        borderRadius:40,
        
      }}>
        <Text style={{
          width: 70,
          height: 40,
          backgroundColor: '#FDD7DB',
          margin: 50,
          fontWeight: '600',
          fontSize: 24,
          paddingLeft:18,
          paddingTop:3,
          borderRadius:40,
          
        }}>GO</Text>
      </TouchableOpacity>
       
    </View>
  );
};

export default LoadPage;

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EAEE',
  },
});
