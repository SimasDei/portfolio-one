import React from 'react';
import Grid from '@material-ui/core/Grid';
import SkillCard from './skillCard';

const style = {
  backgroundImage: 'linear-gradient( to left, #1d976c, #0cc3db)',
  backgroundClip: 'text',
  backgroundColor: 'orangered',
  stroke: 'none'
};

export default () => {
  return (
    <section id="skills" className="skillsSection">
      <Grid container className="skillsContainer">
        <SkillCard
          icon="fab fa-html5 fa-5x"
          skill="HTML"
          percent={Math.floor(Math.random() * 100) + 1}
          customStyle={style}
          color={style.backgroundColor}
        />

        <SkillCard
          icon="fab fa-css3 fa-5x"
          skill="CSS"
          customStyle={style}
          percent={Math.floor(Math.random() * 100) + 1}
        />

        <SkillCard
          icon="fab fa-js-square fa-5x"
          skill="JS"
          color="yellow"
          percent={Math.floor(Math.random() * 100) + 1}
        />

        <SkillCard
          icon="fab fa-react fa-5x"
          skill="REACT"
          color="skyblue"
          percent={Math.floor(Math.random() * 100) + 1}
        />

        <SkillCard
          icon="fab fa-node fa-5x"
          skill="NODE"
          color="green"
          percent={Math.floor(Math.random() * 100) + 1}
        />
      </Grid>
    </section>
  );
};
