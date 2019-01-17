import React from 'react';
import Grid from '@material-ui/core/Grid';
import SkillCard from './skillCard';

export default () => {
  return (
    <section id="skills" className="skillsSection">
      <Grid container className="skillsContainer">
        <SkillCard icon="fab fa-html5 fa-5x" skill="HTML" color="orange" />

        <SkillCard icon="fab fa-css3 fa-5x" skill="CSS" color="blue" />

        <SkillCard icon="fab fa-js-square fa-5x" skill="JS" color="yellow" />

        <SkillCard icon="fab fa-react fa-5x" skill="REACT" color="blue" />

        <SkillCard icon="fab fa-node fa-5x" skill="NODE" color="green" />
      </Grid>
    </section>
  );
};
