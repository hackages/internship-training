import React, { useState, useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { SnackbarContext } from "../App";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';


export const SimpleSnackbar = () => {

  const { snackBarState } = useContext(SnackbarContext);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackBarState.show}
        autoHideDuration={1000}
        message={snackBarState.text}
      />

    </div>
  );
}
