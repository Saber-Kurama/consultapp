import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from 'store/configureStore';

import pages from '../pages';


export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={pages.App}>
        <IndexRoute component={pages.Intro} />
      </Route>
    </Router>
  );
};
