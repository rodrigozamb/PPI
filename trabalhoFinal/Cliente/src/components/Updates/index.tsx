import axios from 'axios';
import { useState, useEffect, JSXElementConstructor, ReactElement, ReactNodeArray, ReactPortal } from 'react'
import { Text, Divider, Stack, Flex, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Container } from "../Container"
import { cp } from 'fs';
import { useAuth } from '../../hooks/useAuth';

export const Updates = () => {

    const [communities, setCommunities] = useState<string[]>([]);
    const {authToken,user} = useAuth()

    useEffect(() => {
        async function getData() {

            let config = {

                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Authorization", 
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
                    "Content-Type": "application/json;charset=UTF-8"   
                }
            }
            
            await axios.get('http://localhost:8080/board',config).
            then(res => {
                
                console.log(res)

                var coms=[]
                for(var i=0;i<res.data.length;i++){
                    coms.push(res.data[i].name)
                }

                setCommunities(coms)
            });

        }

        getData();
    }, [])

    
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
                {


                    communities.map( (com:string,index:number) => {
                        if (index>=5){

                            return(
                            <Flex align='center' >
                            </Flex>
                            )
                        }

                        return(
                            <Flex align='center' key="a" >
                                <Text fontSize='lg' fontWeight='bold' color='orange.400' mr='5' >{index+1}</Text>
                                <Text fontSize='lg' fontWeight='normal' mr='3' >f/{com}</Text>
                                <Button as={RouterLink} to={`communities/${com}`} ml='auto' colorScheme='orange' fontSize='xs' size='sm' variant='link' ><Text>Acessar</Text></Button>
                                <Divider borderColor='gray.700' />
                            </Flex>
                        )
                    })

                }
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