import React from "react";
import styled from "styled-components";
import {StyledLabel, StyledInput} from "./SearchBox";

// STYLED COMPONENTS
const RentalBookingContainer = styled.div`
  height: 280px;
  width: 372px;
  padding: 24px;
  border: solid #dad9d4 1px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px 0px;
`;

const RentalBookingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 28px;
  margin-bottom: 24px;
`;
const RentalBookingInfo = styled.div`
  display: flex;
  align-self: flex-end;
`;

const RentalBookingPrice = styled.span`
  font-size 20px;
  font-weight 500;
`;

const RentalBookingFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 112px;
  border: solid #b0b0b0 1px;
  border-radius: 10px;
  overflow: hidden;
`;

const FormContainerTop = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
`;

const CheckInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;
  border-bottom: solid #b0b0b0 1px;
`;

const CheckOutContainer = styled(CheckInContainer)`
  border-left: solid #b0b0b0 1px;
`;

const BookingLabel = styled(StyledLabel)`
  font-size: 10px;
`;

const BookingInput = styled.input`
  font-size: 12px;
  border: none;
`;

const FormContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 56px;
  padding: 10px;
`;

const ReserveButton = styled.input`
  background-color: #FF5A5F;
  margin-top: 15px;
  height: 50px;
  width: 100%;
  align-self: flex-end;
  color: white;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 10px;
`;


// FUNCTIONAL COMPONENTS
const RentalBookingForm = (props) => {
  const { rental, numOfReviews, avgRating } = props;
  return (
    <RentalBookingContainer>
      <RentalBookingHeader>
        <div>
          <RentalBookingPrice>¥{rental.pricePerNight}</RentalBookingPrice>
          <span> night</span>
        </div>
        <RentalBookingInfo>
          <span>{rental.reviews && avgRating(rental.reviews)} </span>
          <span>{` · ${numOfReviews ? numOfReviews : "No"} review(s)`}</span>
        </RentalBookingInfo>
      </RentalBookingHeader>
        <form>
        <RentalBookingFormContainer>
          <FormContainerTop>
            <CheckInContainer>
            <BookingLabel htmlFor='checkIn'>CHECK-IN</BookingLabel>
              <BookingInput
                name='checkIn'
                type='date'/>
            </CheckInContainer>
            <CheckOutContainer>
              <BookingLabel htmlFor='checkOut'>CHECK-OUT</BookingLabel>
                <BookingInput
                  name='checkOut'
                  type='date'/>
            </CheckOutContainer>
          </FormContainerTop>
          <FormContainerBottom>
            <BookingLabel htmlFor='guest'>GUESTS</BookingLabel>
                <BookingInput
                  name='guest'
                  type='text'
                  placeholder='1 guest'/>
          </FormContainerBottom>
        </RentalBookingFormContainer>
        <ReserveButton
            name='reserve'
            type='submit'
            value='Reserve'
          />
        </form>
    </RentalBookingContainer>
  )
};

export default RentalBookingForm;
