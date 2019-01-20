import React from 'react';
import Grid from '@material-ui/core/Grid';

const Project = () => {
  return (
    <Grid className="project-item" item xs>
      <div className="project-card">
        <div className="card-side card-side-front">
          <h3>Bookaroo</h3>
        </div>
        <div className="card-side card-side-back" />
      </div>
    </Grid>
  );
};

export default Project;
