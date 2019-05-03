// @flow

import React, {Component} from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";
import Button from '@material-ui/core/Button';

type Props = {};

@observer
class Converter extends Component<Props> {
    @observable string: string = '';

    render(): React$Node {
        const {string} = this;
        return (<div>
            <div>{string}</div>
            <input onChange={this.onChange}/>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </div>);
    }

    onChange = ({target: {value}}: SyntheticInputEvent<EventTarget>) => this.string = value;
}

export default Converter;
