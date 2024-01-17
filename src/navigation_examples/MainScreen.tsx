import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'

const MainScreen = (props:any) => {
    const stack =props.navigation;

    function gotoA(){
        stack.navigate('A');

    }

    function gotoB(){
        stack.navigate('B');
        
    }

  return (
    <View>
      <Text style={{marginTop:10,marginBottom:20,fontSize:32,marginHorizontal:100}}>Main Screen</Text>
      <Button onPress={gotoA} title='Go to screen A'/>
      <Text style={{marginTop:10,marginBottom:20}}>Shanilka Madushan</Text>
      <Button onPress={gotoB} title='Go to screen B'/>
    </View>
  )
}

export default MainScreen

