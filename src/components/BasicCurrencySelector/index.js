// @flow

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';

import type {CurrenciesStore} from 'stores/currencies/types';

type Props = {
    currenciesStore: CurrenciesStore | any
};

@inject(['currenciesStore'])
@observer
class BasicCurrencySelector extends Component<Props> {
    static defaultProps = {
        currenciesStore: {
            changeBasicCurrency: null,
            basicCurrency: null,
            currencies: null,
        }
    };

    onChange = ({target: {value}}: SyntheticInputEvent<EventTarget>) => {
        const {currenciesStore} = this.props;
        currenciesStore.changeBasicCurrency(value);
    };

    render() {
        const {basicCurrency, currencies, isFetching} = this.props.currenciesStore;
        return (
            isFetching
                ? <CircularProgress/>
                : <Select
                    value={basicCurrency.code}
                    onChange={this.onChange}
                >
                    {currencies.map(({code, name}) => (
                        <MenuItem key={code} value={code}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
        );
    };
}

export default BasicCurrencySelector;