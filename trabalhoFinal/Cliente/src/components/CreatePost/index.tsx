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
import axios from 'axios'
import { Container } from '../Container'
import { Posts } from '../Posts'
import { useAuth } from '../../hooks/useAuth'

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
    const {authToken,user} = useAuth()

    const username = user?.username;

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
            author: username,
            community: community,
            title: title,
            content: post,
            likesCount: 0,
            dislikesCount: 0,
            commentaryCount: 0,
            shareCount: 0,
            commentaries: [],
        }

        let headers= {
            'Authorization': `Bearer ${authToken}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Authorization", 
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
            "Content-Type": "application/json;charset=UTF-8"   
        }


        let config2 = {

            headers: {
                'Authorization': `Bearer ${authToken}`,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Authorization", 
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
                "Content-Type": "application/json;charset=UTF-8"   
            },
            body:{
                name:community,
                description:community+' board'
            }
        }
        setTimeout(async () => {

            setIsButtonLoading(false);


            axios.get(`http://localhost:8080/board/find/${config2.body.name}`).then(res=>{

                
                if(res.data != ""){
                    //Fazer o post
                    axios.post(`http://localhost:8080/post/${res.data}`,formatedPost,{headers:headers})
                    .then(res2 =>{
                        if(res2.data.id != null)
                            toast({
                                title: "Sucesso !",
                                description: "Seu post foi publicado",
                                status: "success",
                                duration: 4000,
                                position: 'top',
                                isClosable: true,
                            })
                    })
                }else{
                    //Criar o board
                    axios.post('http://localhost:8080/board',{name:community,description:community+' board'},{headers:headers}).then(res2=>{
                        if(res2.status == 201){
                            // Fazer o post
                            axios.post(`http://localhost:8080/post/${res2.data.id}`,formatedPost,{headers:headers})
                            .then(res3 =>{
                                console.log("Nao exisita o board, foi criado junto com o post")
                                if(res3.data.id != null)
                                    toast({
                                        title: "Sucesso !",
                                        description: "Seu post foi publicado",
                                        status: "success",
                                        duration: 4000,
                                        position: 'top',
                                        isClosable: true,
                                    })
                            })
                        }
                    })
                }

            })
            
        
            
            setPost('');
            setCommunity('');
            setTitle('')

        }, 1000);
    }

    return (
        <Container>
            <Flex>
                {
                    isWideSize && (
                    <Avatar
                        name={username}
                        src={user?.avatar}
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