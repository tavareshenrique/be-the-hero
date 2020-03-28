import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Logon from '~/pages/Logon';
import Register from '~/pages/Register';
import Profile from '~/pages/Profile';
import NewIncident from '~/pages/NewIncident';

import PrivateRoute from '~/components/PrivateRoute';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />

        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
