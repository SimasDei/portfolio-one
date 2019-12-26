import React from 'react';

import './footer.scss';

const footer = () => {
  return (
    <footer className='footer' id='footer'>
      <h2 className='footer-heading'>contact me</h2>
      <div className='footer-container'>
        <ul className='footer-list'>
          <li className='footer-item'>
            <i className='footer-icon fab fa-linkedin fa-3x' />
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='footer-link'
              href='https://linkedin.com/in/SimasDei'
            >
              linkedin
            </a>
            <p className='footer-paragraph'>linkedin.com/in/SimasDei</p>
          </li>
          <li className='footer-item'>
            <i className='footer-icon fab fa-github fa-3x' />
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='footer-link'
              href='https://github.com/SimasDei'
            >
              github
            </a>
            <p className='footer-paragraph'>github.com/SimasDei</p>
          </li>
          <li className='footer-item'>
            <i className='footer-icon fas fa-envelope-open fa-3x' />
            <a rel='noopener noreferrer' className='footer-link' href='mailto:simas@simas-dei.com'>
              email
            </a>
            <p className='footer-paragraph'>simas@simas-dei.com</p>
          </li>
          <li className='footer-item'>
            <i className='footer-icon fas fa-phone fa-3x' />
            <a rel='noopener noreferrer' className='footer-link' href='#contacts'>
              Phone
            </a>
            <p className='footer-paragraph'>+37066366218</p>
          </li>
        </ul>
      </div>
      <h5 className='footer-copyright'>&copy; 2019 Simas-Dei.com. Made and hosted by: Simas Dei</h5>
    </footer>
  );
};

export default footer;
