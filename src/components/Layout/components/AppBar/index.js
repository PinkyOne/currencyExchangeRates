// @flow

import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {computed, observable} from 'mobx';
import type {Router} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

import MuiAppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import BasicCurrencySelector from './components/BasicCurrencySelector';

import {CONVERTER, CURRENCIES_LIST} from 'routes';
import {CONVERTER_LABEL, CURRENCIES_LIST_LABEL} from 'consts/labels';

import {Controls, StyledToolbar} from './styles';

function LinkMenuItem(props) {
    return <MenuItem component={Link} {...props} />;
}

@withRouter
@observer
class AppBar extends Component<Router> {
    @observable anchorEl: EventTarget | null = null;

    @computed
    get isOnCurrenciesList(): boolean {
        return this.props.history.location.pathname === CURRENCIES_LIST;
    }

    @computed
    get title(): string {
        return this.isOnCurrenciesList
            ? CURRENCIES_LIST_LABEL
            : CONVERTER_LABEL;
    }

    openMenu = ({currentTarget}: Event) => {
        this.anchorEl = currentTarget;
    };

    closeMenu = () => {
        this.anchorEl = null;
    };

    render() {
        const {
            anchorEl,
            openMenu,
            title,
            closeMenu,
            isOnCurrenciesList
        } = this;

        return (<React.Fragment>
            <MuiAppBar position="static">
                <StyledToolbar>
                    <Controls>
                        <IconButton
                            color="inherit"
                            aria-label="Menu"
                            aria-owns={anchorEl ? 'menu' : undefined}
                            aria-haspopup="true"
                            onClick={openMenu}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <BasicCurrencySelector/>
                    </Controls>
                    <Typography variant="h6" color="inherit">
                        {title}
                    </Typography>
                </StyledToolbar>
            </MuiAppBar>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeMenu}
                disableAutoFocusItem
            >
                <LinkMenuItem
                    onClick={closeMenu}
                    to={CONVERTER}
                    selected={!isOnCurrenciesList}
                >
                    {CONVERTER_LABEL}
                </LinkMenuItem>
                <LinkMenuItem
                    onClick={closeMenu}
                    to={CURRENCIES_LIST}
                    selected={isOnCurrenciesList}
                >
                    {CURRENCIES_LIST_LABEL}
                </LinkMenuItem>
            </Menu>
        </React.Fragment>);
    }
}

export default AppBar;
