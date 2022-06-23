import styled from "styled-components";
import { Link } from 'react-router-dom';

// NavBar
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

const StyledLink = styled(Link)`
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

const LinkContainer = styled.div`
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

// Footer
const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width:100%;
  height: 50px;
  padding: 0px 30px;
  border-top: solid #dad9d4 1px;
`;

const FooterLinkContainer = styled(LinkContainer)`
  height: 30px;
`;

const FooterStyledLink = styled(StyledLink)`
  align-items: flex-end;
  font-size: 15px;
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: flex-end;
  height: 30px;
  color: black;
  font-size: 15px;
  margin-right: 60px;
`;

export {
// NavBar
  StyledNavBar,
  StyledLink,
  StyledLogo,
  LinkContainer,
  ProfileButton,
  ProfileButtonIcon,

// Footer
  StyledFooter,
  FooterLinkContainer,
  FooterStyledLink,
  StyledSpan
};
