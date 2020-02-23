import React from 'react';

const MainProject = ({ project: { title, tech, image, url } }) => {
  return (
    <div className='main-project'>
      <h2 className='main-project__title'>{title}</h2>
      <a className='main-project__gif' href={url} target='_blank' rel='noopener noreferrer'>
        <img src={image} alt='project animation' />
      </a>
      <p className='main-project__icons'>
        {tech.map(icon => (
          <i key={icon} className={icon}></i>
        ))}
      </p>
    </div>
  );
};

export default MainProject;
