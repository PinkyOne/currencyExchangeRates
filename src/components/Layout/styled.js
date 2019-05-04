import styled from 'styled-components';
import {styled as mStyled} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

export const Content = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CustomPaper = mStyled(Paper)({
    width: 600,
    height: 500,
});
