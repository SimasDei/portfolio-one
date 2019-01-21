import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import { CardActionArea } from '@material-ui/core';

const Project = props => {
  return (
    <Grid className="project-container" item xs>
      <div className="project-item">
        <div className="project-card">
          <div className="card-side-front">
            <Card className="front-card">
              <CardMedia
                image={props.image}
                title="Please go away"
                style={{ height: '20rem' }}
              />
              <CardContent>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
              </CardContent>
            </Card>
          </div>
          <div className="card-side-back">
            <Card className="front-card">
              <CardActionArea
                href={`#${props.modalId}`}
                className="modal-trigger"
              >
                <CardMedia
                  className="card-back-image"
                  style={{
                    height: '20rem'
                  }}
                  image={props.fsImage}
                  title={props.description}
                />
              </CardActionArea>

              <CardContent style={{ textAlign: 'center' }}>
                <CardActions>
                  <div style={{ margin: '-2rem auto auto auto' }}>
                    <h2>Source Code</h2>
                    <a
                      href={props.github}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fab fa-github fa-3x github-icon" />
                    </a>
                  </div>
                </CardActions>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div id={props.modalId} className="modal">
        <div className="modal-content">
          <img
            src={props.fsImage}
            alt={props.description}
            className="fs-image"
          />
        </div>
      </div>
    </Grid>
  );
};

export default Project;
