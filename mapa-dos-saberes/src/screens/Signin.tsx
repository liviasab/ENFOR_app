import { useState } from "react";
import {
  Heading,
  VStack,
  Image,
  View,
  Button,
  Text,
} from "@gluestack-ui/themed";
import auth from "@react-native-firebase/auth";
import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/input";
import { Alert } from "react-native"; // Importação correta do Alert

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password
      );
      // Usuário autenticado com sucesso
      console.log("Usuário logado:", userCredential.user);
      // Alerta com sucesso
      Alert.alert("Login", "Usuário autenticado com sucesso!");
    } catch (error) {
      console.error("Erro na autenticação:", error);
      // Alerta com erro
      Alert.alert(
        "Erro",
        "Não foi possível autenticar. Verifique suas credenciais."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <VStack flex={1} bg="#12557B" justifyContent="center" pt={210} pb={70}>
      <View
        style={{
          width: "100%",
          height: 620,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          overflow: "hidden",
        }}
      >
        <Image
          w="$full"
          h="100%"
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Fundo de telas"
          position="absolute"
        />
      </View>

      <View style={{ position: "absolute", top: 40, left: 20 }}>
        <Logo width={100} height={50} />
      </View>

      <View
        pb="$16"
        gap="$20"
        flex={1}
        px="$10"
        style={{
          position: "absolute",
          top: 105,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Heading color="#FFFFFF" fontSize={24}>
          Login
        </Heading>
        <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
      </View>

      <View
        pb="$16"
        flex={1}
        px="$10"
        style={{
          position: "absolute",
          top: 280,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View
        flex={1}
        px="$10"
        style={{
          position: "absolute",
          top: 400,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Button onPress={handleSignIn} bg="#40B873" isDisabled={loading}>
          <Text color="#FFFFFF">{loading ? "Entrando..." : "Enviar"}</Text>
        </Button>
      </View>
    </VStack>
  );
}
