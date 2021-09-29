import { Text, Divider, Stack, Flex, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Container } from "../Container"

export const Updates = () => {
    return (
        <Container>
            <Text
                fontWeight='bold'
                fontSize='xl'
                mb='8'
            >
                Comunidades Populares
            </Text>

            <Stack>
                <Flex align='center' >
                    <Text fontSize='lg' fontWeight='bold' color='orange.400' mr='5' >1</Text>
                    <Text fontSize='lg' fontWeight='normal' mr='3' >f/ParaOlimpiadas</Text>
                    <Button as={RouterLink} to={`communities/ParaOlimpíadas`} ml='auto' colorScheme='orange' fontSize='xs' size='sm' variant='link' ><Text>Acessar</Text></Button>
                </Flex>
                <Divider borderColor='gray.700' />
                <Flex align='center' justify='space-between' >
                    <Text fontSize='lg' fontWeight='bold' color='orange.400' mr='5'>2</Text>
                    <Text fontSize='lg' fontWeight='normal' mr='3' >f/MagicTCG</Text>
                    <Button as={RouterLink} to={`communities/MagicTCG`} ml='auto' colorScheme='orange' fontSize='xs' size='sm' variant='link' ><Text>Acessar</Text></Button>
                </Flex>
                <Divider borderColor='gray.700' />
                <Flex align='center' justify='space-between' >
                    <Text fontSize='lg' fontWeight='bold' color='orange.400' mr='5'>3</Text>
                    <Text fontSize='lg' fontWeight='normal' mr='3' >f/Halo</Text>
                    <Button as={RouterLink} to={`communities/Halo`} ml='auto' colorScheme='orange' fontSize='xs' size='sm' variant='link' ><Text>Acessar</Text></Button>
                </Flex>
                <Divider borderColor='gray.700' />
                <Flex align='center' justify='space-between' >
                    <Text fontSize='lg' fontWeight='bold' color='orange.400' mr='5'>4</Text>
                    <Text fontSize='lg' fontWeight='normal' mr='3' >f/Pandemia</Text>
                    <Button as={RouterLink} to={`communities/Pandemia`} ml='auto' colorScheme='orange' fontSize='xs' size='sm' variant='link' ><Text>Acessar</Text></Button>
                </Flex>
                <Divider borderColor='gray.700' />
                <Flex align='center' justify='space-between' >
                    <Text fontSize='lg' fontWeight='bold' color='orange.400' mr='5'>5</Text>
                    <Text fontSize='lg' fontWeight='normal' mr='3' >f/Vampyro</Text>
                    <Button as={RouterLink} to={`communities/Vampyro`} ml='auto' colorScheme='orange' fontSize='xs' size='sm' variant='link' ><Text>Acessar</Text></Button>
                </Flex>
            </Stack>
            
            <Button
              as={RouterLink}
              to='/communities'
              size='xs'
              variant="link"
              colorScheme='orange'
              mt='5'
              mx='auto'
            >
                Ver mais
            </Button>
        </Container>
    )
}