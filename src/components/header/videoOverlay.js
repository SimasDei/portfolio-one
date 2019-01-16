import React from 'react';
import Typed from 'react-typed';

export default () => {
  return (
    <div
      className="videoOverlay"
      style={{
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
      }}
    >
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
