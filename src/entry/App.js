import React from 'react';
import AppRouter from "./AppRouter";
import Layout from "components/Layout";

import {StyledApp} from "./styles";

function App() {
    return (
        <StyledApp>
            <Layout>
                <AppRouter/>
            </Layout>
        </StyledApp>
    );
}

export default App;
