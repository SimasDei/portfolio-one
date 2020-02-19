import React from 'react';

const MainProject = ({ project: { title, tech, image } }) => {
  return (
    <div className='main-project'>
      <h2 className='main-project__title'>{title}</h2>
      <div className='main-project__gif'>
        <img src={image} alt='project animation' />
      </div>
      <p className='main-project__icons'>
        {tech.map(icon => (
          <i class={icon}></i>
        ))}
      </p>
    </div>
  );
};

export default MainProject;
