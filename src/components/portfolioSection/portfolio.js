import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typed from 'react-typed';
import Project from './project';

const websites = {
  natours: {
    title: 'Natours',
    description: 'Advanced SASS implementation',
    img: require('../../assets/natours.PNG')
  },
  bookaroo: {
    title: 'Bookaroo',
    description: 'Mongodb React Express Node full stack application',
    img: require('../../assets/bookaroo.png')
  }
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <Typed
        className="portfolio-heading"
        strings={['PORTFOLIO']}
        loop
        typeSpeed={80}
        backSpeed={80}
      />
      <Grid
        container
        justify="center"
        alignItems="center"
        className="portfolio-container"
        direction="row"
      >
        <Project
          title={websites.natours.title}
          description={websites.natours.description}
          image={websites.natours.img}
        />
        <Project
          title={websites.bookaroo.title}
          description={websites.bookaroo.description}
          image={websites.bookaroo.img}
        />
        <Project
          title={websites.natours.title}
          description={websites.natours.description}
          image={require('../../assets/natoursToo.png')}
        />
        <Project
          title={websites.bookaroo.title}
          description={websites.bookaroo.description}
          image={require('../../assets/bookarooToo.png')}
        />
      </Grid>
    </section>
  );
};
export default Portfolio;
