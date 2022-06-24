import React from "react";
import { Route } from 'react-router-dom';
import { AuthForm, RentalIndex, SearchBox } from "./index";
import { Splash, ShadowOverlay } from "./styles";

const Home = (props) => {
  const { match, history } = props;
  return (
    <div>
      <Route path={["/home/login", "/home/signup"]}>
        <AuthForm match={match} history={history}/>
        <ShadowOverlay onClick={() => history.push('/home')}/>
      </Route>
      <Splash>
        <SearchBox />
      </Splash>
      <RentalIndex />
    </div>
  )
};

export default Home;
