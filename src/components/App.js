import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Card from './Card';
import Footer from './Footer';
import covid from './../api/covid';
import { displayNumber } from './../util/displayNumber';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await covid.get();
      setData(response.data);
    };

    getData();
  }, []);

  const renderCards = cards => {
    return cards.map(card => {
      return (
        <Card
          headline={card.country}
          totalCases={displayNumber(card.cases)}
          activeCases={displayNumber(card.active)}
          totalDeaths={displayNumber(card.deaths)}
          totalRecovered={displayNumber(card.recovered)}
          todayCases={displayNumber(card.todayCases)}
          todayDeaths={displayNumber(card.todayDeaths)}
          key={card.country}
        />
      );
    });
  };

  if (data.length === 0) {
    return (
      <div
        style={{ margin: '40vh auto', textAlign: 'center', fontSize: '5rem' }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div className="app-container">
      <Navbar />
      <div className="container">
        <Search />
        <div className="card-list">{renderCards(data)}</div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
