// @flow

import React, {Component} from 'react';
import {computed, observable} from 'mobx';
import {inject, observer} from 'mobx-react';
import moment from 'moment';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import {Card, CardContent} from 'components/Card';
import {parseStringToConvert} from 'utils';

import type {ExchangeRatesStore} from 'stores/exchangesRates/types';

type Props = {
    exchangeRatesStore: ExchangeRatesStore | any
};

@inject('exchangeRatesStore')
@observer
class Converter extends Component<Props> {
    @observable stringToConvert: string = '';
    @observable convertError: string | null = null;

    @observable convertResults: Array<string> = [];

    @computed
    get isFetching() {
        const {
            exchangeRatesStore: {
                isFetching: isExchangeRatesStoreFetching
            },
        } = this.props;

        return isExchangeRatesStoreFetching;
    }


    onChange = ({target: {value}}: SyntheticInputEvent<EventTarget>) => this.stringToConvert = value;

    convertCurrencies = () => {
        const {stringToConvert, convertResults, props: {exchangeRatesStore}} = this;
        const convertObject = parseStringToConvert(stringToConvert);
        let conversionResult = exchangeRatesStore.convertCurrencies(convertObject);
        if (conversionResult === 'NaN') conversionResult = exchangeRatesStore.convertCurrencies(convertObject, false);
        const convertResultsSnapshot = [...convertResults];
        convertResultsSnapshot.unshift(
            `${moment().format('MMMM Do YYYY, h:mm:ss a')} ${stringToConvert}: ${conversionResult}`
        );
        if (convertResultsSnapshot.length > 3) convertResultsSnapshot.pop();
        this.convertResults = convertResultsSnapshot;
    };

    render(): React$Node {
        const {
            isFetching,
            convertError,
            convertResults,
            stringToConvert,
            onChange,
            convertCurrencies
        } = this;

        return (
            <Card>
                <CardContent>
                    {isFetching
                        ? <CircularProgress/>
                        : <React.Fragment>
                            <TextField variant="outlined"
                                       margin="dense"
                                       helperText={convertError || 'Enter query in format: 1 USD in RUB'}
                                       error={convertError}
                                       onChange={onChange}
                                       value={stringToConvert}
                                       autoFocus
                            />
                            {convertResults.map((result) => (<Typography>{result}</Typography>))}
                        </React.Fragment>
                    }
                </CardContent>
                <CardActions>
                    <Button variant="contained"
                            color="primary"
                            disabled={isFetching}
                            onClick={convertCurrencies}
                    >
                        Convert
                    </Button>
                </CardActions>
            </Card>);
    }
}

export default Converter;
