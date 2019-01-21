import React from 'react';
// import Grid from '@material-ui/core/Grid';
import Typed from 'react-typed';

import Aux from '../../hoc/auxilary';

const StatsSection = () => {
  const course1 = [
    {
      img: require('../../assets/courses/sass-course.PNG'),
      title: 'ADVANCED CSS AND SASS',
      url: 'https://www.udemy.com/advanced-css-and-sass/'
    },
    {
      img: require('../../assets/courses/bootstrap-course.PNG'),
      title: 'BOOTSTRAP v4.1',
      url: 'https://www.udemy.com/advanced-css-and-sass/'
    },
    {
      img: require('../../assets/courses/js-course-one.PNG'),
      title: 'JAVASCRIPT ONE',
      url: 'https://www.udemy.com/advanced-css-and-sass/'
    }
  ];

  const course2 = [
    {
      img: require('../../assets/courses/php-course.PNG'),
      title: 'MVC in PHP',
      url: 'https://www.udemy.com/advanced-css-and-sass/'
    },

    {
      img: require('../../assets/courses/materialize-course.PNG'),
      title: 'MATERIALIZE CSS',
      url: 'https://www.udemy.com/advanced-css-and-sass/'
    },
    {
      img: require('../../assets/courses/mongo-course.PNG'),
      title: 'MONGO DB',
      url: 'https://www.udemy.com/advanced-css-and-sass/'
    },
    {
      img: require('../../assets/courses/node-course.PNG'),
      title: 'NODE JS',
      url: 'https://www.udemy.com/advanced-css-and-sass/'
    }
  ];

  const course3 = [
    {
      img: require('../../assets/courses/react-course-two.PNG'),
      title: 'REACT TWO',
      url: 'https://www.udemy.com/advanced-css-and-sass/'
    },
    {
      img: require('../../assets/courses/react-course-three.PNG'),
      title: 'REACT THREE',
      url: 'https://www.udemy.com/advanced-css-and-sass/'
    },
    {
      img: require('../../assets/courses/js-course-two.PNG'),
      title: 'JAVASCRIPT TWO',
      url: 'https://www.udemy.com/advanced-css-and-sass/'
    }
  ];

  const course4 = [
    {
      img: require('../../assets/courses/vue-course.PNG'),
      title: 'VUE JS ',
      url: 'https://www.udemy.com/advanced-css-and-sass/'
    },
    {
      img: require('../../assets/courses/wordpress-course.PNG'),
      title: 'WORDPRESS ',
      url: 'https://www.udemy.com/advanced-css-and-sass/'
    },
    {
      img: require('../../assets/courses/react-course-one.PNG'),
      title: 'REACT ONE',
      url: 'https://www.udemy.com/advanced-css-and-sass/'
    }
  ];

  return (
    <Aux>
      <div style={{ minHeight: '20rem', overflow: 'hidden' }}>
        <Typed
          className="stats-heading"
          strings={['Courses Completed']}
          typeSpeed={50}
          backSpeed={40}
          loop
        />
      </div>
      <section id="stats" className="stats-section">
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
                <div className="course-item" key={Math.random(0, 1000)}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: '100%' }}
                  />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="course-link"
                    href={item.url}
                  >
                    <i className="course-link-icon fas fa-external-link-alt fa-2x" />
                  </a>
                  <p className="course-title">{item.title}</p>
                </div>
              ))}
            </div>

            <div className="stats-column">
              {course2.map(item => (
                <div className="course-item" key={Math.random(0, 1000)}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: '100%' }}
                  />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="course-link"
                    href={item.url}
                  >
                    <i className="course-link-icon fas fa-external-link-alt fa-2x" />
                  </a>
                  <p className="course-title">{item.title}</p>
                </div>
              ))}
            </div>

            <div className="stats-column">
              {course3.map(item => (
                <div className="course-item" key={Math.random(0, 1000)}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: '100%' }}
                  />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="course-link"
                    href={item.url}
                  >
                    <i className="course-link-icon fas fa-external-link-alt fa-2x" />
                  </a>
                  <p className="course-title">{item.title}</p>
                </div>
              ))}
            </div>

            <div className="stats-column">
              {course4.map(item => (
                <div key={Math.random(0, 1000)} className="course-item">
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: '100%' }}
                  />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="course-link"
                    href={item.url}
                  >
                    <i className="course-link-icon fas fa-external-link-alt fa-2x" />
                  </a>
                  <p className="course-title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Aux>
  );
};

export default StatsSection;
