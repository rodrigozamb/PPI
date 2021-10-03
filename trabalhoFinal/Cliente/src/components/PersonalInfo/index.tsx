/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useState } from 'react'
import { 
    Flex, 
    Avatar, 
    Stack, 
    Textarea, 
    Button, 
    Text, 
    Input,
    Icon, 
    useToast,
    useBreakpointValue 
} from '@chakra-ui/react'
import { RiLockUnlockLine } from 'react-icons/ri'
import { Container } from '../Container'
import { Posts } from '../Posts'

interface CommentaryProps {
    name: string,
    avatar: string;
    content: string;
    likesCounter: number;
}

interface PostProps {
    community: string,
    author: string,
    title: string,
    content: string,
    likesCount: number,
    dislikesCount: number,
    commentaryCount: number,
    shareCount: number,
    commentaries: CommentaryProps[]
}

interface PostsProps {
    posts: PostProps[]
}

export const PersonalInfo = () => {

    const [post, setPost] = useState('');
    const [community, setCommunity] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const [postsList, setPostsList] = useState([])

    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const toast = useToast();

    function handleChangeInfo(ev: FormEvent) {

    }

    const isWideSize = useBreakpointValue({
        base: false,
        md: true,
        lg: true, 
    })

    return (
        <Container>
            <Flex>
                {
                    isWideSize && (
                    <Avatar
                        name={'Rodrigo Zamboni'}
                        src={'https://github.com/rodrigozamb.png'}
                        border='1px solid #ed8936'
                        size={ isWideSize ? 'lg' : 'md'} 
                    />
                    )
                }
               
                <Stack
                    flex='1'
                    ml={['0','0','5']}
                >
                    <h2>Altere suas informações pessoais :</h2>
                    <Input 
                        placeholder='Qual o seu nome?'
                        fontSize={['xs','sm']}
                        focusBorderColor='orange.500'
                        borderColor='gray.700'
                        bg='gray.900'
                        _hover={{ 
                            bg: 'gray.900'
                        }}
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                    />
                    <Input 
                        placeholder='Email'
                        fontSize={['xs','sm']}
                        focusBorderColor='orange.500'
                        borderColor='gray.700'
                        bg='gray.900'
                        _hover={{ 
                            bg: 'gray.900'
                        }}
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                    />
                    

                    <Flex>
                        <Button colorScheme='orange' ml='auto' px={['4','7']} onClick={handleChangeInfo} isLoading={isButtonLoading} >
                            <Text fontSize={['xs','sm']} >Salvar</Text>
                        </Button>
                    </Flex>
                </Stack>
            </Flex>

        </Container>
    )
}