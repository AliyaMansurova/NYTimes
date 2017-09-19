import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import search from './search';
import weather from './weather';

export default combineReducers({
  search: search,
  weather:weather,
  routing: routerReducer
});
