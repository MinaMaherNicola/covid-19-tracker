import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import StatsHeader from '../StatsHeader/StatsHeader';
import covid19 from '../../api/covid-19';
import './general.css';
import '../InfoNav/InfoNav';
import InfoNav from '../InfoNav/InfoNav';

class App extends React.Component {
  state = { data: [] };
  fetchData = async () => {
    const stats = await covid19.get('/countries');
    const data = stats.data.map(
      ({
        country,
        active,
        cases,
        deaths,
        recovered,
        todayCases,
        todayDeaths
      }) => {
        return {
          country,
          active,
          cases,
          deaths,
          recovered,
          todayCases,
          todayDeaths
        };
      }
    );
    this.setState({ data });
  };
  componentDidMount = () => {
    this.fetchData();
  };

  searchOnChange = (e) => {
    let searchTerm = e.target.value;

    if (searchTerm !== '') {
      let searchedCounts = this.state.data.map((country) => {
        if (country.country.toLowerCase().includes(searchTerm.toLowerCase())) {
          return country;
        }
      });
      searchedCounts = searchedCounts.filter((country) => {
        return country !== undefined || null;
      });
      this.setState({ data: searchedCounts });
    } else {
      this.fetchData();
    }
  };
  render() {
    const headers = this.state.data.map((country, index) => {
      return (
        <StatsHeader
          key={index}
          heading={country.country}
          active={country.active}
          cases={country.cases}
          deaths={country.deaths}
          recovered={country.recovered}
          todayCases={country.todayCases}
          todayDeaths={country.todayDeaths}
        />
      );
    });
    return (
      <div>
        <InfoNav></InfoNav>
        <div className="container">
          <nav>
            <SearchBar searchChange={this.searchOnChange} />
          </nav>
          <section className="grid-container">{headers}</section>
        </div>
      </div>
    );
  }
}

export default App;
