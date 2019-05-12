// @flow

import React, {Component} from 'react';
import {computed} from 'mobx';
import {inject, observer} from 'mobx-react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Card, CardContent} from 'components/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import type {ExchangeRatesStore} from 'stores/exchangesRates/types';
import type {CurrenciesStore} from 'stores/currencies/types';

import {StyledList} from './styles';


type Props = {
    exchangeRatesStore: ExchangeRatesStore | any,
    currenciesStore: CurrenciesStore | any
};

@inject('currenciesStore')
@inject('exchangeRatesStore')
@observer
class CurrenciesList extends Component<Props> {
    @computed
    get isFetching(): boolean {
        const {
            exchangeRatesStore: {
                isFetching: isExchangeRatesStoreFetching
            },
            currenciesStore: {
                isFetching: isCurrenciesStoreFetching
            }
        } = this.props;

        return isExchangeRatesStoreFetching || isCurrenciesStoreFetching;
    }

    render() {
        const {
            isFetching,
            props: {
                exchangeRatesStore: {
                    customBaseCodeExchangeRates,
                    fetch: refreshExchangeRates,
                },
                currenciesStore: {
                    basicCurrency: {code},
                }
            }
        } = this;

        return (
            <Card>
                <CardContent>
                    {isFetching
                        ? <CircularProgress/>
                        : <StyledList component="nav">
                            {customBaseCodeExchangeRates(code).map((displayValue) => (<ListItem key={displayValue}>
                                <ListItemText primary={displayValue}/>
                            </ListItem>))}
                        </StyledList>
                    }
                </CardContent>
                <CardActions>
                    <Button variant="contained"
                            color="primary"
                            disabled={isFetching}
                            onClick={refreshExchangeRates}
                    >
                        Refresh Exchange Rates
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default CurrenciesList;