import React, {lazy, Suspense} from 'react';
import {Route, Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import {CONVERTER, CURRENCIES_LIST, HOME} from 'routes';

import Layout from 'components/Layout';
import CircularProgress from '@material-ui/core/CircularProgress';

const Converter = lazy(() => import ('pages/Converter'));
const CurrenciesList = lazy(() => import ('pages/CurrenciesList'));


const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Layout>
            <Suspense fallback={<CircularProgress/>}>
                <Route path={HOME} exact component={Converter}/>
                <Route path={CONVERTER} component={Converter}/>
                <Route path={CURRENCIES_LIST} component={CurrenciesList}/>
            </Suspense>
        </Layout>
    </Router>
);

export default AppRouter;
