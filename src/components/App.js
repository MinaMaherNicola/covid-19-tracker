import React from 'react';
import { Router, Route } from 'react-router-dom';

import Navbar from './Navbar';
import CardList from './CardList';
import history from './../history';
import Country from './Country';

const App = () => {
  return (
    <div className="app-container">
      <Router history={history}>
        <Navbar />
        <div className="container">
          <Route path="/" exact component={CardList} />
          <Route path="/:country" exact component={Country} />
        </div>
      </Router>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
