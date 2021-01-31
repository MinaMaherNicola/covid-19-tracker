import React from 'react';
import './StatsShowCase.css';

const StatsShowCase = (props) => {
  return (
    <div className="show-case">
      <p>
        <span>{props.category}</span>
        {/* {props.numbers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
        {props.numbers}
      </p>
    </div>
  );
};

export default StatsShowCase;
