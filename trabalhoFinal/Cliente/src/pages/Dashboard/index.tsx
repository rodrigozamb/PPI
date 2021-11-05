import axios from 'axios';
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import { CreatePost } from '../../components/CreatePost';
import { Header } from '../../components/Header';
import { Posts } from '../../components/Posts';
import { SideBar } from '../../components/Sidebar';
import { Updates } from '../../components/Updates';
import { useAuth } from '../../hooks/useAuth';
import {User} from '../../contexts/AuthContext'

interface IComentary{
    name:string,
    content:string,
    avatar:string,
    likeCounter:number
}



interface IPost{
    community:string,
    author:string,
    title: string,
    content: string,
    likesCount: number,
    dislikesCount: number,
    commentaryCount: number,
    commentaries?:Array<IComentary>
}

export function Dashboard() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true, 
    })

    const [dashboardPosts, setDashboardPosts] = useState<any>([]);
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
            
            await axios.get('http://localhost:8080/post',config).
            then(res => {
                

                const newDashboardPosts = []

                for(let i=0;i<res.data.length;i++){
                        let coms:any = []
                        for(let j=0;j<res.data[i].commentaries.length;j++){
                            coms.push({
                                name:res.data[i].commentaries[j].creator.username,
                                avatar:'https://github.com/'+res.data[i].commentaries[j].creator.username+'.png',
                                content:res.data[i].commentaries[j].content,
                                likesCounter:0
                            })
                        }
                

                    newDashboardPosts.push({
                        id: res.data[i].id,
                        community : "f/"+res.data[i].board.name,
                        author: res.data[i].creator.username,
                        title: res.data[i].title,
                        content: res.data[i].content,
                        likesCount: res.data[i].likes,
                        dislikesCount:0,
                        shareCount: 0,
                        commentaryCount:0,
                        commentaries:coms
                    })
                }
                setDashboardPosts(newDashboardPosts)
            });

        }

        getData();
    }, [])



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