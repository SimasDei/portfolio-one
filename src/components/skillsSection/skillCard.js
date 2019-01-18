import React from 'react';
import Grid from '@material-ui/core/Grid';
import { PieChart } from 'react-easy-chart';

export default props => {
  return (
    <Grid item lg={4} md={4} sm={6} xs={12} className="feature-box-container">
      <div className="feature-box">
        <i className={props.icon} />
        <h3 style={{ color: props.color }} className="small-heading">
          {props.skill}
        </h3>

        <PieChart
          size={150}
          innerHoleSize={100}
          data={[
            { key: 'A', value: 300, color: props.color },
            { key: 'B', value: 60, color: 'white' }
          ]}
        />
      </div>
    </Grid>
  );
};
