// @flow

import React from 'react';

import NoSsr from '@material-ui/core/NoSsr';
import Typography from '@material-ui/core/Typography';

import {WELCOME_LABEL} from "consts";

import {Content, CustomPaper} from './styled';
import AppBar from "./components/AppBar";

const Layout = ({children}) => (
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
