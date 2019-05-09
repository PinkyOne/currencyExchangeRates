import {styled as mStyled} from "@material-ui/styles";
import Toolbar from '@material-ui/core/Toolbar';
import styled from "styled-components";

export const StyledToolbar = mStyled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
});

export const Controls = styled.div`
    display: flex;
`;