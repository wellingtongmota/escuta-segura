import { Input, Button, Flex, FormControl, FormLabel, Text, Textarea, Heading, useToast, FormHelperText } from "@chakra-ui/react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import '@fontsource/teko';

export default function App() {

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
      name: '',
      email: '',
      assunto: '',
      mensagem: ''
    },

    onSubmit: (values, { resetForm }) => {
      emailjs.send("service_d3qqm7b", "template_nqc16y5", values, "h65zWycJmVYy8bw1R")
        .then((response) => {
          console.log("E-mail enviado: ", response.status, response.text)
          mensagemServidor(response.status)
          resetForm()
        }, (err) => {
          console.log("Erro: ", err)
          mensagemServidor(err.status)
        })
    },
  })

  return (
    <div>
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
        <Flex
          align="baseline"
          gap={2}
          flexWrap='wrap'
          wi="100%"
          justify="center"
        >
          <Heading as='h1' size='4xl' color="blue.700">
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
          maxWidth='3xl'
        >
          Seja bem vindo ao canal de Denúncias da empresa DOVALE CHAVES, a confiança é um fator chave para a empresa que presa por relacionamentos duradouros com os colaboradores. Aqui é um local anônimo e seguro para recebimento de denúncias,  se tiver algo a dizer preencha o formulário abaixo:
        </Text>

        <form onSubmit={formik.handleSubmit}>
          <Flex w={[300, 350, 400, 500]} direction="column" gap={3}>

            <FormControl>
              <FormLabel>Nome: <Text as="i" color="gray.600">Opcional</Text></FormLabel>
              <Input
                name="name"
                type='text'
                variant='outline'
                bgColor='white'
                maxLength={64}
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>E-mail: <Text as="i" color="gray.600">Opcional</Text></FormLabel>
              <Input
                name="email"
                type='email'
                variant='outline'
                bgColor='white'
                maxLength={256}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Assunto:</FormLabel>
              <Input
                name="assunto"
                type='text'
                variant='outline'
                bgColor='white'
                maxLength={40}
                placeholder='Descreva o assunto'
                value={formik.values.assunto}
                onChange={formik.handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Mensagem:</FormLabel>
              <Textarea
                name="mensagem"
                bgColor='white'
                size='sm'
                borderRadius='md'
                placeholder='Escreva sua mensagem aqui'
                value={formik.values.mensagem}
                onChange={formik.handleChange}
                maxLength={1500}
              />
              <FormHelperText textAlign="end">{formik.values.mensagem.length} / 1500</FormHelperText>
            </FormControl>

            <Button colorScheme="blue" mt={4} size="lg" w="100%" type="submit">Enviar</Button>
          </Flex>
        </form>

      </Flex>
    </div>
  )
}