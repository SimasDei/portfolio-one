import React from 'react';
import Grid from '@material-ui/core/Grid';

export default () => {
  return (
    <Grid container>
      <Grid item>
        <div className="feature-box">
          <i className="fab fa-html5" />
          <h3 className="small-heading">HTML</h3>
          <p>Flip me!</p>
        </div>
      </Grid>
    </Grid>
  );
};
