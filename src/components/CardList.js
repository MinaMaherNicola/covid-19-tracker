import React from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from './../actions';
import Card from './Card';
import { displayNumber } from './../util/displayNumber';

class CardList extends React.Component {
  componentDidMount() {
    this.props.fetchCountries();
  }

  renderCards = countries => {
    return countries.map(country => {
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
    });
  };

  render() {
    if (this.props.countires) {
      return (
        <div
          style={{ margin: '40vh auto', textAlign: 'center', fontSize: '5rem' }}
        >
          Loading...
        </div>
      );
    }
    return (
      <div className="card-list">{this.renderCards(this.props.countries)}</div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { fetchCountries })(CardList);
