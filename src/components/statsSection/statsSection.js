import React from 'react';
// import Grid from '@material-ui/core/Grid';
import Typed from 'react-typed';

import Aux from '../../hoc/auxilary';

const StatsSection = () => {
  const course1 = [
    {
      img: require('../../assets/courses/sass-course.PNG'),
      title: 'ADVANCED CSS AND SASS',
      url: 'https://www.udemy.com/advanced-css-and-sass/',
      cols: 2
    },
    {
      img: require('../../assets/webScreens/bookarooToo.png'),
      title: 'Image',
      cols: 1
    },
    {
      img: require('../../assets/webScreens/MERN-recipe-app.png'),
      title: 'Image',
      cols: 1
    },
    {
      img: require('../../assets/webScreens/natours.PNG'),
      title: 'image',
      cols: 2
    },
    {
      img: require('../../assets/webScreens/MERN-recipe-app.png'),
      title: 'Image',
      cols: 1
    },
    {
      img: require('../../assets/webScreens/MERN-recipe-app.png'),
      title: 'Image',
      cols: 1
    }
  ];

  const course2 = [
    {
      img: require('../../assets/courses/sass-course.PNG'),
      title: 'ADVANCED CSS AND SASS',
      url: 'https://www.udemy.com/advanced-css-and-sass/',
      cols: 2
    },
    {
      img: require('../../assets/webScreens/bookarooToo.png'),
      title: 'Image',
      cols: 1
    },
    {
      img: require('../../assets/fullWebScreens/natours-fullScreen.png'),
      title: 'Image',
      cols: 1
    },
    {
      img: require('../../assets/webScreens/MERN-recipe-app.png'),
      title: 'Image',
      cols: 1
    },
    {
      img: require('../../assets/webScreens/MERN-recipe-app.png'),
      title: 'Image',
      cols: 1
    },
    {
      img: require('../../assets/webScreens/MERN-recipe-app.png'),
      title: 'Image',
      cols: 1
    }
  ];

  const course3 = [
    {
      img: require('../../assets/courses/sass-course.PNG'),
      title: 'ADVANCED CSS AND SASS',
      url: 'https://www.udemy.com/advanced-css-and-sass/',
      cols: 2
    },
    {
      img: require('../../assets/webScreens/bookarooToo.png'),
      title: 'Image',
      cols: 1
    },
    {
      img: require('../../assets/webScreens/MERN-recipe-app.png'),
      title: 'Image',
      cols: 1
    },
    {
      img: require('../../assets/webScreens/MERN-recipe-app.png'),
      title: 'Image',
      cols: 1
    },
    {
      img: require('../../assets/webScreens/MERN-recipe-app.png'),
      title: 'Image',
      cols: 1
    }
  ];

  return (
    <Aux>
      <div style={{ minHeight: '20rem', overflow: 'hidden' }}>
        <Typed
          className="stats-heading"
          strings={['Statistics and Accomplishments']}
          typeSpeed={50}
          backSpeed={40}
          loop
        />
      </div>
      <section className="stats-section">
        <div className="bg-video">
          <video autoPlay muted loop className="bg-video-content">
            <source
              src={require('../../assets/The.Great.Gatsby.mp4')}
              type="video/mp4"
            />
            Browser not supported :(
          </video>
        </div>
        <div className="stats-container">
          <div className="stats-row">
            <div className="stats-column">
              {course1.map(item => (
                <img
                  key={Math.random(0, 1000)}
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%' }}
                />
              ))}
            </div>

            <div className="stats-column">
              {course2.map(item => (
                <img
                  key={Math.random(0, 1000)}
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%' }}
                />
              ))}
            </div>

            <div className="stats-column">
              {course3.map(item => (
                <img
                  key={Math.random(0, 1000)}
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%' }}
                />
              ))}
            </div>

            <div className="stats-column">
              {course1.map(item => (
                <img
                  key={Math.random(0, 1000)}
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Aux>
  );
};

export default StatsSection;
