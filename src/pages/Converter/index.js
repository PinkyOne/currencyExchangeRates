import React, {Component} from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";

@observer
class Converter extends Component {
    @observable string;

    render() {
        return (<div>
            <div>{this.string}</div>
            <input onChange={this.onChange}/>
        </div>);
    }

    onChange = ({target: {value}}) => {
        return this.string = value;
    }
}

export default Converter;
