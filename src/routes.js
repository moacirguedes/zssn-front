import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';

import Main from './pages/main';
import NewSurvivor from './pages/new_survivor';
import Profile from './pages/profile';
import UpdateProfile from './pages/update_profile';
import ReportInfected from './pages/report_infected';
import Reports from './pages/reports';
import Trade from './pages/trade';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <div className="Div">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/create" component={NewSurvivor} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route path="/profile/:id/update" component={UpdateProfile} />
        <Route path="/reports" component={Reports} />
        <Route path="/report" component={ReportInfected} />
        <Route path="/trade" component={Trade} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
