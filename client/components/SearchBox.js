import React from "react";
import styled from 'styled-components';

const StyledSearchBox = styled.div`
  width: 440px;
  height: 480px;
  display: flex;
  position: absolute;
  left: 75px;
  top: 170px;
  box-sizing: border-box;
  padding: 35px;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  box-shadow: 2px 2px 5px grey;
  border-radius: 4px;
  opacity: 0.9;
`;

const StyledHeader = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #484848;
  margin-left: 5px;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  color: #484848;
  font-weight: 600;
`;

const StyledInput = styled.input`
  border: 1px solid lightgray;
  height: 50px;
  color: #484848;
  margin-bottom: 13px;
  margin-top: 8px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 15px;
  border-radius: 4px;
`;

const CheckInOut = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SearchButton = styled.input`
  background-color: #FF5A5F;
  height: 50px;
  width: 100px;
  margin-top: 9px;
  align-self: flex-end;
  color: white;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 5px;
`;

const SearchBox = () => {
  return (
    <StyledSearchBox>
      <StyledHeader>Book unique places to stay and things to do.</StyledHeader>
      <form>
        <InputContainer>
        <StyledLabel htmlFor='where'>WHERE</StyledLabel>
          <StyledInput
            name='where'
            type='text'
            placeholder='Anywhere'/>
        </InputContainer>
        <CheckInOut>
          <InputContainer>
          <StyledLabel htmlFor='checkIn'>CHECK-IN</StyledLabel>
          <StyledInput
            name='checkIn'
            type='date'/>
          </InputContainer>
          <InputContainer>
          <StyledLabel htmlFor='checkOut'>CHECK-OUT</StyledLabel>
          <StyledInput
            name='checkOut'
            type='date'/>
          </InputContainer>
        </CheckInOut>
        <InputContainer>
        <StyledLabel htmlFor='guests'>GUESTS</StyledLabel>
        <StyledInput
          name='guests'
          type='text'
          placeholder='2 Guests'/>
        </InputContainer>
        <InputContainer>
          <SearchButton
            name='submit'
            type='submit'
            value='Search'
          />
        </InputContainer>
      </form>
    </StyledSearchBox>
  );
};

export default SearchBox;
