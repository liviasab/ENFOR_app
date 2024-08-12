import { Text, View, StatusBar } from 'react-native';
import { 
  useFonts, 
  OpenSans_400Regular, 
  OpenSans_700Bold
} from "@expo-google-fonts/open-sans"


export default function App() {
  const [fontsLoaded] = useFonts({OpenSans_400Regular , OpenSans_700Bold})
  

  return (
    <View style={{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: "#12557B",
      }}
      >
      <StatusBar 
      barStyle="light-content" 
      backgroundColor="transparent"
      translucent
      />

      {fontsLoaded ? <Text>Home</Text> : <View/>}
    </View>
  );
}

