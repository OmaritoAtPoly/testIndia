import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { navigator } from './src/route';
import { theme } from './src/theme';

const App = () => {
  return (
    <>
      <NavigationContainer>

        <PaperProvider
          theme={theme}
          settings={{
            icon: props => <MaterialIcons {...props} />,
          }}
        >
          {navigator}
        </PaperProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
