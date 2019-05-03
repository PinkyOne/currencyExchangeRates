import React, {Component} from "react";
import {styled} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

const CustomPaper = styled(Paper)({
    width: 200,
    height: 500,
});

export default class Layout extends Component {
    render() {
        const {children} = this.props;
        return (
            <CustomPaper elevation={1}>
                {children}
            </CustomPaper>);
    }
}
