import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountry } from './../actions';
import Icon from './Icon';
import { displayNumber } from '../util/displayNumber';

class Country extends React.Component {
  componentDidMount() {
    this.props.fetchCountry(this.props.match.params.country);
  }

  render() {
    return (
      <div className="country">
        <div className="country__header">
          <h1 className="country__header__heading">
            {this.props.country.country}
          </h1>
          <Link className="country__header__link" to="/">
            <Icon icon="arrow-right" />
          </Link>
        </div>
        <ul className="country__statistics">
          <li className="country__statistics-total">
            Total Cases:
            <span className="numbers">
              {displayNumber(this.props.country.cases)}
            </span>
          </li>

          <li className="country__statistics-active">
            Active Cases:
            <span className="numbers">
              {displayNumber(this.props.country.active)}
            </span>
          </li>

          <li className="country__statistics-deaths">
            Total Deaths:
            <span className="numbers">
              {displayNumber(this.props.country.deaths)}
            </span>
          </li>

          <li className="country__statistics-recovered">
            Total Recovered:
            <span className="numbers">
              {displayNumber(this.props.country.recovered)}
            </span>
          </li>

          <li className="country__statistics-today-cases">
            Today Cases:
            <span className="numbers">
              {displayNumber(this.props.country.todayCases)}
            </span>
          </li>

          <li className="country__statistics-deaths">
            Today Deaths:
            <span className="numbers">
              {displayNumber(this.props.country.todayDeaths)}
            </span>
          </li>
        </ul>
      </div>
      //   <Card
      //   headline={country.country}
      //   totalCases={displayNumber(country.cases)}
      //   activeCases={displayNumber(country.active)}
      //   totalDeaths={displayNumber(country.deaths)}
      //   totalRecovered={displayNumber(country.recovered)}
      //   todayCases={displayNumber(country.todayCases)}
      //   todayDeaths={displayNumber(country.todayDeaths)}
      //   key={country.country}
      // />
    );
  }
}

const mapStateToProps = state => {
  return { country: state.country };
};

export default connect(mapStateToProps, { fetchCountry })(Country);
