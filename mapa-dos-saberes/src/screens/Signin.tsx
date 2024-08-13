import { Heading, VStack, Image, View, Center, Text } from "@gluestack-ui/themed";
import BackgroundImg from "@assets/background.png";

import Logo from "@assets/logo.svg"
import { Input } from "@components/input"


export function SignIn() {
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

        <View pb="$16" gap="$20"flex={1} px="$10" style={{ position: 'absolute', top: 105, width: '100%', alignItems: 'center' }}>
        <Heading  color="#FFFFFF" fontSize={24}>
          Informações pessoais
        </Heading>
        <Input placeholder="E-mail" />
        </View>
        <View pb="$16" flex={1} px="$10" style={{ position: 'absolute', top: 280, width: '100%', alignItems: 'center' }}>
        <Input placeholder="Nome" />
        </View>
        <View pb="$16" flex={1} px="$10" style={{ position: 'absolute', top: 340, width: '100%', alignItems: 'center' }}>
        <Input placeholder="Título do plano de atividades" />
        </View>
        <View pb="$16" flex={1} px="$10" style={{ position: 'absolute', top: 400, width: '100%', alignItems: 'center' }}>
        <Input placeholder="Campus de origem"/>
        </View>
        <View pb="$16" flex={1} px="$10" style={{ position: 'absolute', top: 460, width: '100%', alignItems: 'center' }}>
        <Input placeholder="Matrícula"/>
        </View> 



    </VStack>
  );
}
