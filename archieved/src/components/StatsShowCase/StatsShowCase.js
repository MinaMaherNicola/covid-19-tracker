import React from 'react';
import './StatsShowCase.css';

const StatsShowCase = (props) => {
  return (
    <div className="show-case">
      <p>
        <span>{props.category}</span>
        {String(props.numbers).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </p>
    </div>
  );
};

export default StatsShowCase;
