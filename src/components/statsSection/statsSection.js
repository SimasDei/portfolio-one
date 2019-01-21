import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typed from 'react-typed';

import Aux from '../../hoc/auxilary';

const StatsSection = () => {
  const course = [
    {
      img: require('../../assets/courses/sass-course.PNG'),
      title: 'ADVANCED CSS AND SASS',
      url: 'https://www.udemy.com/advanced-css-and-sass/',
      cols: 2
    },
    {
      img: require('../../assets/webScreens/bookarooToo.png'),
      title: 'Image',
      cols: 1
    },
    {
      img: require('../../assets/webScreens/MERN-recipe-app.png'),
      title: 'Image',
      cols: 1
    },
    {
      img: require('../../assets/webScreens/natours.PNG'),
      title: 'image',
      cols: 2
    }
  ];

  return (
    <Aux>
      <div style={{ minHeight: '20rem', overflow: 'hidden' }}>
        <Typed
          className="stats-heading"
          strings={['Statistics and Accomplishments']}
          typeSpeed={60}
          backSpeed={70}
          loop
        />
      </div>
      <section className="stats-section">
        <div className="bg-video">
          <video autoPlay muted loop className="bg-video-content">
            <source
              src={require('../../assets/The.Great.Gatsby.mp4')}
              type="video/mp4"
            />
            Browser not supported :(
          </video>
        </div>
        <Grid
          className="stats-container"
          container
          justify="space-evenly"
          alignItems="center"
        />
      </section>
    </Aux>
  );
};

export default StatsSection;
