// @flow

import React, {Component} from 'react';
import {computed} from 'mobx';
import {inject, observer} from 'mobx-react';

import NoSsr from '@material-ui/core/NoSsr';
import Typography from '@material-ui/core/Typography';

import AppBar from './components/AppBar';
import type {ErrorDialogProps} from './components/ErrorDialog';
import ErrorDialog from './components/ErrorDialog';

import {REFRESH_LABEL, WELCOME_LABEL} from 'consts/labels';
import {
    BASIC_CURRENCY_DETECTION_ERROR_DESCRIPTION,
    CURRENCIES_LIST_ERROR_DESCRIPTION,
    CURRENCIES_LIST_ERROR_TITLE,
    EXCHANGE_RATES_ERROR_DESCRIPTION,
    EXCHANGE_RATES_ERROR_TITLE,
    EXCHANGE_RATES_OUTDATED_DESCRIPTION
} from 'consts/errors';

import {Content, CustomPaper} from './styles';

import type {ExchangeRatesStore} from 'stores/exchangesRates/types';
import type {CurrenciesStore} from 'stores/currencies/types';

type Props = {
    children: React$Node,
    exchangeRatesStore: ExchangeRatesStore | any,
    currenciesStore: CurrenciesStore | any
};

@inject('currenciesStore')
@inject('exchangeRatesStore')
@observer
class Layout extends Component<Props> {
    @computed
    get error(): ErrorDialogProps {
        const {
            currenciesStore: {
                fetchCurrenciesError,
                resetFetchCurrenciesError,
                fetch: fetchCurrencies,

                fetchBasicCurrencyError,
                resetFetchBasicCurrencyError,
                fetchBasicCurrency
            },
            exchangeRatesStore: {
                ratesIsOutdated,
                resetRefreshTimer,
                fetchError: fetchExchangeRatesError,
                resetFetchError: resetFetchExchangeRatesError,
                fetch: fetchExchangeRates
            }
        } = this.props;

        const baseError = {
            open: true,
            actionLabel: REFRESH_LABEL
        };

        if(ratesIsOutdated){
            return {
                ...baseError,
                action: fetchExchangeRates,
                onClose: resetRefreshTimer,
                title: EXCHANGE_RATES_ERROR_TITLE,
                content: EXCHANGE_RATES_OUTDATED_DESCRIPTION
            }
        }

        if (fetchExchangeRatesError) {
            return {
                ...baseError,
                action: fetchExchangeRates,
                onClose: resetFetchExchangeRatesError,
                title: EXCHANGE_RATES_ERROR_TITLE,
                content: EXCHANGE_RATES_ERROR_DESCRIPTION
            }
        }
        if (fetchCurrenciesError) {
            return {
                ...baseError,
                action: fetchCurrencies,
                onClose: resetFetchCurrenciesError,
                title: CURRENCIES_LIST_ERROR_TITLE,
                content: CURRENCIES_LIST_ERROR_DESCRIPTION
            }
        }
        if (fetchBasicCurrencyError) {
            return {
                ...baseError,
                action: fetchBasicCurrency,
                onClose: resetFetchBasicCurrencyError,
                title: CURRENCIES_LIST_ERROR_TITLE,
                content: BASIC_CURRENCY_DETECTION_ERROR_DESCRIPTION
            }
        }
        return {open: false};
    }

    render() {
        const {props: {children}, error} = this;

        return (
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
                <ErrorDialog {...error} />
            </CustomPaper>
        );
    }
}

export default Layout;
