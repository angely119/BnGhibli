import React from "react";
import styled from "styled-components";

const AuthFormContainer = styled.div`
  background-color: white;
  position: fixed;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  width: 568px;
  height: 340px;
  box-shadow rgba(0, 0, 0, 0.28) 0px 8px 28px 0px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 24px;
`;

const StyledAuthForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const AuthForm = () => {
  return (
    <AuthFormContainer>
      <form>
        <StyledAuthForm>
          <input name='username' type='text' placeholder='Username'/>
          <input name='password' type='text' placeholder='Password' />
          <input name='submit' type='submit' value='Submit' />
        </StyledAuthForm>
      </form>
    </AuthFormContainer>
  )
};

export default AuthForm;
