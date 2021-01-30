import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import GlobalStats from '../GlobalStats/GlobalStats';
import covid19 from '../../api/covid-19';
import './general.css';

class App extends React.Component {
  state = { globalStats: {} };
  componentDidMount = async () => {
    const stats = await covid19.get('/all');
    console.log(stats.data);
    this.setState({ globalStats: stats.data });
  };
  render() {
    return (
      <div className="container">
        <nav>
          <SearchBar />
        </nav>
        <section>
          <GlobalStats stats={this.state.globalStats} />
        </section>
      </div>
    );
  }
}

export default App;
