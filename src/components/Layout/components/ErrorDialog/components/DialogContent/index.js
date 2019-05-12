import { withStyles } from '@material-ui/core/styles';
import MuiDialogContent from '@material-ui/core/DialogContent';

const DialogContent = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing.unit * 2,
        minWidth: 250
    },
}))(MuiDialogContent);

export default DialogContent;
