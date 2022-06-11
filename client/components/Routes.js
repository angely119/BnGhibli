import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthForm, Home, RentalDetails } from './index';

const Routes = () => {
  return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/rentals/:rentalId" component={RentalDetails}/>
        <Redirect to="/home" />
      </Switch>
  )
};

export default Routes;
