import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router'
import { Grid, GridItem, Text, useBreakpointValue } from '@chakra-ui/react'
import { Header } from '../../components/Header';
import { SideBar } from '../../components/Sidebar';
import { Posts } from '../../components/Posts';

export const Community = () => {
    const location = useLocation()

    const communityName = location.pathname.slice(13)

    const posts = [
        {
            community: `f/${communityName}`,
            author: `d/Abdala`,
            title: `EAD sucks`,
            content: `Não estou gostando do modelo EAD da maioria das Instituições de ensino, tanto médio quanto superior, não ter o contato
            direto com os professores faz toda a diferença no ensino. O que vocês acham?`,
            likesCount: 8,
            dislikesCount: 1,
            commentaryCount: 1,
            shareCount: 0,
            commentaries: [
                {name: 'Laura Beatris', avatar: 'https://github.com/lauraBeatris.png',content: 'Como aluna eu digo que vale a pena aprender a usar o Teams, fica muito organizado.', likesCounter: 4}
            ]
        },
        {
            community: `f/${communityName}`,
            author: `d/Abdala`,
            title: `New World é bom?`,
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