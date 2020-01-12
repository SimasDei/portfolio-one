import React from 'react';

import GridImage from '../../assets/images/github.png';

const GithubGrid = () => {
  return (
    <section className='git-grid'>
      <div className='git-grid__container'>
        <img className='git-grid__image' src={GridImage} alt='github commit grid' />
      </div>
    </section>
  );
};

export default GithubGrid;
