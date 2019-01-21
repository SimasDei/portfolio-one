import React from 'react';

const navigation = () => {
  let checked = () => {
    let checkbox = document.getElementById('navi-toggle');

    if (checkbox.checked) {
      return (checkbox.checked = false);
    }
  };

  return (
    <div className="navigation">
      <input type="checkbox" className="navigation-checkbox" id="navi-toggle" />
      <label className="navigation-button" htmlFor="navi-toggle">
        <span className="navigation-icon"> </span>
      </label>
      <div className="navigation-background"> </div>

      <div className="navigation-nav">
        <ul className="navigation-list">
          <li className="navigation-item">
            <a onClick={checked} href="#about" className="navigation-link">
              About
            </a>
          </li>
          <li className="navigation-item">
            <a onClick={checked} href="#skills" className="navigation-link">
              skills
            </a>
          </li>
          <li className="navigation-item">
            <a onClick={checked} href="#stats" className="navigation-link">
              stats
            </a>
          </li>
          <li className="navigation-item">
            <a onClick={checked} href="#top" className="navigation-link">
              top
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default navigation;
