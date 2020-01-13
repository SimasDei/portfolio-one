import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typed from 'react-typed';
import Project from './project';

import { data } from './portfolio.data';

/**
 * @todo - fix this.
 */

const renderProjects = () =>
  data.map(project => (
    <Project
      key={project.project}
      tite={project.project}
      description={project.data.description}
      image={project.data.img}
      fsImage={project.data.fsimage}
      github={project.data.github}
      modalId={project.data.modalId}
    />
  ));

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio-section'>
      <Typed className='portfolio-heading' strings={['PORTFOLIO']} />
      <Grid
        container
        justify='center'
        alignItems='center'
        className='portfolio-container'
        direction='row'
      >
        {renderProjects()}
      </Grid>
    </section>
  );
};
export default Portfolio;
