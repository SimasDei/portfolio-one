import React from 'react';

const navigation = () => {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation-checkbox" id="navi-toggle" />
      <label className="navigation-button" htmlFor="navi-toggle">
        MENU
      </label>
      <div className="navigation-background"> </div>

      <div className="navigation-nav">
        <ul className="navigation-list">
          <li className="navigation-item">
            <a href="#about" className="navigation-link">
              About
            </a>
          </li>
          <li className="navigation-item">
            <a href="#skills" className="navigation-link">
              skills
            </a>
          </li>
          <li className="navigation-item">
            <a href="#stats" className="navigation-link">
              stats
            </a>
          </li>
          <li className="navigation-item">
            <a href="#top" className="navigation-link">
              top
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default navigation;
