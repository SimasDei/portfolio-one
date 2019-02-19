import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typed from 'react-typed';
import Grid from '@material-ui/core/Grid';

export default () => {
  return (
    <section id="about" className="aboutSection">
      <Paper elevation={20} className="aboutPaper">
        <Typed
          className="heading-secondary"
          strings={['A little bit about me.']}
        />
        <div className="u-margin-bottom" />

        <Grid container={true} spacing={24} alignItems={'center'}>
          <Grid item xs={12} sm={12} md={6}>
            <div className="composition">
              <img
                src={require('../../assets/profile.jpeg')}
                alt="profile"
                className="composition-photo"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className="aboutText">
            <h3 className="small-heading">
              Very lucky to have found what I truly love doing.
            </h3>
            <p className="paragraph">
              You know, you truly enjoy something, when you begin getting angry
              when there aren't enough hours in the day to keep working at it.
            </p>

            <p className="paragraph">
              Learning and improving my competence brings me happiness, so
              staying motivated is extremely easy. The more, the better.
            </p>

            <p className="paragraph">
              Been coding everyday since I have started. Stopping isn't even
              remotely a possibility.
            </p>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
};
