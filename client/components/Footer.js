import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  position: absolute;
  width:100%;
  height: 20px;
  padding: 10px;
  border-top: solid grey 1px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <span>FOOTER</span>
    </StyledFooter>
  )
};

export default Footer;
