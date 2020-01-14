import React from 'react';
import Paper from '@material-ui/core/Paper';

import './GithubGrid.scss';

import GridImage from '../../assets/images/github.png';

const GithubGrid = () => {
  return (
    <section className='git-grid'>
      <h3 className='stats-heading'>Github</h3>
      <Paper elevation={20} className='git-grid__container'>
        <img className='git-grid__image' src={GridImage} alt='github commit grid' />
      </Paper>
    </section>
  );
};

export default GithubGrid;
