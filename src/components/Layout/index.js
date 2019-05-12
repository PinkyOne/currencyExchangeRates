// @flow

import React, {Component} from 'react';
import {computed} from 'mobx';
import {inject, observer} from 'mobx-react';

import NoSsr from '@material-ui/core/NoSsr';
import Typography from '@material-ui/core/Typography';

import AppBar from 'components/AppBar';
import ErrorDialog from 'components/ErrorDialog';

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
import type {ErrorDialogProps} from 'components/ErrorDialog';

type Props = {
    children: React$Node,
    exchangeRatesStore: ExchangeRatesStore | any,
    currenciesStore: CurrenciesStore | any
};


const baseError = {
    open: true,
    actionLabel: REFRESH_LABEL
};

const errorDialogClosed = {open: false};

@inject('currenciesStore')
@inject('exchangeRatesStore')
@observer
class Layout extends Component<Props> {
    @computed
    get error(): boolean | ErrorDialogProps {
        const {
            ratesIsOutdatedError,
            fetchExchangeRatesError,
            fetchCurrenciesError,
            fetchBasicCurrencyError
        } = this;

        return ratesIsOutdatedError
            || fetchExchangeRatesError
            || fetchCurrenciesError
            || fetchBasicCurrencyError
            || errorDialogClosed;
    }

    @computed
    get ratesIsOutdatedError(): boolean | ErrorDialogProps {
        const {
            exchangeRatesStore: {
                ratesIsOutdated,
                resetRefreshTimer,
                fetch: fetchExchangeRates
            }
        } = this.props;

        return ratesIsOutdated && {
            ...baseError,
            action: fetchExchangeRates,
            onClose: resetRefreshTimer,
            title: EXCHANGE_RATES_ERROR_TITLE,
            content: EXCHANGE_RATES_OUTDATED_DESCRIPTION
        }
    }

    @computed
    get fetchExchangeRatesError(): boolean | ErrorDialogProps {
        const {
            exchangeRatesStore: {
                fetchError: fetchExchangeRatesError,
                resetFetchError: resetFetchExchangeRatesError,
                fetch: fetchExchangeRates
            }
        } = this.props;

        return fetchExchangeRatesError && {
            ...baseError,
            action: fetchExchangeRates,
            onClose: resetFetchExchangeRatesError,
            title: EXCHANGE_RATES_ERROR_TITLE,
            content: EXCHANGE_RATES_ERROR_DESCRIPTION
        }
    }

    @computed
    get fetchCurrenciesError(): boolean | ErrorDialogProps {
        const {
            currenciesStore: {
                fetchCurrenciesError,
                resetFetchCurrenciesError,
                fetch: fetchCurrencies,
            },
        } = this.props;

        return fetchCurrenciesError && {
            ...baseError,
            action: fetchCurrencies,
            onClose: resetFetchCurrenciesError,
            title: CURRENCIES_LIST_ERROR_TITLE,
            content: CURRENCIES_LIST_ERROR_DESCRIPTION
        }
    }

    @computed
    get fetchBasicCurrencyError(): boolean | ErrorDialogProps {
        const {
            currenciesStore: {
                fetchBasicCurrencyError,
                resetFetchBasicCurrencyError,
                fetchBasicCurrency
            },
        } = this.props;

        return fetchBasicCurrencyError && {
            ...baseError,
            action: fetchBasicCurrency,
            onClose: resetFetchBasicCurrencyError,
            title: CURRENCIES_LIST_ERROR_TITLE,
            content: BASIC_CURRENCY_DETECTION_ERROR_DESCRIPTION
        }
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
                <ErrorDialog open={Boolean(error)} {...error} />
            </CustomPaper>
        );
    }
}

export default Layout;
