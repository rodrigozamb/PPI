
import { useState, useEffect } from 'react'
import { Flex, HStack, Icon, Box, Text, Avatar } from '@chakra-ui/react'
import { RiNotificationLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/useAuth';

interface UserProps {
    showProfileDate?: boolean;
}

interface UserDataProps {
    avatar_url: string,
    name: string,
    email: string,
}

export const User = ({ showProfileDate }: UserProps) => {


    const [userData, setUserData] = useState<any>();
    const {user} = useAuth()

    useEffect(() => {
        async function getData() {
            const data = await fetch(`https://api.github.com/users/${user?.username}`).then(res => res.json());

            const formatedData = {
                name: user?.username,
                avatar_url: data.avatar_url,
                email: data.email
            }

            setUserData(formatedData);
        }

        getData();
    }, [])

    return (
        <Flex
            align='center'
            ml='auto'
        >
            <HStack 
                spacing={['6','8']}
                mx={['6','8']}
                pr={['6','8']}
                py='1'
                color='gray.300'
                borderRightWidth={1}
                borderColor='gray.700'
            >

            </HStack>
        
            <Flex
                align='center'
            >
                { showProfileDate && (
                    <Box mr='4' textAlign='right' >
                        <Text>{userData?.name}</Text>
                        <Text color='gray.300' fontSize='small' >{userData?.email}</Text>
                    </Box>
                ) }

                <Avatar size='md' name={userData?.name} src={userData?.avatar_url} />
            </Flex>
        </Flex>
)
}