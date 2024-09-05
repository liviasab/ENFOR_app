import { useState } from 'react';
import { Heading, VStack, Image, View, Button, Text } from "@gluestack-ui/themed";
import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/input";
import { auth } from '../../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('Login Efetuado...');
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessege = error.message;
      alert(errorMessege); 
    })
    
  };


  return (
    <VStack flex={1} bg="#12557B" justifyContent="center" pt={210} pb={70}>
      <View
        style={{
          width: '100%',
          height: 620,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          overflow: 'hidden',
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
     
      <View style={{ position: 'absolute', top: 40, left: 20 }}>
        <Logo width={100} height={50} />
      </View>


      <View pb="$16" gap="$20" flex={1} px="$10" style={{ position: 'absolute', top: 105, width: '100%', alignItems: 'center' }}>
        <Heading color="#FFFFFF" fontSize={24}>
          Login
        </Heading>
        <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
      </View>


      <View pb="$16" flex={1} px="$10" style={{ position: 'absolute', top: 280, width: '100%', alignItems: 'center' }}>
        <Input placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
      </View>


      <View flex={1} px="$10" style={{ position: 'absolute', top: 400, width: '100%', alignItems: 'center' }}>
        <Button onPress={handleSignIn} bg="#40B873">
          <Text color="#FFFFFF">Enviar</Text>
        </Button>
      </View>
    </VStack>
  );
}
