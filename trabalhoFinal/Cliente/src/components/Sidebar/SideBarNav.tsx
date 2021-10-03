import { Stack } from '@chakra-ui/react'
import {
    RiContactsLine, 
    RiDashboardLine, 
    RiQuestionLine, 
    RiSettings4Line, 
    RiLogoutBoxLine 
} from 'react-icons/ri'

import { NavSection } from './NavSection'
import { NavLink } from './NavLink'


export const SideBarNav = () => {

    return (
        <Stack
            spacing='12'
            align='flex-start'
        >
            <NavSection title='GERAL'>
                <NavLink icon={RiDashboardLine} content='Feed' path='/'/>
                <NavLink icon={RiContactsLine} content='Comunidades' path='/communities' />
            </NavSection>

            <NavSection title='PRIVADO'>
                <NavLink icon={RiSettings4Line} content='Configurações' path='/configurations' />
            </NavSection>
        </Stack>
    )
}