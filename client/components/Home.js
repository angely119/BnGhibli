import React from "react";
import styled from "styled-components";
import { SearchBox } from "./index";

const StyledHome = styled.div`
  display: flex;
  background-image: url("https://www.ghibli.jp/gallery/kazetachinu042.jpg");
  background-size: cover;
  width: 100%;
  height: 1000px;
`;

const Home = () => {
  return (
    <StyledHome>
      <SearchBox />
    </StyledHome>
  )
};

export default Home;
