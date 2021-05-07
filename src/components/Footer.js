import React from 'react';
import Icon from './Icon';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h1 className="footer__logo">Created By Mina Nicola</h1>
        <ul className="footer__links">
          <li className="footer__links-item">
            <a
              className="footer__links-item-link"
              href="https://www.linkedin.com/in/minamahernicola/"
              target="__blank"
            >
              <Icon icon="linkedin" />
            </a>
          </li>
          <li className="footer__links-item">
            <a
              className="footer__links-item-link"
              href="https://github.com/MinaMaherNicola"
              target="new __blank"
            >
              <Icon icon="github" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
