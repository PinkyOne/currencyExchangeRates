import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import {CONVERTER, CURRENCIES_LIST, HOME} from "routes";

import Converter from "pages/Converter";
import CurrenciesList from "pages/CurrenciesList";

const AppRouter = () => (
    <Router>
        <Route path={HOME} exact component={Converter}/>
        <Route path={CONVERTER} component={Converter}/>
        <Route path={CURRENCIES_LIST} component={CurrenciesList}/>
    </Router>
);

export default AppRouter;
