import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'

const ScreenA = (p:any) => {
    
    function goBack(){
        p.navigation.goBack();
    }
    function goA(){
        p.navigation.navigate('B');
    }

    return (
    <View>
      <Text style={{fontSize:40,marginLeft:100}}>Screen A</Text>
      <Button onPress={goBack} title={'Go Back'} />
      <Text style={{fontSize:40,marginLeft:100,marginBottom:20,marginTop:20}}>Madushan</Text>
      <Button onPress={goA} title={'Go B'} />
    </View>
  )
}

export default ScreenA