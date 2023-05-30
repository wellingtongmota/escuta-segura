import { Button, Flex, FormControl, FormLabel, Heading, Input, Text, Textarea, useToast } from "@chakra-ui/react";
import { useFormik } from "formik"
import emailjs from "@emailjs/browser";
import '@fontsource/teko';

function App() {

  const toast = useToast()

  const mensagemServidor = (resposta) => {
    if (resposta === 200)
      toast({
        description: "Mensagem enviada",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    else {
      toast({
        description: "Erro ao enviar mensagem",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const formik = useFormik({
    initialValues: {
      name: 'Anônimo',
      email: 'Anônimo',
      assunto: '',
      mensagem: '',
    },
    onSubmit: values => {

      emailjs.send("service_d3qqm7b", "template_nqc16y5", values, "h65zWycJmVYy8bw1")
        .then((response) => {
          console.log("E-mail enviado: ", response.status, response.text)
          mensagemServidor(response.status)
        }, (err) => {
          console.log("Erro: ", err)
          mensagemServidor(err.status)
        })
    },
  });

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

        <form onSubmit={formik.handleSubmit}>
          <Flex w={[300, 350, 400, 500]} direction="column" gap={3}>
            <FormControl>
              <FormLabel>Nome: <Text as="i" color="gray.600">Opcional</Text></FormLabel>
              <Input id="name" name="name" type='text' variant='outline' bgColor='white' onChange={formik.handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel>E-mail: <Text as="i" color="gray.600">Opcional</Text></FormLabel>
              <Input id="email" name="email" type='email' variant='outline' bgColor='white' onChange={formik.handleChange} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Assunto:</FormLabel>
              <Input id="assunto" name="assunto" type='text' variant='outline' bgColor='white' onChange={formik.handleChange} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Mensagem:</FormLabel>
              <Textarea id="mensagem" name="mensagem" bgColor='white' placeholder='Escreva sua mensagem aqui' size='sm' borderRadius='md' onChange={formik.handleChange} />
            </FormControl>

            <Button colorScheme="blue" mt={4} size="lg" w="100%" type="submit">Enviar</Button>
          </Flex>
        </form>
      </Flex>
    </>
  )
}

export default App
