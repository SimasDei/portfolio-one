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
    fsimage: require('../../assets/fullWebScreens/bookaroo.png')
  },
  bootstrap4: {
    modalId: 'modal3',
    title: 'Bootstrap',
    description: 'Made with Bootstrap v4.1',
    github: 'https://github.com/SimasDei/bootstrap-one',
    img: require('../../assets/webScreens/bootstrap-one.png'),
    fsimage: require('../../assets/fullWebScreens/bootstrap-one.png')
  },
  burgerBuilder: {
    modalId: 'modal4',
    title: 'Burger Builder',
    description: 'Project made with the MERN stack',
    github: 'https://github.com/SimasDei/udemy-react-burger-builder',
    img: require('../../assets/webScreens/burger-builder.png'),
    fsimage: require('../../assets/fullWebScreens/burger-builder.png')
  },
  meanStack: {
    modalId: 'modal5',
    title: 'MEAN stack',
    description: 'Made with Angular Node Express and MongoDB',
    github: 'https://github.com/SimasDei/MEAN-stack-one',
    img: require('../../assets/webScreens/MEAN-stack-one.png'),
    fsimage: require('../../assets/fullWebScreens/MEAN-stack-one.png')
  },
  goodReads: {
    modalId: 'modal6',
    title: 'Good Reads',
    description: 'MERN stack app made using Good Reads API',
    github: 'https://github.com/SimasDei/mern-stack-three',
    img: require('../../assets/webScreens/MERN-goodreads-api.png'),
    fsimage: require('../../assets/fullWebScreens/MERN-goodreads-api.png')
  },
  reactRecipes: {
    modalId: 'modal7',
    title: 'React Recipes',
    description: 'MERN stack app for recipes',
    github: 'https://github.com/SimasDei/baltic-js2course-22-fixed',
    img: require('../../assets/webScreens/MERN-recipe-app.png'),
    fsimage: require('../../assets/fullWebScreens/MERN-recipe-app.png')
  },
  budgetApp: {
    modalId: 'modal8',
    title: 'Budget App',
    description: 'Monthly budget application, made with vanilla JS',
    github: 'https://github.com/SimasDei/budget-app',
    img: require('../../assets/webScreens/budget-app.png'),
    fsimage: require('../../assets/fullWebScreens/budget-app.png')
  },
  weatherApp: {
    modalId: 'modal9',
    title: 'Weather App',
    description: 'Simple App made using vanilla JS and a weather API',
    github: 'https://github.com/SimasDei/weather-api-one',
    img: require('../../assets/webScreens/weather-app.png'),
    fsimage: require('../../assets/fullWebScreens/weather-app.png')
  },
  githubApp: {
    modalId: 'modal10',
    title: 'Github App',
    description: 'Search Profile App working with Github API, vanilla JS',
    github: 'https://github.com/SimasDei/github-api-one',
    img: require('../../assets/webScreens/github-app.png'),
    fsimage: require('../../assets/fullWebScreens/github-app.png')
  },
  hostingerFront: {
    modalId: 'modal11',
    title: 'Hostinger Front Page',
    description: 'Front Page made for Hostinger.com',
    github: 'https://github.com/SimasDei/task-frontend',
    img: require('../../assets/webScreens/hostinger-front.png'),
    fsimage: require('../../assets/fullWebScreens/hostinger-front.png')
  }
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <Typed className="portfolio-heading" strings={['PORTFOLIO']} />
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
        <Project
          title={websites.budgetApp.title}
          description={websites.budgetApp.description}
          image={websites.budgetApp.img}
          fsImage={websites.budgetApp.fsimage}
          github={websites.budgetApp.github}
          modalId={websites.budgetApp.modalId}
        />
        <Project
          title={websites.weatherApp.title}
          description={websites.weatherApp.description}
          image={websites.weatherApp.img}
          fsImage={websites.weatherApp.fsimage}
          github={websites.weatherApp.github}
          modalId={websites.weatherApp.modalId}
        />
        <Project
          title={websites.githubApp.title}
          description={websites.githubApp.description}
          image={websites.githubApp.img}
          fsImage={websites.githubApp.fsimage}
          github={websites.githubApp.github}
          modalId={websites.githubApp.modalId}
        />
        <Project
          title={websites.hostingerFront.title}
          description={websites.hostingerFront.description}
          image={websites.hostingerFront.img}
          fsImage={websites.hostingerFront.fsimage}
          github={websites.hostingerFront.github}
          modalId={websites.hostingerFront.modalId}
        />
      </Grid>
    </section>
  );
};
export default Portfolio;
