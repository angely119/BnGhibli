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
  margin-right: 55px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLinkContainer>
        <img src='/ghibli_icon.png' width="45" height="45"/>
        <FooterStyledLink to="/home">ghibli·nb</FooterStyledLink>
      </FooterLinkContainer>
      <StyledSpan>Created by Angel Yang</StyledSpan>
    </StyledFooter>
  )
};

export default Footer;
