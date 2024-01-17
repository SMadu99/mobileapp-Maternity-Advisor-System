import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Touchable,
} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';

function UserVerifyField(p: any) {
  const stack = p.stack;

  function goNewPassword() {
    stack.navigate('changepassword');
  }

  return (
    <View style={{flex: 1, position: 'absolute'}}>
      <View
        style={{
          backgroundColor: 'rgba(214, 182, 197, 0.70)',
          //height: '50%',
          borderRadius: 30,
          marginHorizontal: 30,
          marginTop: 140,
          position: 'absolute',
          maxWidth:500,
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
            marginBottom: 10,
            
          }}>
          New Password
        </Text>

        <View
          style={{
            marginHorizontal: 20,
            flex: 1.3,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Icon
              name={'person'}
              type={'ionicon'}
              style={{
                marginTop: 20,
              }}
            />
          </View>

          <View
            style={{
              flex: 5,
              backgroundColor: '#fff',
              //width: '50%',
              height: 40,
              marginLeft: 20,
              marginTop: 10,
              marginBottom: 20,
              borderRadius: 40,
              paddingHorizontal: 20,
              maxWidth:300
            }}>
            <TextInput placeholder="Username" />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#2F4858',
            width: '90%',
            height: 30,
            marginLeft: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              width: 250,
              height: 30,
              //backgroundColor: '#2F4858',
              fontWeight: '400',
              fontSize: 18,
              paddingLeft: 130,
              borderRadius: 40,
              color: '#fff',
            }}>
            OTP
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.50)',
            width: '90%',
            height: 130,
            marginLeft: 20,
            borderRadius: 10,
            ///paddingHorizontal: 10,
            marginBottom: 20,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'blue',
            }}></View>
          <View
            style={{
              flex: 1.2,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  flex: 1,
                }}>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 18,
                    color: '#000',
                    fontWeight: 'bold',
                  }}>
                  OTP
                </Text>
              </View>
              <View
                style={{
                  flex: 1.5,
                  backgroundColor: '#fff',
                  borderRadius: 40,
                  paddingLeft: 10,
                  marginBottom: 5,
                }}>
                <TextInput placeholder="OTP Code" />
              </View>
            </View>
            <View
              style={{
                flex: 0.5,
              }}>
              <View
                style={{
                  flex: 1,
                }}></View>

              <View
                style={{
                  backgroundColor: '#2F4858',
                  flex: 1.2,
                  borderRadius: 40,
                  justifyContent: 'center',
                  marginBottom: 10,
                  marginLeft: 10,
                }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      paddingLeft: 40,
                      fontSize: 18,
                      color: '#fff',
                    }}>
                    Request OTP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{flex: 1, marginBottom: 20}}>
          <TouchableOpacity
            onPress={goNewPassword}
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
              Verify
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const UserVerify = (props: any) => {
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
      <UserVerifyField stack={stack} />
    </View>
  );
};

export default UserVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E9EAEE',
  },
});
