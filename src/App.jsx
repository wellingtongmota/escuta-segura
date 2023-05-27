import { Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"

function App() {

  return (
    <>
      <Flex
        direction="column"
        align="center"
        justify="center"
        bgColor="gray.50"
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
          <Text
            fontSize={['sm', 'md', 'lg', 'xl']}
            textAlign="center"
          >
            Seja bem vindo ao canal de Denúncias da empresa DOVALE CHAVES, a confiança é um fator chave para a empresa que presa por relacionamentos duradouros com os colaboradores. Aqui é um local anônimo e seguro para recebimento de denúncias,  se tiver algo a dizer preencha o formulário abaixo:
          </Text>

          <Flex minWidth='25em' maxWidth='lg' direction="column">
            <FormControl>
              <FormLabel>Nome: </FormLabel>
              <Input type='text' variant='outline' bgColor='white' />
            </FormControl>
          </Flex>

        </Flex>
      </Flex>
    </>
  )
}

export default App
