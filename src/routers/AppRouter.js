import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/loginPage';
import NotFoundPage from '../components/notFoundPage';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/dashboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/home" component={DashboardPage} exact={true}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;