import React from 'react';
import Typed from 'react-typed';

export default () => {
  return (
    <div className="videoOverlay">
      <div className="titleMessage">
        <div className="heading">
          <p className="main">SIMAS DEI</p>
          <div className="sub">
            <Typed
              strings={[
                'Full Stack Web Developer',
                'Teacher',
                'Student',
                'Obsessive learner',
                'Specialize in: JavaScript',
                'Specialize in: React',
                'Specialize in: noSQL',
                'Specialize in: Linux devOps'
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
};
