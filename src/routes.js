import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';

import Main from './pages/main';
import NewSurvivor from './pages/new_survivor';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/create" component={NewSurvivor} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
