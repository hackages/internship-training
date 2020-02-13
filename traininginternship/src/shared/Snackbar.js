import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';


export const SimpleSnackbar = () => {

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'rigth',
        }}
        open={true}
        message="You are browsing a dev environment."
      />

    </div>
  );
};
