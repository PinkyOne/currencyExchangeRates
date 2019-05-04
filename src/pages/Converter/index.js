// @flow

import React, {Component} from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";

import {Card, CardContent} from "components/Card";

import {FormWrapper} from "./styles";

type Props = {};

@observer
class Converter extends Component<Props> {
    @observable string: string = '';

    onChange = ({target: {value}}: SyntheticInputEvent<EventTarget>) => this.string = value;

    render(): React$Node {
        return (
            <Card>
                <CardContent>
                    <FormWrapper>
                        <TextField variant="outlined" margin="dense" onChange={this.onChange}/>
                        <Button variant="contained" color="primary">
                            Convert
                        </Button>
                    </FormWrapper>
                </CardContent>
            </Card>);
    }
}

export default Converter;
