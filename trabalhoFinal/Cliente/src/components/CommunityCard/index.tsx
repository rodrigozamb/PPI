import axios from 'axios'
import { useState } from 'react'
import { Flex, Text, Box, Button, useToast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

interface CommunityCardProps {
    communityID:number,
    title: string,
    subtitle: string,
    isBeingFollowed: boolean,
    handleFollow?: () => VoidFunction
}

export const CommunityCard = ({ communityID, title, subtitle, isBeingFollowed}: CommunityCardProps) => {
    const toast = useToast()
    const [ isCommunityBeingFollowed, setIsCommunityBeingFollowed ] = useState(isBeingFollowed)
    const {authToken,user} = useAuth()

    function handleFollowCommunity() {
        setIsCommunityBeingFollowed(!isCommunityBeingFollowed)

        const headers= {
            'Authorization': `Bearer ${authToken}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Authorization", 
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
            "Content-Type": "application/json;charset=UTF-8"   
        }

        axios.patch(`http://localhost:8080/board/follow/${communityID}`,{},{headers:headers}).then(res=>{
            console.log(res)
        })
        console.log(`Seguiu a board ${communityID}`)
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