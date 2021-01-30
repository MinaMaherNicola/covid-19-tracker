import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './general.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <nav>
          <SearchBar />
        </nav>
      </div>
    );
  }
}

export default App;
