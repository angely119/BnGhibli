import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Dropdown, Menu } from "antd";
import { ProfileBtnMenuSVG } from "./index";
import { logout } from "../store/auth";

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
  margin-right: 60px;
`;

const ProfileButton = styled.button`
  width: 77px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  padding: 0px 9px;
  margin-left: 50px;
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

// FUNCTIONAL COMPONENT
const NavBar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const userProfileImg = useSelector((state) => state.auth.profileImageUrl);
  const dispatch = useDispatch();
  const handleClick = (evt) => {
    evt.key = '1' && console.log('TRIPS');
    evt.key = '2' && dispatch(logout());
  };

  const menu = (
    <Menu
      onClick={handleClick}
      items={[
        {
          key: '1',
          label: 'Trips',
        },
        {
          key: '2',
          label: 'Log out',
        }
      ]}
    />
  );

  return (
    <StyledNavBar>
      <LinkContainer>
        <img src='/ghibli_icon.png' width="65" height="65"/>
        <StyledLogo to="/">ghibli·nb</StyledLogo>
      </LinkContainer>
      {isLoggedIn
        ?
        <LinkContainer>
          <Dropdown overlay={menu} placement="bottomRight">
            <ProfileButton type='button'>
              <div>
                <ProfileBtnMenuSVG />
              </div>
              <ProfileButtonIcon image={userProfileImg}/>
            </ProfileButton>
          </Dropdown>
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
