

import { StatusBar } from 'react-native';
import { 
  useFonts, 
  OpenSans_400Regular, 
  OpenSans_700Bold
} from "@expo-google-fonts/open-sans"
import {GluestackUIProvider, Text, Center} from "@gluestack-ui/themed"

import { config } from "@gluestack-ui/config";

import { Loading } from '@components/Loading';

import { SignIn } from '@screens/Signin';



 
export default function App() {
  const [fontsLoaded] = useFonts({OpenSans_400Regular , OpenSans_700Bold})
  

  return (
    <GluestackUIProvider config={config}>
    
      <StatusBar 
      barStyle="light-content" 
      backgroundColor="transparent"
      translucent
      />

      {fontsLoaded ? <SignIn /> : <Loading /> }
    
    </GluestackUIProvider>
  )
}

