// @flow

import React, {Component} from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";

import {Card, CardContent} from "components/Card";

type Props = {};

@observer
class Converter extends Component<Props> {
    @observable stringToConvert: string = '';

    onChange = ({target: {value}}: SyntheticInputEvent<EventTarget>) => this.stringToConvert = value;

    render(): React$Node {
        return (
            <Card>
                <CardContent>
                    <TextField variant="outlined"
                               margin="dense"
                               helperText="Enter query in format: 1 USD in RUB"
                               onChange={this.onChange}
                               value={this.stringToConvert}
                               autoFocus
                    />
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary">
                        Convert
                    </Button>
                </CardActions>
            </Card>);
    }
}

export default Converter;
