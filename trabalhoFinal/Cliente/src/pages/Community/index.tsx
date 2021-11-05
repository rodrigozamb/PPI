import axios from 'axios';
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router'
import { Grid, GridItem, Text, useBreakpointValue } from '@chakra-ui/react'
import { Header } from '../../components/Header';
import { SideBar } from '../../components/Sidebar';
import { Posts } from '../../components/Posts';
import { useAuth } from '../../hooks/useAuth';

export const Community = () => {
    const location = useLocation()

    const communityName = location.pathname.slice(13)

    const [posts, setPosts] = useState<any>([]);
    const {authToken,user} = useAuth()


    useEffect(()=>{

        async function getData(){

            const headers = {
                'Authorization': `Bearer ${authToken}`,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Authorization", 
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
                "Content-Type": "application/json;charset=UTF-8"   
            }

            await axios.get('http://localhost:8080/board',{headers:headers})
            .then(res => {
                
                var boardID=0;
                for(var i=0;i<res.data.length;i++){
                    if(communityName == res.data[i].name){
                        boardID = res.data[i].id
                    }
                }

                axios.get(`http://localhost:8080/post/board/${boardID}`,{headers:headers})
                .then(res2 =>{

                    var ps = []
                    for(var i=0;i<res2.data.length;i++){
                        
                        let coms:any = []
                        for(let j=0;j<res2.data[i].commentaries.length;j++){
                            coms.push({
                                name:res2.data[i].commentaries[j].creator.username,
                                avatar:'https://github.com/'+res2.data[i].commentaries[j].creator.username+'.png',
                                content:res2.data[i].commentaries[j].content,
                                likesCounter:0
                            })
                        }
                        
                        ps.push({
                            id:res2.data[i].id,
                            community:`f/${communityName}`,
                            author:res2.data[i].creator.username,
                            title: res2.data[i].title,
                            content: res2.data[i].content,
                            likesCount: res2.data[i].likes,
                            dislikesCount:0,
                            shareCount: 0,
                            commentaryCount:0,
                            commentaries:coms
                        })
                    }

                    setPosts(ps)
                })
            })

        }
        getData()
    },[])

    const posts1 = [
        {
            community: `f/${communityName}`,
            author: `por Abdala`,
            title: `Retorno dos festivais musicais`,
            content: `Em alguns países eventos de cultura já estão retomando suas atividades, além de ser uma boa notícia para as pessoas, os eventos provocam um crescimento
            significativo da economia. Qual evento da sua cidade você está ansioso para participar quando acabar a pandemia?`,
            likesCount: 8,
            dislikesCount: 1,
            commentaryCount: 1,
            shareCount: 0,
            commentaries: [
                {name: 'Laura Beatris', avatar: 'https://github.com/lauraBeatris.png',content: 'Mal posso esperar pra voltar o Rock in Rio, quero muito ir', likesCounter: 4}
            ]
        },
        {
            community: `f/${communityName}`,
            author: `por Abdala`,
            title: `EAD é bom?`,
            content: `Não estou gostando do modelo EAD da maioria das Instituições de ensino, tanto médio quanto superior, não ter o contato
            direto com os professores faz toda a diferença no ensino. O que vocês acham?`,
            likesCount: 12,
            dislikesCount: 6,
            commentaryCount: 0,
            shareCount: 0,
            commentaries: []
        },
    ]

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true, 
    })

    return (
        <>  
            <Helmet>
                <title>{communityName} | PPInfo</title>
            </Helmet>
            <Header />

            {
                isWideVersion ? (
                    <Grid
                    templateColumns='repeat(12, 1fr)'
                    maxW='1480px'
                    mx='auto'
                    px='6'
                    gap='4'
                    >
                        <GridItem 
                            colStart={1} 
                            colEnd={3}
                        >
                            <SideBar />
                        </GridItem>
                        <GridItem 
                            colStart={3} 
                            colEnd={10}
                        >
                            <Text fontSize='x-large' fontWeight='semibold' mb='4' > Sobre
                                <Text as='span' color='orange.300' ml='2' >{communityName} </Text>
                                :
                            </Text>
                            <Posts posts={posts} />
                            
                        </GridItem>
                        <GridItem 
                            colStart={10} 
                            colEnd={13}
                        >
                            
                        </GridItem>
                    </Grid>
                ) : (
                    <Grid
                    templateColumns='repeat(12, 1fr)'
                    maxW='1480px'
                    mx='auto'
                    px='6'
                    gap='4'
                    >
                        <GridItem 
                            colStart={1} 
                            colEnd={13}
                        >
                            <SideBar />
                            <Text fontSize='x-large' fontWeight='semibold' mb='4' > Sobre
                                <Text as='span' color='orange.300' ml='2' >{communityName} </Text>
                                :
                            </Text>
                            <Posts posts={posts} />
                            
                        </GridItem>
                    </Grid>
                )
            }

            
        </>
    )
}