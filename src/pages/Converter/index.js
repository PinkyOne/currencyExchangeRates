// @flow

import React, {Component} from 'react';
import {observable} from 'mobx';
import {inject, observer} from 'mobx-react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import {Card, CardContent} from 'components/Card';

import type {ExchangeRatesStore} from 'stores/exchangesRates/types';
import type {ConverterStore} from 'stores/converter/types';


type Props = {
    exchangeRatesStore: ExchangeRatesStore | any,
    converterStore: ConverterStore | any,
};

@inject('converterStore')
@inject('exchangeRatesStore')
@observer
class Converter extends Component<Props> {
    @observable stringToConvert: string = '';
    @observable convertError: string | null = null;

    @observable convertResults: Array<string> = [];

    onChange = ({target: {value}}: SyntheticInputEvent<EventTarget>) => this.stringToConvert = value;

    convertCurrencies = () => {
        const {converterStore} = this.props;
        converterStore.convert(this.stringToConvert);
    };

    render() {
        const {
            convertError,
            stringToConvert,
            onChange,
            convertCurrencies,
            props: {
                converterStore: {results},
                exchangeRatesStore: {isFetching}
            }
        } = this;

        return (
            <Card>
                <CardContent>
                    {isFetching
                        ? <CircularProgress/>
                        : <TextField
                            variant="outlined"
                            margin="dense"
                            helperText={convertError || 'Enter query in format: 1 USD in RUB'}
                            error={convertError}
                            onChange={onChange}
                            value={stringToConvert}
                            autoFocus
                        />
                    }
                    <List component="nav">
                        {results.map(({displayValue, id}) => (
                            <ListItem key={id}>
                                <ListItemText primary={displayValue}/>
                            </ListItem>
                        ))}
                    </List>
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
