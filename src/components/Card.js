import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <h1 className="card__header">Global</h1>
      <ul className="card__statistics">
        <li className="card__statistics-total">
          Total Population: 123,555,012
        </li>
        <li className="card__statistics-infected">
          Total Infected: 123,555,012
        </li>
        <li className="card__statistics-recovered">
          Total Recovered: 123,555,012
        </li>
        <li className="card__statistics-death">Total Death: 123,555,012</li>
      </ul>
    </div>
  );
};

export default Card;
