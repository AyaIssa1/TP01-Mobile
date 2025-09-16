import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/context/ThemeContext';
import { useFonts,Comfortaa_700Bold, Comfortaa_600SemiBold } from '@expo-google-fonts/comfortaa';

export default function App() {

  const [fontsLoaded] = useFonts({
    Comfortaa_700Bold,
    Comfortaa_600SemiBold,
  });

  return (
    <ThemeProvider >
    <NavigationContainer >
        <AppNavigator />
    </NavigationContainer>
    </ThemeProvider>
  );
}


