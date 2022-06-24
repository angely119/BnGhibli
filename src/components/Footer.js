import React from "react";
import {
  StyledFooter,
  FooterLinkContainer,
  FooterStyledLink,
  StyledSpan,
} from "./styles";

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
