// @flow

import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

export type ErrorDialogProps = {
    open: boolean,
    title: string,
    content: string,
    actionLabel: string,
    onClose: () => void,
    action: () => void,
};

const ErrorDialog = ({open, title, content, actionLabel, onClose, action}: ErrorDialogProps) => (
    <Dialog
        onClose={onClose}
        open={open}
    >
        <DialogTitle>
            {title}
        </DialogTitle>
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