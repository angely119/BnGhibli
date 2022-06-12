import React from "react";
import { Route } from 'react-router-dom';
import styled from "styled-components";
import { AuthForm, RentalIndex, SearchBox } from "./index";


const Splash = styled.div`
  display: flex;
  background-image: url("https://www.ghibli.jp/gallery/kazetachinu042.jpg");
  background-size: cover;
  width: 100%;
  height: 1000px;
  z-index: 0;
`;

const ShadowOverlay = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
`;

const Home = (props) => {
  const { match, history } = props;
  return (
    <div>
      <Route path={["/home/login", "/home/signup"]}>
        <AuthForm match={match} history={history}/>
        <ShadowOverlay onClick={() => history.push('/home')}/>
      </Route>
      {/* <Route path={["/home/login", "/home/signup"]} component={AuthForm} /> */}
      <Splash>
        <SearchBox />
      </Splash>
      <RentalIndex />
    </div>
  )
};

export default Home;
