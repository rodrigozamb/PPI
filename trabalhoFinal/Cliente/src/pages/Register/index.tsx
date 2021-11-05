import {useState} from 'react'
import { Flex, Button, Stack, Heading, Text , useToast} from '@chakra-ui/react'
import { Helmet } from 'react-helmet';
import { RiGoogleFill } from 'react-icons/ri'
import { useHistory } from 'react-router'
import { Input } from '../../components/Form/Input'
import { useAuth } from '../../hooks/useAuth'

export function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const toast = useToast();

    const history = useHistory();
    const { register } = useAuth();

    function handleRegister() {
        register(username,password,email,firstname,lastname) 
        
        
        history.push('/');
    }

    return (
        <>
        <Helmet>
            <title >Cadastrar | PPInfo</title>
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
                <Heading textAlign='center' as='h1' size='lg' mb='6' >Cadastrar</Heading>

                <Stack spacing={['3','4']} >
                    <Input type='text' label='Usuário' name='usuário' onChange={(ev) => setUsername(ev.target.value)}  value={username}/>
                    <Input type='password' label='Senha' name='password' onChange={(ev) => setPassword(ev.target.value)}  value={password}/>
                    <Input type='text' label='Email' name='email' onChange={(ev) => setEmail(ev.target.value)}  value={email} />
                    <Input type='text' label='Primeiro Nome' name='firstname' onChange={(ev) => setFirstname(ev.target.value)}  value={firstname} />
                    <Input type='text' label='Sobrenome' name='lastname' onChange={(ev) => setLastname(ev.target.value)}  value={lastname} />
                </Stack>
                <Button
                  type='submit'
                  mt='6'
                  colorScheme='orange'
                  transition='all'
                  transitionDuration='2'
                  fontSize={['sm','md']}
                  size='lg'
                  onClick={handleRegister}
                //   isLoading={true}
                >
                    Criar cadastro
                </Button>
                <Text fontSize='sm' textAlign='center' my={['2','4']} >ou</Text>
                <Button
                  type='submit'
                  colorScheme='whiteAlpha'
                  transition='all'
                  fontSize={['sm','md']}
                  transitionDuration='2'
                  size='lg'
                  onClick={() => history.push('/')}
                //   isLoading={true}
                >
                    Voltar
                </Button>
            </Flex>
        </Flex>
        </>
    )
}