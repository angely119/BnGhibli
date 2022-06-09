import React from "react";
import styled from "styled-components";
import {RentalIndex, SearchBox } from "./index";

const Splash = styled.div`
  display: flex;
  background-image: url("https://www.ghibli.jp/gallery/kazetachinu042.jpg");
  background-size: cover;
  width: 100%;
  height: 1000px;
`;

const Home = () => {
  return (
    <div>
      <Splash>
        <SearchBox />
      </Splash>
      <RentalIndex />
    </div>
  )
};

export default Home;
