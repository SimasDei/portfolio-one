import React from 'react';

import MobileFrame from '../../assets/images/phone-frame.png';

const MobileProject = ({ project: { title, tech, image } }) => {
  return (
    <div className='mobile-project'>
      <h2 className='main-project__title'>{title}</h2>
      <div className='mobile-project__frame' style={{ backgroundImage: MobileFrame }}>
        <div className='mobile-project__gif'></div>
      </div>
      <p className='main-project__icons'>
        {tech.map(icon => (
          <i key={icon} className={icon}></i>
        ))}
      </p>
    </div>
  );
};

export default MobileProject;
