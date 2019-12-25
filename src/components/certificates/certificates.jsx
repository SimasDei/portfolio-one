import React from 'react';
import ImageGallery from 'react-image-gallery';

import data from 'components/certificates/certificates.data';

import './certificates.scss';

const certificates = data.map(certificate => ({
  original: certificate.image,
  thumbnail: certificate.image,
  originalClass: 'certificate-image',
  originlTitle: certificate.title,
}));

const Certificates = () => {
  return (
    <section id='certificates' className='certificate-section'>
      <h3 className='stats-heading'>certificates</h3>
      <div className='certificate-item'>
          <ImageGallery items={certificates} originalCla={'certificate-image'} />
      </div>
    </section>
  );
};

export default Certificates;
