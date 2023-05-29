import { Button, Flex, FormControl, FormLabel, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import '@fontsource/teko';

function App() {
  const [name, setName] = useState('Opcional');
  const [email, setEmail] = useState('Opcional');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleName = (event) => setName(event.target.value)
  const handleEmail = (event) => setEmail(event.target.value)
  const handleAssunto = (event) => setAssunto(event.target.value)
  const handleMensChange = (event) => setMensagem(event.target.value)

  return (
    <>
      <Flex
        direction="column"
        align="center"
        justify="flex-start"
        bgColor="gray.100"
        w='100%'
        h='100vh'
        gap={2}
        p={2}
        overflow="scroll"
      >
        <Flex align="baseline" gap={2} flexWrap='wrap' width="100%" justify="center">
          <Heading as='h1' size='4xl' color="blue.700">
            DOVALE
          </Heading>
          <Heading as="b" fontSize="3xl" color="orange.500" noOfLines={1}>
            Escuta Segura
          </Heading>
        </Flex>

        <Text
          fontSize={['sm', 'md', 'lg']}
          textAlign="center"
          mb={2}
          maxWidth='3xl'
        >
          Seja bem vindo ao canal de Denúncias da empresa DOVALE CHAVES, a confiança é um fator chave para a empresa que presa por relacionamentos duradouros com os colaboradores. Aqui é um local anônimo e seguro para recebimento de denúncias,  se tiver algo a dizer preencha o formulário abaixo:
        </Text>

        <Flex w={[250, 300, 350, 400, 500]} direction="column" gap={3}>
          <FormControl>
            <FormLabel>Nome: <Text as="i" color="gray.600">{name}</Text></FormLabel>
            <Input type='text' variant='outline' bgColor='white' onChange={handleName} />
          </FormControl>

          <FormControl>
            <FormLabel>E-mail: <Text as="i" color="gray.600">{email}</Text></FormLabel>
            <Input type='email' variant='outline' bgColor='white' onChange={handleEmail} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Assunto:</FormLabel>
            <Input type='text' value={assunto} variant='outline' bgColor='white' onChange={handleAssunto} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Mensagem:</FormLabel>
            <Textarea value={mensagem} onChange={handleMensChange} bgColor='white' placeholder='Escreva sua mensagem aqui' size='sm' borderRadius='md' />
          </FormControl>

          <Button colorScheme="blue" mt={4} size="lg">Enviar</Button>

        </Flex>
      </Flex>
    </>
  )
}

export default App
