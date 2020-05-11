import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Main } from './src/container/index'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = createStackNavigator();

export const navigator = (

  <StackNavigator.Navigator>
    <StackNavigator.Screen
      name="main"
      component={Main}
      options={{ headerShown: false }}
    />
  </StackNavigator.Navigator>
)


const App = () => {
  return (
    <>
      <Text>Asio</Text>
      {/* <NavigationContainer>
        {navigator}
      </NavigationContainer> */}
    </>
  );
};

export default App;
