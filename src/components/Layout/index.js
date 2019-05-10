// @flow

import React from 'react';

import NoSsr from '@material-ui/core/NoSsr';
import Typography from '@material-ui/core/Typography';

import AppBar from './components/AppBar';

import {WELCOME_LABEL} from 'consts';

import {Content, CustomPaper} from './styles';

const Layout = ({children}: { children: React$Node }) => (
    <CustomPaper elevation={10}>
        <NoSsr>
            <AppBar/>
            <Content>
                <Typography
                    variant="h6"
                    gutterBottom
                >
                    {WELCOME_LABEL}
                </Typography>
                {children}
            </Content>
        </NoSsr>
    </CustomPaper>
);

export default Layout;
