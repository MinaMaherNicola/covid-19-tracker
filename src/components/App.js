import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Footer from './Footer';
import CardList from './CardList';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="container">
        <Search />
        <CardList />
      </div>
      <Footer />
    </div>
  );
};

export default App;
