import React from "react";
import { Route } from 'react-router-dom';
import { AuthForm, RentalIndex, SearchBox } from "./index";
import { Splash, ShadowOverlay } from "./styles";
import styled from "styled-components";

const StyledRentalsContainer = styled.div`
  padding: 40px 80px;
`;

const StyledRentalIndexHeader = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #484848;
  padding-bottom: 10px;
`;

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
      <StyledRentalsContainer>
        <StyledRentalIndexHeader>Explore ghibli·nb</StyledRentalIndexHeader>
        <RentalIndex />
      </StyledRentalsContainer>
    </div>
  )
};

export default Home;
