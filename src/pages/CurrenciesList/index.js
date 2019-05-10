// @flow

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import type {ExchangeRatesStore} from 'stores/exchangesRates/types';
import type {CurrenciesStore} from 'stores/currencies/types';

type Props = {
    exchangeRatesStore: ExchangeRatesStore | any,
    currenciesStore: CurrenciesStore | any
};

@inject(['currenciesStore'])
@inject(['exchangeRatesStore'])
@observer
class CurrenciesList extends Component<Props> {
    render() {
        const {
            exchangeRatesStore: {customBaseCodeExchangeRates},
            currenciesStore: {basicCurrency: {code}}
        } = this.props;

        return (
            <List component="nav">
                {customBaseCodeExchangeRates(code).map((displayValue) => (<ListItem>
                    <ListItemText primary={displayValue}/>
                </ListItem>))}
            </List>
        );
    }
}

export default CurrenciesList;