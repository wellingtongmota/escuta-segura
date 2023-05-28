
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import theme from './utils/theme.js'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
)
