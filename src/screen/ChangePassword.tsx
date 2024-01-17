import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';

function ChangePasswordField() {
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
            paddingLeft: 80,
            paddingTop: 30,
            fontSize: 32,
            fontWeight: '700',
            color: '#000',
            marginBottom: 30,
          }}>
          New Password
        </Text>

        <View
          style={{
            backgroundColor: '#fff',
            width: '80%',
            height: 40,
            marginLeft: 40,
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 40,
            paddingHorizontal: 10,
          }}>
          <TextInput placeholder="New Password" secureTextEntry={true} />
        </View>

        <View
          style={{
            flex: 5,
            backgroundColor: '#fff',
            width: '80%',
            height: 40,
            marginLeft: 40,
            borderRadius: 40,
            paddingHorizontal: 10,
            marginBottom: 30,
          }}>
          <TextInput placeholder="Confirm Password" secureTextEntry={true} />
        </View>

        <View style={{flex: 1, marginBottom: 20}}>
          <TouchableOpacity
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
              Confirm 
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const ChangePassword = () => {
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
      <ChangePasswordField />
    </View>
  );
};
export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E9EAEE',
  },
});
