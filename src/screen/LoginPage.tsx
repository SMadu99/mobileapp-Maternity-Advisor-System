import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/base';

function LoginField(p: any) {
  const stack = p.stack;

  function gotoForgotPassword() {
    stack.navigate('userverify');
  }

  function goHome() {
    stack.navigate('midwifehome');
  }

  return (
    <View style={{flex: 1, position: 'absolute'}}>
      <View
        style={{
          backgroundColor: 'rgba(214, 182, 197, 0.70)',
          //height: '50%',
          borderRadius: 30,
          marginHorizontal: 28,
          marginTop: 140,
          position: 'absolute',

          marginBottom: 0,
          flex: 1,
        }}>
        <Text
          style={{
            paddingLeft: 130,
            paddingTop: 30,
            fontSize: 32,
            fontWeight: '700',
            color: '#000',
            marginBottom: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            marginHorizontal: 20,
            flex: 1.3,
            flexDirection: 'row',
          }}>
          <View style={{flex: 0.5}}>
            <Icon name={'person'} type={'ionicon'} style={{marginTop: 25}} />
          </View>

          <View
            style={{
              flex: 5,
              backgroundColor: '#fff',
              width: '50%',
              height: 40,
              marginLeft: 20,
              marginTop: 20,
              marginBottom: 20,
              borderRadius: 40,
              paddingHorizontal: 10,
            }}>
            <TextInput placeholder="Username" />
          </View>
        </View>
        <View
          style={{
            flex: 1.3,
            flexDirection: 'row',
            marginHorizontal: 20,
          }}>
          <View style={{flex: 0.5}}>
            <Icon name={'lock'} type={'entypo'} style={{marginTop: 10}} />
          </View>

          <View
            style={{
              flex: 5,
              backgroundColor: '#fff',
              width: '50%',
              height: 40,
              marginLeft: 20,
              borderRadius: 40,
              paddingHorizontal: 10,
              marginBottom: 30,
            }}>
            <TextInput placeholder="Password" secureTextEntry={true} />
          </View>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={goHome}
            style={{
              width: 250,
              backgroundColor: '#2F4858',
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 60,
              marginVertical: 10,
              borderRadius: 40,
            }}>
            <Text
              style={{
                width: 250,
                height: 40,
                backgroundColor: '#2F4858',
                fontWeight: '600',
                fontSize: 24,
                paddingLeft: 90,
                borderRadius: 40,
                color: '#fff',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <TouchableOpacity onPress={gotoForgotPassword}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 20,
                paddingLeft: 100,
                color: 'blue',
                marginTop: 20,
                marginBottom: 20,

                // position: 'absolute',
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const LoginPage = (props: any) => {
  const stack = props.navigation;
  return (
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
      <LoginField stack={stack} />
    </View>
  );
};

export default LoginPage;

const sty = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E9EAEE',
  },
});
