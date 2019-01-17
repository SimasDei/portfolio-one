import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typed from 'react-typed';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

export default () => {
  return (
    <section
      className="aboutSection"
      style={{ height: '500px', marginTop: '100vh' }}
    >
      <Paper elevation={20} className="aboutPaper">
        <Typed
          className="heading-secondary"
          strings={['A little bit about me.']}
          typeSpeed={60}
          backSpeed={70}
          loop
        />
        <div className="u-margin-bottom" />

        <Grid
          container={true}
          spacing={24}
          alignItems={'center'}
          justify={'center'}
        >
          <Grid item xs={12} sm={12} md={6}>
            <div className="composition">
              <img
                src={require('../../assets/profile.jpeg')}
                alt="profile"
                className="composition-photo"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <h3 className="small-heading">
              Very lucky to have found what I truly love doing.
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi
              fuga earum perspiciatis numquam ut voluptas distinctio, beatae
              culpa porro officiis tempora sint eveniet sapiente voluptatum
              voluptatem nesciunt minima corrupti?
            </p>

            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              placeat facilis! Neque unde molestiae possimus a incidunt harum
              asperiores, fugiat, quis eum natus deleniti tempora esse
              voluptates consectetur ipsum cum.
            </p>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
};
