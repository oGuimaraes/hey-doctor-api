import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Routh path="/" exact component={SignIn} />
      <Routh path="/register" component={SignUp} />
      <Routh path="/dashboard" component={Dashboard} />
      <Routh path="/profile" component={Profile} />
    </Switch>
  );
}
