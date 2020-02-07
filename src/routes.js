import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';

import Main from './pages/main';
import NewSurvivor from './pages/new_survivor';
import Profile from './pages/profile';
import UpdateProfile from './pages/update_profile';
import ReportInfected from './pages/report_infected';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/create" component={NewSurvivor} />
      <Route path="/profile/:id/update" component={UpdateProfile} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/report" component={ReportInfected} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
