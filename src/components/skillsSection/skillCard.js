import React from 'react';
import Grid from '@material-ui/core/Grid';

export default props => {
  return (
    <Grid container>
      <Grid item>
        <div className="feature-box">
          <i className={props.icon} />
          <h3 style={{ color: props.color }} className="small-heading">
            {props.skill}
          </h3>
          <p>Flip me!</p>
        </div>
      </Grid>
    </Grid>
  );
};
