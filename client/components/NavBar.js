import React, { useState } from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  padding: 10px;
  border-bottom: solid grey 1px;
`;

const StyledLink = styled(Link)`
  position: absolute;
  left: 40px;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <StyledNavBar>
        <StyledLink to="/home">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzh1ST7YGDBCT54ObrjXk_ORrRGwVL366Jb48Zz6r66YP2rcl2GNFRGQPg3hUvpOXHBEY&usqp=CAU' width="60" height="60"/>
          HOME
        </StyledLink>
    </StyledNavBar>
  )
};

export default NavBar;
