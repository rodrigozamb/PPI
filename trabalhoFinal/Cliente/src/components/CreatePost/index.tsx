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

export const CreatePost = () => {

    const [post, setPost] = useState('');
    const [community, setCommunity] = useState('');
    const [title, setTitle] = useState('');

    const [postsList, setPostsList] = useState([])

    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const toast = useToast();

    const isWideSize = useBreakpointValue({
        base: false,
        md: true,
        lg: true, 
    })

    function handleCreatePost(ev: FormEvent) {
        ev.preventDefault()
        setIsButtonLoading(true);

        if(post.trim() === '') {
            toast({
                title: "Algo deu errado",
                description: "Preencha o campo corretamente.",
                status: "error",
                duration: 4000,
                position: 'top',
                isClosable: true,
            });

            setIsButtonLoading(false);

            return;
        }

        const formatedPost = {
            author: 'Rodrigo Zamboni',
            community: community,
            title: title,
            content: post,
            likesCount: 0,
            dislikesCount: 0,
            commentaryCount: 0,
            shareCount: 0,
            commentaries: [],
        }

        setTimeout(async () => {

            setIsButtonLoading(false);

            setPost('');
            setCommunity('');
            setTitle('')

            toast({
                title: "Sucesso !",
                description: "Seu post foi publicado",
                status: "success",
                duration: 4000,
                position: 'top',
                isClosable: true,
            })

            var newPosts;

            if (postsList) {
                newPosts = [...postsList, formatedPost]
                // setPostsList(newPosts)

            } else {
                newPosts = [formatedPost]
                // setPostsList(newPosts)
            }

            // setPostsList(newPosts)
            // console.log(newPosts)
        }, 1000);
    }

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
                    <Input 
                        placeholder='Qual a comunidade ?'
                        fontSize={['xs','sm']}
                        focusBorderColor='orange.500'
                        borderColor='gray.700'
                        bg='gray.900'
                        _hover={{ 
                            bg: 'gray.900'
                        }}
                        value={community}
                        onChange={(ev) => setCommunity(ev.target.value)}
                    />
                    <Input 
                        placeholder='Título'
                        fontSize={['xs','sm']}
                        focusBorderColor='orange.500'
                        borderColor='gray.700'
                        bg='gray.900'
                        _hover={{ 
                            bg: 'gray.900'
                        }}
                        value={title}
                        onChange={(ev) => setTitle(ev.target.value)}
                    />
                    <Textarea 
                        placeholder='O que está pensando ?' 
                        fontSize={['xs','sm']}
                        maxH='150px'
                        focusBorderColor='orange.500'
                        borderColor='gray.700'
                        bg='gray.900'
                        _hover={{ 
                            bg: 'gray.900'
                        }}
                        value={post}
                        onChange={(ev) => setPost(ev.target.value)}
                    />
                    <Flex>
                        <Button colorScheme='orange' ml='auto' px={['4','7']} onClick={handleCreatePost} isLoading={isButtonLoading} >
                            <Text fontSize={['xs','sm']} >Postar</Text>
                        </Button>
                    </Flex>
                </Stack>
            </Flex>

            {/* <Posts posts={postsList} /> */}
        </Container>
    )
}