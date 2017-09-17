
import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import styles from './MainPanel.less';
//import ArticleContainer from '../ArticleContiner';

const MainPanel = () => (
    <section className="wrapper">
      <Switch>
        <Route
            exact
            path="/search"
            component={() => (
                <div>
                 Articles
                </div>)}
        />
        <Route exact path="/">
          <Redirect to={{ pathname: '/search', search: '?searchBar=&page=1' }} />
        </Route>
      </Switch>
    </section>
);

export default MainPanel;

