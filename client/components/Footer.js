import React from "react";
import styled from "styled-components";
import { StyledLink, LinkContainer } from "./NavBar";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width:100%;
  height: 40px;
  border-top: solid grey 1px;
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: flex-end;
  height: 30px;
  color: black;
  font-size: 15px;
  margin-right: 20px;
`;

const FooterLinkContainer = styled(LinkContainer)`
  margin-left: 40px;
  height: 30px;
`;

const FooterStyledLink = styled(StyledLink)`
  align-items: flex-end;
  font-size: 15px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLinkContainer>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzh1ST7YGDBCT54ObrjXk_ORrRGwVL366Jb48Zz6r66YP2rcl2GNFRGQPg3hUvpOXHBEY&usqp=CAU' width="50" height="50"/>
        <FooterStyledLink to="/home">Ghibli'nB</FooterStyledLink>
      </FooterLinkContainer>
      <StyledSpan>Created by Angel Yang</StyledSpan>
    </StyledFooter>
  )
};

export default Footer;
