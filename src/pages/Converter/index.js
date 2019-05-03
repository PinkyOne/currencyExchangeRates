// @flow

import React, {Component} from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";
import Button from '@material-ui/core/Button';

type Props = {};

@observer
class Converter extends Component<Props> {
    @observable string: string = '';

    onChange = ({target: {value}}: SyntheticInputEvent<EventTarget>) => this.string = value;

    render(): React$Node {
        return (
            <div>
                <input onChange={this.onChange}/>
                <Button variant="contained" color="primary">
                    Convert
                </Button>
            </div>);
    }
}

export default Converter;
