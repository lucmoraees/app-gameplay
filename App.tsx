import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

import Background from './src/components/Background';
import Routes from './src/routes';
import { AuthProvider } from './src/hook/auth';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

const App = () => {
  const [foontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!foontsLoaded) {
    return <AppLoading/ >
  }

  return(
    <Background>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider >
        <Routes />
      </AuthProvider>
    </Background>
  );
};

export default App;
