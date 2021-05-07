import React from 'react';
import Icon from './Icon';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <h1 className="navbar__logo">
          <Link to="/">Covid-19 Statistics</Link>
        </h1>
        <ul className="navbar__links">
          <li className="navbar__links-item">
            <a
              className="navbar__links-item-link"
              href="https://www.linkedin.com/in/minamahernicola/"
              target="__blank"
            >
              <Icon icon="linkedin" />
            </a>
          </li>
          <li className="navbar__links-item">
            <a
              className="navbar__links-item-link"
              href="https://github.com/MinaMaherNicola"
              target="new __blank"
            >
              <Icon icon="github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
