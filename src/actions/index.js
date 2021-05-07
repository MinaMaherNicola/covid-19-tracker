import covid from './../api/covid';
import { FETCH_COUNTRIES, FETCH_COUNTRY } from './types';

export const fetchCountries = () => async dispatch => {
  const response = await covid.get();
  dispatch({ type: FETCH_COUNTRIES, payload: response.data });
};

export const fetchCountry = name => async dispatch => {
  const response = await covid.get(`/${name}`);
  dispatch({ type: FETCH_COUNTRY, payload: response.data });
};
