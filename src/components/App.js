import React from 'react';
import { Router, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import CardList from './CardList';
import history from './../history';

const App = () => {
  return (
    <div className="app-container">
      <Router history={history}>
        <Navbar />
        <div className="container">
          <Route path="/" exact>
            <CardList />
          </Route>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
