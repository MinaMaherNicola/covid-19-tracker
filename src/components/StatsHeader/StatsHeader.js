import React from 'react';
import './StatsHeader.css';
import StatsShowCase from '../StatsShowCase/StatsShowCase';

class StatsHeader extends React.Component {
  render() {
    return (
      <div className="global-stats">
        <h1>{this.props.heading}</h1>
        <div className="grid-container">
          <StatsShowCase category="Total Cases: " numbers={this.props.cases} />
          <StatsShowCase
            category="Active Cases: "
            numbers={this.props.active}
          />
          <StatsShowCase
            category="Recovered: "
            numbers={this.props.recovered}
          />
          <StatsShowCase category="Died: " numbers={this.props.deaths} />
          <StatsShowCase
            category="New Cases: "
            numbers={`+${this.props.todayCases}`}
          />
          <StatsShowCase
            category="New Deaths: "
            numbers={`+${this.props.todayDeaths}`}
          />
        </div>
      </div>
    );
  }
}

export default StatsHeader;
