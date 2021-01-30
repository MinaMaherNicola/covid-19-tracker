import React from 'react';
import './GlobalStats.css';
import StatsShowCase from '../StatsShowCase/StatsShowCase';

class GlobalStats extends React.Component {
  render() {
    let { cases, recovered, deaths } = this.props.stats;
    let active = cases - (recovered + deaths);
    return (
      <div className="global-stats">
        <h1>Global Stats:</h1>
        <div className="grid-container">
          <StatsShowCase category="Total Cases: " numbers={cases} />
          <StatsShowCase category="Active Cases: " numbers={active} />
          <StatsShowCase category="Recovered: " numbers={recovered} />
          <StatsShowCase category="Died: " numbers={deaths} />
        </div>
      </div>
    );
  }
}

export default GlobalStats;
