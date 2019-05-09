import React from 'react';
import {Provider} from 'mobx-react';
import JssProvider from 'react-jss/lib/JssProvider';
import {createGenerateClassName} from '@material-ui/core/styles';

import AppRouter from './AppRouter';

import {StyledApp} from './styles';

import store from 'stores';

const generateClassName = createGenerateClassName({
    dangerouslyUseGlobalCSS: false,
    productionPrefix: 'c',
});

function App() {
    return (
        <JssProvider generateClassName={generateClassName}>
            <Provider currenciesStore={store.currenciesStore} exchangeRatesStore={store.exchangeRatesStore}>
                <StyledApp>
                    <AppRouter/>
                </StyledApp>
            </Provider>
        </JssProvider>
    );
}

export default App;
