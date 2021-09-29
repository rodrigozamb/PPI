import { useState } from 'react'
import { 
    Flex, 
    Text, 
    Avatar, 
    Icon, 
    Divider, 
    Box, 
    Button, 
    Input,
} from '@chakra-ui/react'
import { 
    RiMoreLine, 
    RiThumbUpLine, 
    RiChat2Line, 
    RiShareLine, 
    RiThumbUpFill, 
    RiThumbDownFill,
    RiThumbDownLine
} from 'react-icons/ri'

import { Container } from '../Container'
import { Commentary } from './commentary'

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
    shareCount:number,
    commentaries: CommentaryProps[]
}

export const Post = ({
    community,
    author,
    title,
    content,
    likesCount,
    dislikesCount,
    commentaryCount,
    shareCount,
    commentaries
}: PostProps) => {

    const [commentary, setCommentary] = useState('');
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isPostDisliked, setIsPostDisliked] = useState(false);
    const [commentaryList, setCommentaryList] = useState(commentaries);
    const [commentaryCounter, setCommentaryCounter] = useState(commentaryCount);
    const [likesCounter, setLikesCounter] = useState(likesCount);
    const [dislikesCounter, setDislikesCounter] = useState(dislikesCount);
    const [isCommentSectionHidden, setIsCommentSectionHidden] = useState(true);


    function handleLikePost() {
        setIsPostLiked(!isPostLiked)

        if(!isPostLiked) {
            setLikesCounter((likesCounter) => likesCounter + 1)

            if(isPostDisliked) {
                setIsPostDisliked(!isPostDisliked)
                setDislikesCounter((dislikesCounter) => dislikesCounter - 1)
            }
        } else {
            setLikesCounter((likesCounter) => likesCounter - 1)
        }
    }

    function handleDislikePost() {
        setIsPostDisliked(!isPostDisliked)

        if(!isPostDisliked) {
            setDislikesCounter((dislikesCounter) => dislikesCounter + 1)

            if(isPostLiked) {
                setIsPostLiked(!isPostLiked)
                setLikesCounter((likesCounter) => likesCounter - 1)
            }
        } else {
            setDislikesCounter((dislikesCounter) => dislikesCounter - 1)
        }
    }

    function handleAddCommentary() {
        const formatedCommentary = {
            name: 'Rodrigo Zamboni',
            avatar: 'https://github.com/rodrigozamb.png',
            content: commentary,
            likesCounter: 0,
        }

        setCommentaryCounter((commentaryCounter) => commentaryCounter + 1)

        
        setCommentaryList((commentaryList) => [...commentaryList, formatedCommentary])

        setCommentary('')
        toggleCommentarySection()        
    }

    function toggleCommentarySection() {
        setIsCommentSectionHidden(!isCommentSectionHidden);
    }

    return (
        <Container>
           <Flex mb='6'>
                <Flex
                    flexDir='column'
                    justify='center'
                    ml={['2','3']}
                >
                    <Flex
                        flexDir='row'
                        align='center'
                    >
                        <Text fontSize={['xs','sm']}>{community}</Text>
                        <Box alignSelf='center' w='4px' h='4px' bg='gray.400' mx='2' borderRadius='full' ></Box>
                        <Text fontSize={['xs','sm']}>{author}</Text>
                    </Flex>
                    
                </Flex>
                <Icon as={RiMoreLine} ml='auto'/>
           </Flex>
           
            <Box mx={['0','5']}  my='4'>
                <Text as='h1' fontSize='md'> {title} </Text>
                <Text fontSize='sm'> {content} </Text>
            </Box>

            <Flex
                mx='5'
            >
                <Flex>
                    <Flex align='center' mr='5'>
                        <button onClick={handleLikePost}>
                            {
                                isPostLiked ? (
                                    <Icon as={RiThumbUpFill} fontSize={['18','20']} mr='1'  cursor='pointer' color='green' />
                                ) : (
                                    <Icon as={RiThumbUpLine} fontSize={['18','20']} mr='1'  cursor='pointer' />
                                )
                            }
                        </button>
                        <Text cursor='pointer' >{likesCounter}</Text>
                    </Flex>
                    <Flex align='center' mr='5'>
                        <button onClick={handleDislikePost}>
                            {
                                isPostDisliked ? (
                                    <Icon as={RiThumbDownFill} fontSize={['18','20']} mr='1'  cursor='pointer' color='red' />
                                ) : (
                                    <Icon as={RiThumbDownLine} fontSize={['18','20']} mr='1'  cursor='pointer' />
                                )
                            }
                        </button>
                        <Text cursor='pointer' >{dislikesCounter}</Text>
                    </Flex>
                    <Flex align='center'>
                        <Icon as={RiChat2Line} fontSize={['18','20']} mr='1' cursor='pointer' onClick={toggleCommentarySection} />
                        <Text>{commentaryCounter}</Text>
                    </Flex>
                </Flex>

            </Flex>
            {
                commentaryList.map(commentary => {
                    return (
                        <Box key={commentary.content} >
                            <Divider mt='4' borderColor='gray.700' />
                            <Commentary
                              avatar={commentary.avatar}
                              name={commentary.name}
                              commentary={commentary.content}
                              commentaryLikeCount={commentary.likesCounter}
                            />
                        </Box>
                    )
                })
            }
            <Box display={isCommentSectionHidden ? 'none' : 'block'}>
                <Divider mt='4' borderColor='gray.700'  />
                <Flex mt='5' align='center' >
                    <Avatar 
                        size='md'
                        name={'Rodrigo Zamboni'}
                        src={'https://github.com/rodrigozamb.png'}
                        border='1px solid #ed8936'
                    />
                    <Input 
                        placeholder="digite seu comentário" 
                        mx='4'
                        value={commentary}
                        onChange={(ev) => setCommentary(ev.target.value)}
                        fontSize='sm'
                        focusBorderColor='orange.500'
                        borderColor='gray.700'
                        bg='gray.900'
                        _hover={{
                            bg: 'gray.900'
                        }}
                    />
                    <Button
                        colorScheme='orange'
                        onClick={handleAddCommentary}
                    >
                        <Text
                            px='2'
                            fontSize='sm'
                        >
                            Enviar
                        </Text>
                    </Button>
                </Flex>
            </Box>

       </Container> 
    )
}