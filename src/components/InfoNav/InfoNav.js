import React from 'react';
import './InfoNav.css';

const InfoNav = () => {
  return (
    <div className="flex-container">
      <h1>Covid-19 Tracker</h1>
      <div className="text">
        <p>
          Created by: Mina Nicola
          <a href="https://www.linkedin.com/in/minamahernicola/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/MinaMaherNicola">
            <i className="fab fa-github"></i>
          </a>
        </p>
      </div>
      <a href="https://github.com/javieraviles/covidAPI">API Used</a>
    </div>
  );
};

export default InfoNav;
