import { Flex, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import '@fontsource/teko';

function App() {
  const [name, setName] = useState('Opcional');

  const handleName = (event) => setName(event.target.value)

  return (
    <>
      <Flex
        direction="column"
        align="center"
        justify="flex-start"
        bgColor="gray.100"
        w='100%'
        h='100vh'
      >
        <Flex
          maxWidth="3xl"
          direction="column"
          align="center"
          justify="center"
          gap={5}
          p={2}
        >

          <Flex align="baseline" gap={2}>
            <Heading as='h1' size='4xl' my={4} color="blue.700">
              DOVALE
            </Heading>
            <Heading as="b" fontSize="3xl" color="orange.500">
              Escuta Segura
            </Heading>
          </Flex>

          <Text
            fontSize={['sm', 'md', 'lg', 'xl']}
            textAlign="center"
          >
            Seja bem vindo ao canal de Denúncias da empresa DOVALE CHAVES, a confiança é um fator chave para a empresa que presa por relacionamentos duradouros com os colaboradores. Aqui é um local anônimo e seguro para recebimento de denúncias,  se tiver algo a dizer preencha o formulário abaixo:
          </Text>

          <Flex minWidth='25em' maxWidth='lg' direction="column">
            <FormControl>
              <FormLabel>Nome: {name} </FormLabel>
              <Input type='text' variant='outline' bgColor='white' onChange={handleName} />
            </FormControl>
          </Flex>

        </Flex>
      </Flex>
    </>
  )
}

export default App
