import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { Main } from './src/container/index';
import { Article } from './src/container/article';

const StackNavigator = createStackNavigator();

export const navigator = (

  <StackNavigator.Navigator>
    <StackNavigator.Screen
      name="main"
      component={Main}
      options={{ headerShown: false }}
    />
    <StackNavigator.Screen
      name="article"
      component={Article}
      options={{ headerShown: false }}
    />
  </StackNavigator.Navigator>
)


const App = () => {
  return (
    <>
      <NavigationContainer>
        {navigator}
      </NavigationContainer>
    </>
  );
};

export default App;
