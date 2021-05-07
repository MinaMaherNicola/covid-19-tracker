import React, { useState } from 'react';
import Icon from './Icon';

const Search = () => {
  const [value, setValue] = useState('');

  return (
    <div className="search">
      <h1 className="search__header">covid-19 live statistics</h1>
      <input
        className="search__input"
        type="text"
        placeholder="SEARCH BY COUNTRY NAME"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Icon icon="search" />
    </div>
  );
};

export default Search;
