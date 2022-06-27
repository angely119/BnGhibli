import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export const StyledRentalIndexItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 386px;
  width: 297px;
  cursor: pointer;
  transition-duration: 0.3s;
  transition-property: transform;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledMapRentalIndexItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 300px;
  cursor: pointer;
`;

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
  const { rental, isMapInfo } = props;
  const history = useHistory();

  return (
    isMapInfo ?
      (<StyledMapRentalIndexItem onClick={() => history.push(`/rentals/${rental.id}`)}>
        <StyledRentalImage backgroundImage={`${rental.imageUrls[0]}`}/>
          <StyledRentalInfo>
            <RentalName>{rental.rentalName}</RentalName>
            <RentalLocation>{rental.location.name}</RentalLocation>
            <RentalPrice>
              <RentalPriceNum>{`¥${rental.pricePerNight} `}</RentalPriceNum>
              night
            </RentalPrice>
          </StyledRentalInfo>
      </StyledMapRentalIndexItem>)
    :
      (<StyledRentalIndexItem onClick={() => history.push(`/rentals/${rental.id}`)}>
          <StyledRentalImage backgroundImage={`${rental.imageUrls[0]}`}/>
          <StyledRentalInfo>
            <RentalName>{rental.rentalName}</RentalName>
            <RentalLocation>{rental.location.name}</RentalLocation>
            <RentalPrice>
              <RentalPriceNum>{`¥${rental.pricePerNight} `}</RentalPriceNum>
              night
            </RentalPrice>
          </StyledRentalInfo>
      </StyledRentalIndexItem>)
  )
};

export default RentalIndexItem;
