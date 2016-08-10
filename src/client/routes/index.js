import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from 'store/configureStore';

import pages from '../pages';


export default function(history) {
  return (
    <Router history={history}>
      <Route path="/">
        <IndexRoute component={pages.Intro} />
	<Route path="expertAndDoctor" component={pages.ExpertAndDoctor}/>
        <Route path="login" component={pages.Login} />
      </Route>
    </Router>
  );
};
