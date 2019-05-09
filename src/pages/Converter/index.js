// @flow

import React, {Component} from 'react';
import {observable} from 'mobx';
import {inject, observer} from 'mobx-react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import {Card, CardContent} from 'components/Card';
import {parseStringToConvert} from 'utils';

type Props = {};

@inject("exchangeRatesStore")
@observer
class Converter extends Component<Props> {
    @observable stringToConvert: string = '';
    @observable convertError: string | null = null;

    @observable convertResults: Array<number> = [];

    onChange = ({target: {value}}: SyntheticInputEvent<EventTarget>) => this.stringToConvert = value;

    convertCurrencies = () => {
        const {stringToConvert, convertResults, props: {exchangeRatesStore}} = this;
        const convertObject = parseStringToConvert(stringToConvert);
        const conversionResult = exchangeRatesStore.convertCurrencies(convertObject);

        convertResults.unshift(
            `${stringToConvert}: ${conversionResult}`
        );
    };

    render(): React$Node {
        return (
            <Card>
                <CardContent>
                    <TextField variant="outlined"
                               margin="dense"
                               helperText={this.convertError || "Enter query in format: 1 USD in RUB"}
                               error={this.convertError}
                               onChange={this.onChange}
                               value={this.stringToConvert}
                               autoFocus
                    />
                    {this.convertResults.map((result) => (<Typography>{result}</Typography>))}
                </CardContent>
                <CardActions>
                    <Button variant="contained"
                            color="primary"
                            onClick={this.convertCurrencies}
                    >
                        Convert
                    </Button>
                </CardActions>
            </Card>);
    }
}

export default Converter;
