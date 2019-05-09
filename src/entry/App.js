import React from 'react';
import AppRouter from './AppRouter';
import JssProvider from 'react-jss/lib/JssProvider';
import {createGenerateClassName} from '@material-ui/core/styles';

import {StyledApp} from './styles';

const generateClassName = createGenerateClassName({
    dangerouslyUseGlobalCSS: false,
    productionPrefix: 'c',
});

function App() {
    return (
        <JssProvider generateClassName={generateClassName}>
            <StyledApp>
                <AppRouter/>
            </StyledApp>
        </JssProvider>
    );
}

export default App;
