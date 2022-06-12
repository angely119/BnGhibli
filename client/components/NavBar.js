import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 10px;
  padding-left: 30px;
  border-bottom: solid #dad9d4 1px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  font-size: 15px;
  text-decoration: none;
`;

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  color: #484848;
  font-size: 20px;
  text-decoration: none;
  font-weight: 600;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 60px;
  width: 150px;
  margin-left: 40px;
  margin-right: 40px;
`;

const ProfileButton = styled.button`
  width: 77px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  padding: 0px 9px;
  border: solid #dad9d4 1px;
  border-radius: 21px;
  background-color: white;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const ProfileButtonIcon = styled.div`
  background-image: url(${props => props.image});
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

const StyledGraphic = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 3;
  overflow: visible;
`;

const NavBar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const userProfileImg = useSelector((state) => state.auth.profileImageUrl);
  return (
    <StyledNavBar>
      <LinkContainer>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzh1ST7YGDBCT54ObrjXk_ORrRGwVL366Jb48Zz6r66YP2rcl2GNFRGQPg3hUvpOXHBEY&usqp=CAU' width="65" height="65"/>
        <StyledLogo to="/">ghibli·nb</StyledLogo>
      </LinkContainer>
      {isLoggedIn
        ?
        <LinkContainer>
          <ProfileButton type='button'>
            <div>
              <StyledGraphic viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
                <g fill="none" fillRule="nonzero">
                  <path d="m2 16h28"></path>
                  <path d="m2 24h28"></path>
                  <path d="m2 8h28"></path>
                </g>
              </StyledGraphic>
            </div>
            <ProfileButtonIcon image={userProfileImg}/>
          </ProfileButton>
        </LinkContainer>
        :
        <LinkContainer>
          <StyledLink to="/home/signup">Sign up</StyledLink>
          <StyledLink to="/home/login">Log in</StyledLink>
        </LinkContainer>
      }
    </StyledNavBar>
  )
};

export default NavBar;
