import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search by Country"></input>
      </div>
    );
  }
}

export default SearchBar;
