import React from "react";
import styled from "styled-components";

export const StyledRentalIndexItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 21%;
  height: 386px;
`;
//   border: solid grey 1px;

const StyledRentalImage = styled.div`
  background-image: url(${props => props.backgroundImage});
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
`;

const StyledRentalInfo = styled.div`
  padding-top: 10px;
`;

const RentalName = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

const RentalLocation = styled.div`
  color: gray;
  font-size: 15px;
  font-weight: 100;
`;

const RentalPrice = styled.div`
  padding-top: 2px;
  font-size: 15px;
  font-weight: 200;
`;

const RentalPriceNum = styled.span`
  font-weight: 500;
  font-size: 15px;
`;

const RentalIndexItem = (props) => {
  const { rental } = props;
  return (
    <StyledRentalIndexItem>
        <StyledRentalImage backgroundImage={`${rental.imageUrls[0]}`}/>
        <StyledRentalInfo>
          <RentalName>{rental.rentalName}</RentalName>
          <RentalLocation>{rental.location}</RentalLocation>
          <RentalPrice>
            <RentalPriceNum>{`¥${rental.pricePerNight} `}</RentalPriceNum>
            night
          </RentalPrice>
        </StyledRentalInfo>
    </StyledRentalIndexItem>
  )
};

export default RentalIndexItem;
