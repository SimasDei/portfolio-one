import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typed from 'react-typed';
import Project from './project';

const websites = {
  natours: {
    modalId: 'modal1',
    title: 'Natours',
    description: 'Advanced SASS implementation',
    github: 'https://github.com/SimasDei/udemy-css-one',
    img: require('../../assets/webScreens/natours.PNG'),
    fsimage: require('../../assets/fullWebScreens/natours-fullScreen.png')
  },
  bookaroo: {
    modalId: 'modal2',
    title: 'Bookaroo',
    description: 'Mongodb React Express Node full stack application',
    github: 'https://github.com/SimasDei/bookaroo-client',
    img: require('../../assets/webScreens/bookarooToo.png'),
    fsimage: require('../../assets/fullWebScreens/bootstrap-one.png')
  },
  bootstrap4: {
    modalId: 'modal3',
    title: 'Bootstrap',
    description: 'Made with Bootstrap v4.1',
    github: 'https://github.com/SimasDei/bootstrap-one',
    img: require('../../assets/webScreens/bootstrap-one.png'),
    fsimage: require('../../assets/fullWebScreens/bookaroo.png')
  },
  burgerBuilder: {
    modalId: 'modal4',
    title: 'Burger Builder',
    description: 'Project made with the MERN stack',
    github: 'https://github.com/SimasDei/bookaroo-client',
    img: require('../../assets/webScreens/burger-builder.png'),
    fsimage: require('../../assets/fullWebScreens/burger-builder.png')
  },
  meanStack: {
    modalId: 'modal5',
    title: 'MEAN stack',
    description: 'Made with Angular Node Express and MongoDB',
    github: 'https://github.com/SimasDei/bookaroo-client',
    img: require('../../assets/webScreens/MEAN-stack-one.png'),
    fsimage: require('../../assets/fullWebScreens/MEAN-stack-one.png')
  },
  goodReads: {
    modalId: 'modal6',
    title: 'Good Reads',
    description: 'MERN stack app made using Good Reads API',
    github: 'https://github.com/SimasDei/bookaroo-client',
    img: require('../../assets/webScreens/MERN-goodreads-api.png'),
    fsimage: require('../../assets/fullWebScreens/MERN-goodreads-api.png')
  },
  reactRecipes: {
    modalId: 'modal7',
    title: 'React Recipes',
    description: 'MERN stack app for recipes',
    github: 'https://github.com/SimasDei/bookaroo-client',
    img: require('../../assets/webScreens/MERN-recipe-app.png'),
    fsimage: require('../../assets/fullWebScreens/MERN-recipe-app.png')
  }
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <Typed
        className="portfolio-heading"
        strings={['PORTFOLIO']}
        loop
        typeSpeed={50}
        backSpeed={30}
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
          modalId={websites.natours.modalId}
        />
        <Project
          title={websites.bookaroo.title}
          description={websites.bookaroo.description}
          image={websites.bookaroo.img}
          fsImage={websites.bookaroo.fsimage}
          github={websites.bookaroo.github}
          modalId={websites.bookaroo.modalId}
        />
        <Project
          title={websites.bootstrap4.title}
          description={websites.bootstrap4.description}
          image={websites.bootstrap4.img}
          fsImage={websites.bootstrap4.fsimage}
          github={websites.bootstrap4.github}
          modalId={websites.bootstrap4.modalId}
        />
        <Project
          title={websites.burgerBuilder.title}
          description={websites.burgerBuilder.description}
          image={websites.burgerBuilder.img}
          fsImage={websites.burgerBuilder.fsimage}
          github={websites.burgerBuilder.github}
          modalId={websites.burgerBuilder.modalId}
        />
        <Project
          title={websites.meanStack.title}
          description={websites.meanStack.description}
          image={websites.meanStack.img}
          fsImage={websites.meanStack.fsimage}
          github={websites.meanStack.github}
          modalId={websites.meanStack.modalId}
        />
        <Project
          title={websites.goodReads.title}
          description={websites.goodReads.description}
          image={websites.goodReads.img}
          fsImage={websites.goodReads.fsimage}
          github={websites.goodReads.github}
          modalId={websites.goodReads.modalId}
        />
        <Project
          title={websites.reactRecipes.title}
          description={websites.reactRecipes.description}
          image={websites.reactRecipes.img}
          fsImage={websites.reactRecipes.fsimage}
          github={websites.reactRecipes.github}
          modalId={websites.reactRecipes.modalId}
        />
      </Grid>
    </section>
  );
};
export default Portfolio;
