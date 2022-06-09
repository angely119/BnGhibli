import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './index';

const Routes = () => {
  return (
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
  )
};

export default Routes;
