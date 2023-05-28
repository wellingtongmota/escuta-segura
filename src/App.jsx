import { Flex, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import '@fontsource/teko';

function App() {
  const [name, setName] = useState('Opcional');
  const [email, setEmail] = useState('Opcional');
  const [assunto, setAssunto] = useState('');

  const handleName = (event) => setName(event.target.value)
  const handleEmail = (event) => setEmail(event.target.value)
  const handleAssunto = (event) => setAssunto(event.target.value)

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
          gap={2}
          p={2}
        >

          <Flex align="baseline" gap={2} flexWrap>
            <Heading as='h1' size='4xl' my={2} color="blue.700">
              DOVALE
            </Heading>
            <Heading as="b" fontSize="3xl" color="orange.500">
              Escuta Segura
            </Heading>
          </Flex>

          <Text
            fontSize={['sm', 'md', 'lg']}
            textAlign="center"
            mb={2}
          >
            Seja bem vindo ao canal de Denúncias da empresa DOVALE CHAVES, a confiança é um fator chave para a empresa que presa por relacionamentos duradouros com os colaboradores. Aqui é um local anônimo e seguro para recebimento de denúncias,  se tiver algo a dizer preencha o formulário abaixo:
          </Text>

          <Flex minWidth='25em' maxWidth='lg' direction="column" gap={3}>
            <FormControl>
              <FormLabel>Nome: <Text as="i" color="gray.600">{name}</Text></FormLabel>
              <Input type='text' variant='outline' bgColor='white' onChange={handleName} />
            </FormControl>

            <FormControl>
              <FormLabel>E-mail: <Text as="i" color="gray.600">{email}</Text></FormLabel>
              <Input type='email' variant='outline' bgColor='white' onChange={handleEmail} />
            </FormControl>

            <FormControl>
              <FormLabel>Assunto:</FormLabel>
              <Input type='text' value={assunto} variant='outline' bgColor='white' onChange={handleAssunto} />
            </FormControl>

          </Flex>

        </Flex>
      </Flex>
    </>
  )
}

export default App
