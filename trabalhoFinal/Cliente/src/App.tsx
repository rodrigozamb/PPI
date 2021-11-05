import { ChakraProvider } from '@chakra-ui/react'
import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './styles/theme';
import { SidebarDrawerProvider } from './contexts/SidebarContext';
import { AuthContextProvider } from './contexts/AuthContext';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <BrowserRouter>
        <SidebarDrawerProvider>
          <Routes />
        </SidebarDrawerProvider>
        </BrowserRouter>
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
