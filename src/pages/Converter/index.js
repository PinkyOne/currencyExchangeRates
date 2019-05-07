// @flow

import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';

import {Card, CardContent} from 'components/Card';

import {parseStringToConvert} from 'utils/converter';

type Props = {};

@observer
class Converter extends Component<Props> {
    @observable stringToConvert: string = '';
    @observable convertError: string | null = null;

    onChange = ({target: {value}}: SyntheticInputEvent<EventTarget>) => this.stringToConvert = value;

    convertCurrencies = () => {
        parseStringToConvert(this.stringToConvert);
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
