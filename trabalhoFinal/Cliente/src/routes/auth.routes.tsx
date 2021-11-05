import { Switch, Route} from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const Auth = () => {
    return (
        <Switch>
            <Route path="/register" component={Register} exact/>
            <Route path="/" component={Login} />
        </Switch>
    )
}