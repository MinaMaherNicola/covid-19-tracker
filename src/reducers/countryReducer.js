import { FETCH_COUNTRIES, FETCH_COUNTRY } from './../actions/types';

export const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return action.payload;

    default:
      return state;
  }
};

export const countryReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COUNTRY:
      return action.payload;

    default:
      return state;
  }
};
