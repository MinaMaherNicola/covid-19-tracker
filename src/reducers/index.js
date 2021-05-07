import { combineReducers } from 'redux';
import { countriesReducer, countryReducer } from './countryReducer';

export default combineReducers({
  countries: countriesReducer,
  country: countryReducer
});
