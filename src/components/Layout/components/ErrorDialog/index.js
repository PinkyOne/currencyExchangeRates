// @flow

import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from './components/DialogTitle';
import DialogContent from './components/DialogContent';
import DialogActions from './components/DialogActions';


export type ErrorDialogProps = {
    open: boolean,
    title?: string,
    content?: string,
    actionLabel?: string,
    onClose?: () => void,
    action?: () => void | Promise<void>,
};

const ErrorDialog = ({open, title, content, actionLabel, onClose, action}: ErrorDialogProps) => (
    <Dialog
        onClose={onClose}
        open={open}
    >
        <DialogTitle onClose={onClose} title={title}/>
        <DialogContent>
            <Typography gutterBottom>
                {content}
            </Typography>
        </DialogContent>
        <DialogActions>
            <Button onClick={action} color="primary">
                {actionLabel}
            </Button>
        </DialogActions>
    </Dialog>
);

export default ErrorDialog;