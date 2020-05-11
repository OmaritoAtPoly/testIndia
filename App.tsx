import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { navigator } from './src/route';

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
