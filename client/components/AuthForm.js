import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { authenticate } from "../store/auth";

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
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(authenticate(evt.target.username.value, evt.target.password.value, evt.target.name))
  };

  return (
    <AuthFormContainer>
      <form onSubmit={handleSubmit} name='login'>
        <StyledAuthForm>
          <input name='username' type='text' placeholder='Username'/>
          <input name='password' type='password' placeholder='Password' />
          <input name='submit' type='submit' value='Submit' />
          {error && error.response ? <div> {error.response.data} </div> : <div>Success!</div>}
        </StyledAuthForm>
      </form>
    </AuthFormContainer>
  )
};

export default AuthForm;
