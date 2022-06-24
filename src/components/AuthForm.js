import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Input } from "antd";
import { authenticate } from "../store/auth";
import { FormContainer, FormContainerBottom, StyledButton } from "./RentalBookingForm";

const AuthFormContainer = styled.div`
  background-color: white;
  position: fixed;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  width: 568px;
  height: 400px;
  box-shadow rgba(0, 0, 0, 0.28) 0px 8px 28px 0px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

const AuthFormHeader = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  font-size 16px;
  font-weight 600;
  border-bottom: solid #b0b0b0 1px;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  padding: 0px 30px;
`;

const XButton = styled(Link)`
  display: flex;
  height: 16px;
  width: 16px;
  color: rgb(34, 34, 34);
  margin-right: 170px;
  margin-bottom: 8px;
`;

const AuthFormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 30px;
  height: 350px;
  margin-bottom: 20px;
`;

const FormContainerTop = styled(FormContainerBottom)`
  border-top: none;
`;

const AuthFormInput = styled(Input)`
  border: none;
  height: 100%;
  font-size: 16px;
`;

const AuthForm = (props) => {
  const { match, history } = props;
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(authenticate(evt.target.email.value, evt.target.password.value, evt.target.name, history));
  };

  return (
    <AuthFormContainer>
      <AuthFormHeader>
        <XButton to='/home'>X</XButton>
        <span>Log in or sign up</span>
      </AuthFormHeader>
      <AuthFormContent>
        <h2>Welcome to ghibli'nb</h2>
        <form onSubmit={handleSubmit} name='login'>
          <FormContainer>
            <FormContainerTop>
              <AuthFormInput name='email' type='text' placeholder='Email' bordered={false}/>
            </FormContainerTop>
            {match && match.path === '/home/signup' &&
              <FormContainerBottom>
                <AuthFormInput name='name' type='text' placeholder='Full Name' bordered={false}/>
              </FormContainerBottom>
            }
            <FormContainerBottom>
              <AuthFormInput name='password' type='password' placeholder='Password'bordered={false}/>
            </FormContainerBottom>
          </FormContainer>
          <StyledButton name='submit' type='submit' value='Submit' />
          {error && error.response && <div> {error.response.data} </div>}
        </form>
        <div>
          <span>Don't have an account? </span>
          <Link to="/home/signup">Sign up</Link>
        </div>
      </AuthFormContent>
    </AuthFormContainer>
  )
};

export default AuthForm;
