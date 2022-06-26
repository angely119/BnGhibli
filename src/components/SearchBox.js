import React from "react";
import { StyledSearchBox, StyledHeader, StyledLabel, StyledInput, CheckInOut, InputContainer, SearchButton } from "./styles";

const SearchBox = ({history}) => {
  const handleSearch = (evt) => {
    evt.preventDefault();
    history.push('/rentals');
  };

  return (
    <StyledSearchBox>
      <StyledHeader>Book unique places to stay and things to do.</StyledHeader>
      <form onSubmit={handleSearch}>
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
