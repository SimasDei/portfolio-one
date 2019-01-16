import React from 'react';
import Aux from '../../hoc/auxilary';
import VideoOverlay from './videoOverlay';

const landing = () => {
  return (
    <Aux>
      <video autoPlay loop muted id="gatsbyVideo">
        <source src={require('../../assets/Technology.mp4')} type="video/mp4" />
      </video>

      <VideoOverlay />
    </Aux>
  );
};

export default landing;
