import { useState } from 'react'
import { 
    Flex, 
    Text, 
    Avatar, 
    Icon, 
    Stack,
    useBreakpointValue 
} from '@chakra-ui/react'

import { RiHeartFill, RiHeartLine, RiReplyLine } from 'react-icons/ri'

interface CommentaryProps {
    commentaryID:number;
    name: string,
    avatar: string;
    commentary: string;
    commentaryLikeCount: number;
}

export const Commentary = ({
    commentaryID,
    name, 
    avatar, 
    commentary,
    commentaryLikeCount, 
}: CommentaryProps) => {

    const [isCommentaryLiked, setIsCommentaryLiked] = useState(false)
    const [commentaryLikeCounter, setCommentaryLikeCounter] = useState(commentaryLikeCount)

    function handleLikeCommentary() {
        setIsCommentaryLiked(!isCommentaryLiked)

        if(!isCommentaryLiked) {
            setCommentaryLikeCounter((commentaryLikeCounter) => commentaryLikeCounter + 1)
        } else {
            setCommentaryLikeCounter((commentaryLikeCounter) => commentaryLikeCounter - 1)
        }
    }

    const isWideSize = useBreakpointValue({
        base: false,
        md: true,
        lg: true, 
    })

    return (
        <Stack>
                <Flex
                    mx={['1','5']}
                    mt='5'
                    fontSize='sm'
                >
                    <Avatar
                        size={ isWideSize ? 'md' : 'sm'}
                        name={name}
                        src={avatar}
                        border='1px solid #ed8936'
                    />
                    <Flex
                        flexDir='column'
                        ml='3'
                        justify='center'
                    >
                        <Flex flexDir='row' align='center' >
                            <Text as='span' fontSize={['xs','sm']} >{name}</Text>
                        </Flex>
                        <Text color='gray.300' fontSize={['xs','sm']} >{commentary}</Text>
                    
                        <Flex
                            mt='3'
                        >
                            {/* <Flex
                                align='center'
                                mr='5'
                            >
                                <button onClick={handleLikeCommentary}>
                                    {
                                        isCommentaryLiked ? (
                                            <Icon as={RiHeartFill} fontSize='20' mr='1'  cursor='pointer' color='orange' />
                                        ) : (
                                            <Icon as={RiHeartLine} fontSize='20' mr='1'  cursor='pointer' />
                                        )
                                    }
                                </button>
                                <Text cursor='pointer' fontSize={['xs','sm']} >{commentaryLikeCounter}</Text>
                            </Flex> */}
                            {/* <Flex
                                align='center'
                            >
                                <Icon as={RiReplyLine} fontSize='20' mr='1' />
                                <Text fontSize={['xs', 'sm']} >comentar</Text>
                            </Flex> */}
                        </Flex>

                    </Flex>
                </Flex>

            </Stack>
    ) 
}