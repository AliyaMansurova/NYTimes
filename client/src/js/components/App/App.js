import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Router, Redirect} from 'react-router';
import configureStore, { history } from '../../configs/configureStore.js';
import { ConnectedRouter }  from 'react-router-redux';
//import { ConnectedRouter } from 'connected-react-router';
import Header  from '../Header';
import MainPanel  from '../MainPanel';
import PaginationContainer  from '../Pagination/Pagination';
import './App.less';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
          <ConnectedRouter history={history}>
            <Switch>
          <Route
              path="/"
              component={() => (
                  <div className="container">
                    <Header />
                    <hr/>
                    <MainPanel/>
                    {history.location.pathname === '/search' ? <PaginationContainer /> : null}
                  </div>
                  )}
          />
            </Switch>
          </ConnectedRouter>
          </div>
        </Provider>
    );
  }
}