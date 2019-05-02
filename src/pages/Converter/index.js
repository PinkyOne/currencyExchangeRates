// @flow

import React, {Component} from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";

@observer
class Converter extends Component {
    @observable string: string = '';

    render(): React$Node {
        const {string} = this;
        return (<div>
            <div>{string}</div>
            <input onChange={this.onChange}/>
        </div>);
    }

    onChange = ({target: {value}}: SyntheticEvent) => this.string = value;
}

export default Converter;
