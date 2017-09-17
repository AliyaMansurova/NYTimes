import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import rootReducer from '../reducers';

const STATISTICS_STATE_KEY = 'statistics-state';
export const history = createHistory();

const loadState = () => {
  let state;
  try {
    state = JSON.parse(window.localStorage.getItem(STATISTICS_STATE_KEY));
  } catch (e) {
    state = null;
  }
  return state && state.REDUX_STATE_VERSION === process.env.REDUX_STATE_VERSION ? state : null;
};

window.clearState = () => { // for development
  window.onbeforeunload = undefined;
  window.localStorage.removeItem(STATISTICS_STATE_KEY);
};

export default function configureStore() {
  const initState = loadState();
  let composeEnhancers;
  if (process.env.NODE_ENV !== 'production') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line
  } else {
    composeEnhancers = compose;
  }

  const enhancers = composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)));

  return initState
      ? createStore(rootReducer, initState, enhancers)
      : createStore(rootReducer, enhancers);
}

export const saveState = (state, onErr) => {
  try {
    window.localStorage.setItem(STATISTICS_STATE_KEY, JSON.stringify(state));
  } catch (e) {
    onErr(e);
  }
};
