import React from 'react';
import Grid from '@material-ui/core/Grid';
import SkillCard from './skillCard';
import Typed from 'react-typed';

const style = {
  stroke: 'none'
};

export default () => {
  return (
    <section id="skills" className="skillsSection">
      <Typed
        className="skills-heading"
        strings={['SKILLS']}
        loop
        typeSpeed={80}
        backSpeed={80}
      />

      <Grid container className="skillsContainer">
        <SkillCard
          icon="fab fa-html5 fa-5x"
          skill="HTML"
          percent={98}
          customStyle={style}
          color="#dd4b25"
        />

        <SkillCard
          icon="fab fa-css3 fa-5x"
          skill="CSS"
          customStyle={style}
          color="#146eb0"
          percent={86}
        />

        <SkillCard
          icon="fab fa-js-square fa-5x"
          skill="JS"
          customStyle={style}
          color="#efd81d"
          percent={82}
        />

        <SkillCard
          icon="fab fa-react fa-5x"
          skill="REACT"
          color="#5ed3f3"
          customStyle={style}
          percent={90}
        />

        <SkillCard
          icon="fab fa-node fa-5x"
          skill="NODE"
          color="#71a761"
          customStyle={style}
          percent={74}
        />
        <SkillCard
          icon="fab fa-php fa-5x"
          skill="PHP"
          color="#7377ad"
          customStyle={style}
          percent={63}
        />
        <SkillCard
          icon="fas fa-database fa-5x"
          skill="SQL/noSQL"
          color="#43a84e"
          customStyle={style}
          percent={68}
        />
        <SkillCard
          icon="fab fa-linux fa-5x"
          skill="LINUX"
          color="#dbdbdb"
          customStyle={style}
          percent={79}
        />
      </Grid>
      <div className="adobe">
        <img src={require('../../assets/Illustrator.svg')} alt="Illustrator" />
        <img src={require('../../assets/Lightroom.svg')} alt="Lightroom" />
        <img src={require('../../assets/Photoshop.svg')} alt="Photoshop" />
        <img
          src={require('../../assets/After Effects.svg')}
          alt="after effects"
        />
        <img
          src={require('../../assets/Premiere Pro.svg')}
          alt="Premiere Pro"
        />
      </div>
    </section>
  );
};
