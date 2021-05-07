import React from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from './../actions';
import { displayNumber } from './../util/displayNumber';
import Card from './Card';
import Search from './Search';

class CardList extends React.Component {
  state = { term: '' };

  componentDidMount() {
    this.props.fetchCountries();
  }

  renderCards = countries => {
    // eslint-disable-next-line array-callback-return
    return countries.map(country => {
      if (this.state.term !== '') {
        if (country.country.toLowerCase() === this.state.term.toLowerCase()) {
          return (
            <Card
              headline={country.country}
              totalCases={displayNumber(country.cases)}
              activeCases={displayNumber(country.active)}
              totalDeaths={displayNumber(country.deaths)}
              totalRecovered={displayNumber(country.recovered)}
              todayCases={displayNumber(country.todayCases)}
              todayDeaths={displayNumber(country.todayDeaths)}
              key={country.country}
            />
          );
        }
      } else {
        return (
          <Card
            headline={country.country}
            totalCases={displayNumber(country.cases)}
            activeCases={displayNumber(country.active)}
            totalDeaths={displayNumber(country.deaths)}
            totalRecovered={displayNumber(country.recovered)}
            todayCases={displayNumber(country.todayCases)}
            todayDeaths={displayNumber(country.todayDeaths)}
            key={country.country}
          />
        );
      }
    });
  };

  onInputChange = term => {
    // setTimeout(() => {
    this.setState({ term });
    // }, 1000);
  };

  render() {
    if (this.props.countries.length === 0) {
      return (
        <div
          style={{ margin: '40vh auto', textAlign: 'center', fontSize: '5rem' }}
        >
          Loading...
        </div>
      );
    }
    return (
      <div>
        <Search onInputChange={this.onInputChange} />
        <div className="card-list">
          {this.renderCards(this.props.countries)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { countries: state.countries };
};

export default connect(mapStateToProps, { fetchCountries })(CardList);
