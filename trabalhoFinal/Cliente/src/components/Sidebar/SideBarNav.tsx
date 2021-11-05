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
import { useAuth } from '../../hooks/useAuth'


export const SideBarNav = () => {
    const {logout} = useAuth()

    return (
        <Stack
            spacing='12'
            align='flex-start'
        >
            <NavSection title='GERAL'>
                <NavLink icon={RiDashboardLine} content='Feed' path='/dashboard'/>
                <NavLink icon={RiContactsLine} content='Comunidades' path='/communities' />
            </NavSection>

            <NavSection title='PRIVADO'>
                <NavLink icon={RiSettings4Line} content='Configurações' path='/configurations' />
                <NavLink icon={RiLogoutBoxLine} content='Sair' path='/' onClick={logout} />
            </NavSection>
        </Stack>
    )
}