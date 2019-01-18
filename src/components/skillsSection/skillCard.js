import React from 'react';
import Grid from '@material-ui/core/Grid';
import { PieChart } from 'react-easy-chart';

export default props => {
  let customStyle = props.customStyle;
  return (
    <Grid item lg={4} md={4} sm={6} xs={12} className="feature-box-container">
      <div className="feature-box">
        <i className={props.icon} />
        <h3 style={{ color: props.color }} className="small-heading">
          {props.skill}
        </h3>
        <p className="donut-chart-percent">{props.percent}%</p>
        <PieChart
          styles={{ '.pie-chart-slice': customStyle }}
          size={150}
          innerHoleSize={125}
          data={[
            { key: 'A', value: props.percent, color: props.color },
            { key: 'B', value: 100 - props.percent, color: 'transparent' }
          ]}
        />
      </div>
    </Grid>
  );
};
