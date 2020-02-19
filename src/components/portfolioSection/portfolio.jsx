import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typed from 'react-typed';

import { data } from './portfolio.data';
import mylimiausia from '../../assets/projectGifs/mylimiausia.gif';
import reflectus from '../../assets/projectGifs/reflectus--web.gif';
import './MainProject.styles.css';

import Project from './project';
import MainProject from './MainProject';

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

const renderMainProjects = () => {
  const projects = [
    {
      title: 'Mylimiausia',
      tech: ['fab fa-vuejs fa-5x', 'fab fa-php fa-5x'],
      image: mylimiausia,
    },
    {
      title: 'Reflectus',
      tech: ['fab fa-vuejs fa-5x', 'fab fa-php fa-5x'],
      image: reflectus,
    },
  ];

  return projects.map(project => <MainProject key={project.title} project={project} />);
};

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio-section'>
      <Typed className='portfolio-heading' strings={['PORTFOLIO']} />
      <Paper elevation={5} className='main-projects'>
        {renderMainProjects()}
      </Paper>
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
