import { useState } from 'react'
import { Flex, Icon, IconButton, Input } from "@chakra-ui/react"
import { RiSearchLine } from 'react-icons/ri'
import { useHistory } from 'react-router-dom';

export const Searchbar = () => {
    const history = useHistory()
    const [search, setSearch] = useState('')

    function handleSearch() {
        history.push(`/communities/${search}`)
    }

    return (
        <Flex
            as='label'
            flex='1'
            py='4'
            px='8'
            ml='6'
            maxW='400px'
            alignSelf='center'
            color='gray.200'
            position='relative'
            bg='gray.800'
            borderRadius='full'
        >
            <Input
                color='gray.50'
                variant='unstyled'
                px='4'
                mr='4'
                fontSize='14'
                placeholder='Buscar no Fórum' 
                _placeholder={{color: 'gray.400'}}
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
            />

            <Icon 
                as={RiSearchLine} 
                fontSize='20'
                onClick={handleSearch}
            />
            
            {/* <IconButton 
                        aria-label='Search Line'
                        icon={<Icon as={RiSearchLine} />} 
                        fontSize='24'
                        variant='unstyled'
                        
                        mr='2'
                    /> */}
        </Flex>
    )
}