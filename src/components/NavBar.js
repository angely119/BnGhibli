import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Menu } from "antd";
import { ProfileBtnMenuSVG } from "./index";
import { fetchAuthUser, logout } from "../store/auth";
import { withRouter } from 'react-router';
import {
  StyledNavBar,
  StyledLink,
  StyledLogo,
  LinkContainer,
  ProfileButton,
  ProfileButtonIcon,
} from "./styles";

const NavBar = ({history}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthUser(history));
  }, [dispatch]);

  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const userProfileImg = useSelector((state) => state.auth.profileImageUrl);

  const handleClick = (evt) => {
    evt.key === '1' && history.push('trips');
    evt.key === '2' && dispatch(logout());
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
        <img src='../public/ghibli_icon.png' width="65" height="65"/>
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

export default withRouter(NavBar);
