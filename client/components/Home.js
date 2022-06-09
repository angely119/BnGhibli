import React from "react";
import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  background-image: url("https://www.ghibli.jp/gallery/kazetachinu042.jpg");
  background-size: cover;
  max-width: 100%;
  height: 1000px;
`;

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
  opacity: 0.8;
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
  width: 100%;
  border: 1px solid lightgray;
  height: 50px;
  color: #484848;
  margin-bottom: 13px;
  margin-top: 8px;
  padding-left: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  border-radius: 4px;
`;

const CheckInOut = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;


const Home = () => {
  return (
    <StyledHome>
      <StyledSearchBox>
        <StyledHeader>Book unique places to stay and things to do.</StyledHeader>
        <form>
          <div>
          <StyledLabel htmlFor='where'>WHERE</StyledLabel>
          <StyledInput
            name='where'
            type='text'
            placeholder='Anywhere'/>
          </div>
          <CheckInOut>
            <div>
            <StyledLabel htmlFor='checkIn'>CHECK-IN</StyledLabel>
            <StyledInput
              name='checkIn'
              type='date'/>
            </div>
            <div>
            <StyledLabel htmlFor='checkOut'>CHECK-OUT</StyledLabel>
            <StyledInput
              name='checkOut'
              type='date'/>
            </div>
          </CheckInOut>
          <div>
          <StyledLabel htmlFor='guests'>GUESTS</StyledLabel>
          <StyledInput
            name='guests'
            type='text'
            placeholder='2 Guests'/>
          </div>
        </form>
      </StyledSearchBox>
    </StyledHome>
  )
};

export default Home;
