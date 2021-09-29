import { Helmet } from 'react-helmet';
import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import { Header } from '../../components/Header';
import { SideBar } from '../../components/Sidebar';
import { CommunitiesSection } from '../../components/CommunitiesSection';

export function Communities() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true, 
    })

    return (
        <>  
            <Helmet>
                <title>Communities | PPInfo</title>
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
                            <CommunitiesSection />
                            
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
                            <CommunitiesSection />
                            
                        </GridItem>
                    </Grid>
                )
            }

            
        </>
    )
}