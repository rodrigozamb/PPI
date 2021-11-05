import axios from 'axios';
import { useState, useEffect } from 'react'
import {Text, Flex } from '@chakra-ui/react'

import { Container } from '../../components/Container';
import { CommunityCard } from '../../components/CommunityCard';
import { useAuth } from '../../hooks/useAuth';


interface IComunity{
    communityID:number;
    title:string;
    subtitle:string;
}

export const CommunitiesSection = () => {


    const [unfcom, setUnfCom] = useState<IComunity[]>([]);
    const [fcom, setFCom] = useState<IComunity[]>([]);
    const {authToken,user} = useAuth()

    useEffect(()=>{

        const headers = {
            'Authorization': `Bearer ${authToken}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Authorization", 
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
            "Content-Type": "application/json;charset=UTF-8"   
        }

        axios.get('http://localhost:8080/board/feed',{headers:headers})
        .then(res => {

            var followed: IComunity[] = []
            for(var i=0;i<res.data.boards.length;i++){
                followed.push({
                    communityID:res.data.boards[i].id,
                    title:res.data.boards[i].name,
                    subtitle:res.data.boards[i].description
                })
            }

            // pegar todos os boards
            axios.get('http://localhost:8080/board',{headers:headers})
            .then(res2=>{
                var unfollowed:IComunity[] = []
                for(var i=0;i<res2.data.length;i++){
                    
                    if(followed.indexOf({communityID:res.data.id,title:res2.data[i].name,subtitle:res2.data[i].description }) < 0)

                        unfollowed.push({
                            communityID:res2.data[i].id,
                            title:res2.data[i].name,
                            subtitle:res2.data[i].description
                        })

                }
                
                setFCom(followed)
                setUnfCom(unfollowed)
            })



        })
    },[])



    return (
        <>
        <Container>
            <Text as='h1' fontSize={['lg','xl']} fontWeight='semibold' mb='4' >Comunidades para seguir:</Text>
            <Flex wrap={['nowrap','wrap']} flexDir={['column', 'row']} >
                {
                    unfcom.map(community => {
                        return (
                            <CommunityCard
                                key={community.communityID}
                                communityID={community.communityID}
                                title={community.title}
                                subtitle={community.subtitle}
                                isBeingFollowed={false}
                            />
                        )
                    })
                }
            </Flex>
        </Container>

        <Container>
            <Text as='h1' fontSize={['lg','xl']}  fontWeight='semibold'>Comunidades que você segue:</Text>
            <Flex  wrap='wrap'>
            {
                fcom.map(community => {
                    return (
                        <CommunityCard
                            key={community.communityID}
                            communityID={community.communityID}
                            title={community.title}
                            subtitle={community.subtitle}
                            isBeingFollowed={true}
                        />
                    )
                })
            }
            </Flex>
        </Container>
        </>
    )
}