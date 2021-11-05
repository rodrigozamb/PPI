import { useAuth } from '../hooks/useAuth';
import { App } from './app.routes';
import { Auth } from './auth.routes';

export const Routes = () => {
    const { user } = useAuth();
    console.log(user)
    const isUserLoggedIn = user;
    return (
        <>
            { isUserLoggedIn ? <App/> : <Auth />}
        </>
    )
}