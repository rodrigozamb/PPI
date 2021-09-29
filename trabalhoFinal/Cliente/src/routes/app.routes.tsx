import { Switch, Route} from 'react-router-dom';
import { Communities } from '../pages/Communities';
import { Community } from '../pages/Community';
import { Dashboard } from '../pages/Dashboard';

export const App = () => {
    return (
        <Switch>
            <Route path="/" component={Dashboard} exact/>
            <Route path="/communities" component={Communities} exact/>
            <Route path="/communities/*" component={Community} />
        </Switch>
    )
}