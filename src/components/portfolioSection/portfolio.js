import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typed from 'react-typed';
import Project from './project';

const websites = {
  natours: {
    title: 'Natours',
    description: 'Advanced SASS implementation',
    github: 'https://github.com/SimasDei/udemy-css-one',
    img: require('../../assets/webScreens/natoursToo.png'),
    fsimage: require('../../assets/fullWebScreens/natours-fullScreen.png')
  },
  bookaroo: {
    title: 'Bookaroo',
    description: 'Mongodb React Express Node full stack application',
    github: 'https://github.com/SimasDei/bookaroo-client',
    img: require('../../assets/webScreens/bookarooToo.png'),
    fsimage: require('../../assets/fullWebScreens/bookaroo.png')
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
          fsImage={websites.natours.fsimage}
          github={websites.natours.github}
        />
        <Project
          title={websites.bookaroo.title}
          description={websites.bookaroo.description}
          image={websites.bookaroo.img}
          fsImage={websites.bookaroo.fsimage}
          github={websites.bookaroo.github}
        />
      </Grid>
    </section>
  );
};
export default Portfolio;
