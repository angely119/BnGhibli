import React from "react";
import { Route } from 'react-router-dom';
import { AuthForm, RentalIndex, SearchBox } from "./index";
import { PageContainer, Splash, ShadowOverlay, StyledRentalIndexHeader } from "./styles";

const Home = ({ match, history }) => {
  return (
    <div>
      <Route path={["/home/login", "/home/signup"]}>
        <AuthForm match={match} history={history}/>
        <ShadowOverlay onClick={() => history.push('/home')}/>
      </Route>
      <Splash>
        <SearchBox history={history}/>
      </Splash>
      <PageContainer>
        <StyledRentalIndexHeader>Explore ghibli·nb</StyledRentalIndexHeader>
        <RentalIndex />
      </PageContainer>
    </div>
  )
};

export default Home;
