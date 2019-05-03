import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {createBrowserHistory} from "history";

import {CONVERTER, CURRENCIES_LIST, HOME} from "routes";

import Layout from "components/Layout";

import Converter from "pages/Converter";
import CurrenciesList from "pages/CurrenciesList";


const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Layout history={history}>
            <Route path={HOME} exact component={Converter}/>
            <Route path={CONVERTER} component={Converter}/>
            <Route path={CURRENCIES_LIST} component={CurrenciesList}/>
        </Layout>
    </Router>
);

export default AppRouter;
