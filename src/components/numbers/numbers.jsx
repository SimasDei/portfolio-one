import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import items from './numbers.data';

const numbers = () => {
  return (
    <section id='numbers' className='numbers-section'>
      <Paper style={{ height: '100%', width: '90%', margin: '0 auto' }}>
        <h2 className='heading-secondary'>statistics</h2>
        <Grid
          container
          spacing={1}
          alignItems='center'
          justify='center'
          style={{ minHeight: '25rem' }}
        >
          {items.map(item => (
            <Grid key={item.number} item xs>
              <div className='square-item'>
                <div className='square-inner-container'>
                  <div className='square-content'>
                    <div className='square-icon'>
                      <i className={item.icon} />
                    </div>
                    <h2>{item.number}</h2>
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </section>
  );
};

export default numbers;
