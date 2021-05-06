import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <h1 className="card__header">{props.headline}</h1>
      <ul className="card__statistics">
        <li className="card__statistics-total">
          Total Cases: <span className="numbers">{props.totalCases}</span>
        </li>

        <li className="card__statistics-active">
          Active Cases: <span className="numbers">{props.activeCases}</span>
        </li>

        <li className="card__statistics-deaths">
          Total Deaths: <span className="numbers">{props.totalDeaths}</span>
        </li>

        <li className="card__statistics-recovered">
          Total Recovered:
          <span className="numbers">{props.totalRecovered}</span>
        </li>

        <li className="card__statistics-today-cases">
          Today Cases: <span className="numbers">{props.todayCases}</span>
        </li>

        <li className="card__statistics-deaths">
          Today Deaths: <span className="numbers">{props.todayDeaths}</span>
        </li>
      </ul>
    </div>
  );
};

export default Card;
