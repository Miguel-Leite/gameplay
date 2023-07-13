import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] =useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <GestureHandlerRootView style={{flex: 1}}>

        <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </GestureHandlerRootView>
    </Background>
  );
}