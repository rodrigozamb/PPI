
import { Flex, HStack, Icon, Box, Text, Avatar } from '@chakra-ui/react'
import { RiNotificationLine } from 'react-icons/ri'

interface UserProps {
    showProfileDate?: boolean;
}

export const User = ({ showProfileDate }: UserProps) => {

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
                {/* <Icon as={RiNotificationLine} fontSize='20'/> */}
            </HStack>
        
            <Flex
                align='center'
            >
                { showProfileDate && (
                    <Box mr='4' textAlign='right' >
                        <Text>{'Rodrigo Zamboni'}</Text>
                        <Text color='gray.300' fontSize='small' >{'rodrigozamboni@gmail.com'}</Text>
                    </Box>
                ) }

                <Avatar size='md' name={'Rodrigo Zamboni'} src={'https://github.com/rodrigozamb.png'} />
            </Flex>
        </Flex>
)
}