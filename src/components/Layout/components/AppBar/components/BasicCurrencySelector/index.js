// @flow

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

type Props = {
    currenciesStore: {
        changeBasicCurrency: (code: string) => void,
        basicCurrency: BasicCurrency,
        currencies: Currencies,
    }
};

@inject(['currenciesStore'])
@observer
class BasicCurrencySelector extends Component<Props> {
    onChange = ({target: {value}}: SyntheticInputEvent<EventTarget>) => {
        const {currenciesStore} = this.props;
        currenciesStore.changeBasicCurrency(value);
    };

    render() {
        const {currenciesStore} = this.props;
        return (
            <Select
                value={currenciesStore.basicCurrency.code}
                onChange={this.onChange}
            >
                {currenciesStore.currencies.map(({code, name}) => (
                    <MenuItem key={code} value={code}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        );
    };
}

export default BasicCurrencySelector;