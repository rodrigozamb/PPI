import {Text, Flex } from '@chakra-ui/react'

import { Container } from '../../components/Container';
import { CommunityCard } from '../../components/CommunityCard';


export const CommunitiesSection = () => {
    const unfcom = [
        {title: 'Tecnologia', subtitle: 'principais assuntos'},
        {title: 'Música', subtitle: 'principais assuntos'},
        {title: 'Famosos', subtitle: 'principais assuntos'},
        {title: 'Olimpíadas', subtitle: 'principais assuntos'},
    ]

    const fcom = [
        {title: 'Jogos', subtitle: 'principais video games'},
        {title: 'Saúde', subtitle: 'Dicas e tutoriais'},
        {title: 'EAD', subtitle: 'principais discussões'},
        {title: 'Esporte', subtitle: 'principais assuntos'},
        {title: 'Cozinha', subtitle: 'Melhores receitas'},
        {title: 'Psicologia', subtitle: 'principais assuntos'},
        {title: 'Política', subtitle: 'principais discussões'},
        {title: 'Mágica', subtitle: 'principais truques'},
    ]

    return (
        <>
        <Container>
            <Text as='h1' fontSize={['lg','xl']} fontWeight='semibold' mb='4' >Comunidades para seguir:</Text>
            <Flex wrap={['nowrap','wrap']} flexDir={['column', 'row']} >
                {
                    unfcom.map(community => {
                        return (
                            <CommunityCard
                                key={community.title}
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
                            key={community.title}
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