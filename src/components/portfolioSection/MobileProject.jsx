import React from 'react';

import MobileFrame from '../../assets/images/phone-frame.png';

const MobileProject = () => {
  return (
    <div className='mobile-project'>
      <div className='mobile-project__frame' style={{ backgroundImage: MobileFrame }}>
        <div className='mobile-project__gif'></div>
      </div>
    </div>
  );
};

export default MobileProject;
