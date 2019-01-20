import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typed from 'react-typed';
import Project from './project';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <Typed
        className="portfolio-heading"
        strings={['PORTFOLIO']}
        loop
        typeSpeed={80}
        backSpeed={80}
      />
      <Grid
        container
        justify="center"
        alignItems="center"
        className="portfolio-container"
        direction="row"
      >
        <Project />
        <Project />
        <Project />
        <Project />
      </Grid>
    </section>
  );
};
export default Portfolio;
