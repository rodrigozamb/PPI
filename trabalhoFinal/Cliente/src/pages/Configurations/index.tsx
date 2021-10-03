import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";


import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import { Updates } from '../../components/Updates';
import { PersonalInfo } from "../../components/PersonalInfo";


export function Configurations(){

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true, 
    })

    return(
        <>
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
                            <PersonalInfo/>
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
                            <PersonalInfo/>

                            
                        </GridItem>
                    </Grid>
                )
            }


        </>
    )

}