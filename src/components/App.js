import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Card from './Card';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="container">
        <Search />
        <div className="card-list">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
