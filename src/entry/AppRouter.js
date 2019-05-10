import React from 'react';
import {Route, Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import {CONVERTER, CURRENCIES_LIST, HOME} from 'routes';

import Layout from 'components/Layout';

import Converter from 'pages/Converter';
import CurrenciesList from 'pages/CurrenciesList';


const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Layout>
            <Route path={HOME} exact component={Converter}/>
            <Route path={CONVERTER} component={Converter}/>
            <Route path={CURRENCIES_LIST} component={CurrenciesList}/>
        </Layout>
    </Router>
);

export default AppRouter;
