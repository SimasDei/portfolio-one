import React from 'react';

const certificates = () => {
  return (
    <section id="certificates" className="certificate-section">
      <h3 className="stats-heading">certificates</h3>
      <div className="certificate-container">
        <div className="certificate-item">
          <img
            className="certificate-image"
            src={require('../../assets/certificates/baltic-one.png')}
            alt="Baltic Certificate One"
          />
        </div>
        <div className="certificate-item">
          <img
            className="certificate-image"
            src={require('../../assets/certificates/baltic-two.jpg')}
            alt="Baltic Certificate One"
          />
        </div>
      </div>
    </section>
  );
};

export default certificates;
