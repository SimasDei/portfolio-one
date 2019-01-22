import React from 'react';
import Grid from '@material-ui/core/Grid';

const numbers = () => {
  const items = [
    {
      name: '?!',
      descripsh: '???!',
      icon: 'fa fas-nani'
    }
  ];

  return (
    <section id="numbers" className="numbers-section">
      <Grid
        container
        className="numbers-container"
        justify="center"
        wrap="wrap"
      >
        <Grid item xs>
          <h3>Hello There !</h3>
        </Grid>
        <Grid item xs>
          <h3>Hello There !</h3>
        </Grid>
        <Grid item xs>
          <h3>Hello There !</h3>
        </Grid>
        <Grid item xs>
          <h3>Hello There !</h3>
        </Grid>
        <Grid item xs>
          <h3>Hello There !</h3>
        </Grid>
      </Grid>
    </section>
  );
};

export default numbers;
