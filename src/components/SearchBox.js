import React, { useState } from "react";
import { StyledSearchBox, StyledHeader, StyledLabel, StyledInput, CheckInOut, InputContainer, SearchButton } from "./styles";

const SearchBox = ({history}) => {
  const [searchInputs, setSearchInputs] = useState({});

  const handleSearch = (evt) => {
    evt.preventDefault();
    searchInputs.location ? history.push(`/rentals?location=${searchInputs.location}`) : history.push(`/rentals`);
  };

  const handleChange = (evt) => {
    setSearchInputs({
      [evt.target.name] : evt.target.value
    });
  }

  return (
    <StyledSearchBox>
      <StyledHeader>Book unique places to stay and things to do.</StyledHeader>
      <form onSubmit={handleSearch}>
        <InputContainer>
        <StyledLabel htmlFor='location'>WHERE</StyledLabel>
          <StyledInput
            name='location'
            type='text'
            placeholder='Anywhere'
            onChange={handleChange}
          />
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
