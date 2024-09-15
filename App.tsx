import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { slate, white } from 'tailwindcss/colors';
import routes from './src/routes';
import { getTamanhoFontBase } from './src/components/Texto';
import MainStack from './src/routes/MainStack';


const Stack = createNativeStackNavigator();
const globalTheme = DefaultTheme;
globalTheme.colors.background = white;

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={globalTheme}>
            <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
