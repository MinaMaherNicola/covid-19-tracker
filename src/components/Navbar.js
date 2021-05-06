import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <h1 className="navbar__logo">Covid-19 Statistics</h1>
        <ul className="navbar__links">
          <li className="navbar__links-item">
            <a
              className="navbar__links-item-link"
              href="https://www.linkedin.com/in/minamahernicola/"
              target="__blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.886"
                height="22.886"
                viewBox="0 0 22.886 22.886"
              >
                <path
                  id="linkedin"
                  d="M11.443,0A11.443,11.443,0,1,0,22.886,11.443,11.444,11.444,0,0,0,11.443,0ZM8.118,17.3H5.331V8.914H8.118ZM6.725,7.769H6.706a1.453,1.453,0,1,1,.037-2.9,1.453,1.453,0,1,1-.019,2.9ZM18.167,17.3H15.38V12.813c0-1.127-.4-1.9-1.412-1.9a1.526,1.526,0,0,0-1.43,1.019,1.908,1.908,0,0,0-.092.68V17.3H9.66s.036-7.6,0-8.384h2.787V10.1a2.767,2.767,0,0,1,2.512-1.384c1.834,0,3.208,1.2,3.208,3.774Zm0,0"
                  fill="#fff"
                />
              </svg>
            </a>
          </li>
          <li className="navbar__links-item">
            <a
              className="navbar__links-item-link"
              href="https://github.com/MinaMaherNicola"
              target="new __blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
              >
                <path
                  id="github"
                  d="M12,.5A11.9,11.9,0,0,0,0,12.292,11.812,11.812,0,0,0,8.2,23.48c.6.111.82-.254.82-.567,0-.28-.01-1.022-.015-2-3.338.711-4.042-1.582-4.042-1.582A3.143,3.143,0,0,0,3.633,17.6c-1.087-.731.084-.716.084-.716A2.51,2.51,0,0,1,5.555,18.1a2.584,2.584,0,0,0,3.495.981A2.5,2.5,0,0,1,9.81,17.5c-2.665-.295-5.466-1.309-5.466-5.827A4.505,4.505,0,0,1,5.579,8.513a4.126,4.126,0,0,1,.1-3.121s1-.316,3.3,1.209a11.505,11.505,0,0,1,6,0c2.28-1.525,3.285-1.209,3.285-1.209a4.24,4.24,0,0,1,.12,3.121,4.523,4.523,0,0,1,1.23,3.164c0,4.53-2.8,5.527-5.475,5.817a2.8,2.8,0,0,1,.81,2.182c0,1.578-.015,2.846-.015,3.229,0,.309.21.678.825.56A11.776,11.776,0,0,0,24,12.292,11.9,11.9,0,0,0,12,.5Z"
                  transform="translate(0 -0.5)"
                  fill="#fff"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
