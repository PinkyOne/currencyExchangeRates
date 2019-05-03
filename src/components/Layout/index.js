import React, {Component} from "react";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {Link} from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import NoSsr from "@material-ui/core/NoSsr";
import Tabs from "@material-ui/core/Tabs";

import {CONVERTER, CURRENCIES_LIST} from "routes";

import {Content, CustomPaper} from "./styled";

function LinkTab(props) {
    return <Tab component={Link} {...props} />;
}

@observer
class Layout extends Component {
    @observable tabValue: number = this.props.history.location.pathname === CURRENCIES_LIST ? 1 : 0;

    handleChange = (event, value) => {
        this.tabValue = value;
    };

    render() {
        const {children} = this.props;
        const {tabValue} = this;
        return (
            <CustomPaper elevation={10}>
                <NoSsr>
                    <div>
                        <AppBar position="static">
                            <Tabs variant="fullWidth" value={tabValue} onChange={this.handleChange}>
                                <LinkTab label="Converter" to={CONVERTER}/>
                                <LinkTab label="Currencies List" to={CURRENCIES_LIST}/>
                            </Tabs>
                        </AppBar>
                        <Content>
                            {children}
                        </Content>
                    </div>
                </NoSsr>
            </CustomPaper>
        );
    }
}

export default Layout;
