import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typed from 'react-typed';
import Project from './project';

import websites from './portfolio.data';

/**
 * @todo - fix this.
 */

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio-section'>
      <Typed className='portfolio-heading' strings={['PORTFOLIO']} />
      <Grid
        container
        justify='center'
        alignItems='center'
        className='portfolio-container'
        direction='row'
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
