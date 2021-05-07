import React from 'react';
import Icon from './Icon';

const Search = ({ onInputChange }) => {
  return (
    <div className="search">
      <h1 className="search__header">covid-19 live statistics</h1>
      <input
        className="search__input"
        type="text"
        placeholder="SEARCH BY COUNTRY NAME"
        onChange={e => {
          setTimeout(() => {
            onInputChange(e.target.value);
          }, 2000);
        }}
      />
      <Icon icon="search" />
    </div>
  );
};

export default Search;

// return (
//   <Card
//     headline={country.country}
//     totalCases={displayNumber(country.cases)}
//     activeCases={displayNumber(country.active)}
//     totalDeaths={displayNumber(country.deaths)}
//     totalRecovered={displayNumber(country.recovered)}
//     todayCases={displayNumber(country.todayCases)}
//     todayDeaths={displayNumber(country.todayDeaths)}
//     key={country.country}
//   />
// );
