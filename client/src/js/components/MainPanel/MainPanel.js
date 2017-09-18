
import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import  './MainPanel.less';
import ArticleContainer from '../ArticleContainer';

const MainPanel = () => (
    <section className="wrapper">
      <Switch>
        <Route
            exact
            path="/search"
            component={() => (
                <div className="wrapper">
                  <ArticleContainer />
                </div>)}
        />
        <Route exact path="/">
          <Redirect to={{ pathname: '/search', search: '?searchBar=&page=0' }} />
        </Route>
      </Switch>
    </section>
);

export default MainPanel;

