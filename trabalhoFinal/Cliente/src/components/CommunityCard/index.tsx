import { useState } from 'react'
import { Flex, Text, Box, Button, useToast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface CommunityCardProps {
    title: string,
    subtitle: string,
    isBeingFollowed: boolean,
    handleFollow?: () => VoidFunction
}

export const CommunityCard = ({ title, subtitle, isBeingFollowed}: CommunityCardProps) => {
    const toast = useToast()
    const [ isCommunityBeingFollowed, setIsCommunityBeingFollowed ] = useState(isBeingFollowed)

    function handleFollowCommunity() {
        setIsCommunityBeingFollowed(!isCommunityBeingFollowed)

        toast({
            title: "Sucesso !",
            description: `Você agora segue o fórum de ${title}`,
            status: "success",
            duration: 4000,
            position: 'top',
            isClosable: true,
        })
    }

    return (
        <Flex flexDir='column' w={['100%','28%','22%']} bg='gray.700' borderRadius='md' align='center' mt='4' py='4' mx='2'>
            <Box textAlign='center' pb='10' >
                <Text as='h1' fontWeight='semibold' fontSize='md' >{title}</Text>
                <Text as='h1' fontSize='xs' >{subtitle}</Text>
            </Box>
            {
                !isCommunityBeingFollowed ? (
                    <Button 
                        colorScheme='orange' 
                        fontSize='sm' 
                        size='md'
                        onClick={handleFollowCommunity}
                    >
                        <Text>Seguir</Text>
                    </Button>
                ) : (
                    <Button as={Link} to={`communities/${title}`} colorScheme='orange' fontSize='sm' size='md' ><Text>Acessar</Text></Button>
                )
            }
        </Flex>
    )
}