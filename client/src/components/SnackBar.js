import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function SnackBar(props) {
    return (
        <div>
            <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={props.openSnack}
        autoHideDuration={3000}
        onClose={props.handleSnackClose}
        message="Unable to Delete! Todo is Incomplete."
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={()=>{props.handleClickOpen();props.handleSnackClose();}}>
              Mark As Complete
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={props.handleSnackClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
        </div>
    );
}

export default SnackBar;