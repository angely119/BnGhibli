import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 10px;
  padding-left: 30px;
  border-bottom: solid grey 1px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  font-size: 15px;
  text-decoration: none;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 60px;
  width: 150px;
  margin-left: 20px;
  margin-right: 20px;

`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <LinkContainer>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzh1ST7YGDBCT54ObrjXk_ORrRGwVL366Jb48Zz6r66YP2rcl2GNFRGQPg3hUvpOXHBEY&usqp=CAU' width="59" height="59"/>
        <StyledLink to="/home">HOME</StyledLink>
      </LinkContainer>
      <LinkContainer>
        <StyledLink to="/signup">Sign up</StyledLink>
        <StyledLink to="/login">Log in</StyledLink>
      </LinkContainer>
    </StyledNavBar>
  )
};

export default NavBar;
