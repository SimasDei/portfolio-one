import React from 'react';

import laptop from '../../assets/images/laptop.png';

const MainProject = ({ project: { title, tech, image } }) => {
  return (
    <div className='main-project'>
      <h2 className='main-project__title'>{title}</h2>
      <div className='main-project__laptop' style={{ background: `url(${laptop})` }}>
        <div className='main-project__gif'>
          <img src={image} alt='project animation' />
        </div>
      </div>
      <p>{tech}</p>
    </div>
  );
};

export default MainProject;
