import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { SnackbarContext } from "../App";


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
};
