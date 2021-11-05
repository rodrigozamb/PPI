import { useState } from 'react';
import { Flex, Button, Stack, Heading, Text, useToast } from '@chakra-ui/react'
import { Helmet } from 'react-helmet';
import { RiGoogleFill } from 'react-icons/ri'
import { useHistory } from 'react-router'
import { Input } from '../../components/Form/Input'
import { useAuth } from '../../hooks/useAuth'

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();
    const history = useHistory();
    const { login, user } = useAuth();

    function handleSignIn() {
        
        login(username, password);

        setUsername('')
        setPassword('')
        history.push('/dashboard');
        
        
    }

    return (
        <>
        <Helmet>
            <title >Login | PPInfo</title>
        </Helmet>
        <Flex
          w='100vw'
          h='100vh'
          align='center'
          justify='center'
        >
            <Flex
                flexDir='column'
                width='100%'
                maxW={['300px','360px']}
                bg='gray.800'
                p={['6','8']}
                borderRadius='8'
            >
                <Heading textAlign='center' as='h1' size='lg' mb='6' >Login</Heading>

                <Stack spacing={['3','4']} >
                    <Input 
                        type='text' 
                        label='Usuário' 
                        name='usuário'
                        onChange={(ev) => setUsername(ev.target.value)}
                        value={username}
                    />
                    <Input 
                        type='password' 
                        label='Senha' 
                        name='password'
                        onChange={(ev) => setPassword(ev.target.value)}
                        value={password}
                    />
                </Stack>
                <Button
                  type='submit'
                  mt='6'
                  colorScheme='orange'
                  transition='all'
                  transitionDuration='2'
                  fontSize={['sm','md']}
                  size='lg'
                  onClick={handleSignIn}
                //   isLoading={true}
                >
                    Entrar
                </Button>
                <Text fontSize='sm' textAlign='center' my={['2','4']} >ou</Text>
                <Button
                  type='submit'
                  colorScheme='whiteAlpha'
                  transition='all'
                  fontSize={['sm','md']}
                  transitionDuration='2'
                  size='lg'
                  onClick={() => history.push('/register')}
                //   isLoading={true}
                >
                    Cadastrar
                </Button>
            </Flex>
        </Flex>
        </>
    )
}