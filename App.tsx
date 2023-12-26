import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import { StackNavigator } from './src/navigator/StackNavigator';

 const App = () => {
  return (
    <NavigationContainer>
      {/* <Text>App Screen</Text> */}
      <StackNavigator/>

      {/* <MenuLateralBasico/> */}
    </NavigationContainer>
  );
};


export default App;