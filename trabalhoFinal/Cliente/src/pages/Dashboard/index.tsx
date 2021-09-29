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
            author: `por Abdala`,
            title: `Planos para Ensino na UFU`,
            content: `Comite de ensino da UFU se reune para discutir quais serão os próximos passos em relação ao ensino remoto, haverá discussão a respeito da volta presencial das aulas práticas para 
            as disciplinas de âmbito prático. Será discutido a aversão dos estudadentes também?`,
            likesCount: 8,
            dislikesCount: 1,
            commentaryCount: 1,
            shareCount: 0,
            commentaries: [
                {name: 'Laura Beatris', avatar: 'https://github.com/lauraBeatris.png',content: 'Aula presencioal faz toda a diferença no aprendizado, principalmente nas disciplinas práticas.', likesCounter: 4}
            ]
        },
        {
            community: `f/Saúde`,
            author: `por Abdala`,
            title: `Como manter a saúde durante pandemia`,
            content: `Especialistas recomendam muito cuidado durante o período pandêmico, muitas pessoas começaram a praticar exercícios em casa, de forma a evitar contato com outras pessoas.
            Para você, qual exercício funciona melhor para ser feito em casa ?`,
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
                <title>Feed | Fórum PPInfo</title>
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