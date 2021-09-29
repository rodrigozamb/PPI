import { Helmet } from 'react-helmet';
import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import { CreatePost } from '../../components/CreatePost';
import { Header } from '../../components/Header';
import { Posts } from '../../components/Posts';
import { SideBar } from '../../components/Sidebar';
import { Updates } from '../../components/Updates';

export function Dashboard() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true, 
    })

    const dashboardPosts = [
        {
            community: `f/Faculdade`,
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
            community: `f/Jogos`,
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

    return (
        <>  
            <Helmet>
                <title>Feed | Fala Dev</title>
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
                            <CreatePost />
                            <Posts posts={dashboardPosts} />
                        </GridItem>
                        <GridItem 
                            colStart={10} 
                            colEnd={13}
                        >
                            <Updates />
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
                            <CreatePost />
                            <Posts posts={dashboardPosts} />
                        </GridItem>
                    </Grid>
                )
            }

            
        </>
    )
}