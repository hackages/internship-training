import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { SnackbarContext } from "../App";

export const SimpleSnackbar = () => {
  const [open, setOpen] = useState(false);

  const snackbarContext = useContext(SnackbarContext);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackbarContext.show}
        autoHideDuration={1000}
        onClose={handleClose}
        message={snackbarContext.text}
      />
    </div>
  );
}
