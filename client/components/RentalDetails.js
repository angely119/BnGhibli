import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleRental } from "../store/singleRental";
import styled from "styled-components";

// STYLED COMPONENTS
const StyledRentalContainer = styled.div`
  padding: 40px 80px
`;

const StyledRentalName = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
`;

const StyledRentalInfoContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledRentalInfo = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex: row;
  height: 450px;
  border-radius: 15px;
  margin-top: 20px;
  overflow: hidden;
  gap: 8px;
`;
//   border: solid grey 1px;

const MainImage = styled.div`
  background-image: url(${props => props.image});
  display: flex;
  width:100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const SmallImagesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: row wrap;
  gap: 8px 8px;
`;

const SmallImage = styled.div`
  background-image: url(${props => props.image});
  display: flex;
  width: 49%;
  background-size: cover;
  background-position: center;
`;

// FUNCTIONAL COMPONENT
const RentalDetails = (props) => {
  const rental = useSelector((state) => state.singleRental);
  const rentalId = props.match.params.rentalId;
  const dispatch = useDispatch();
  const numOfReviews = rental.reviews && rental.reviews.length
  const avgRating = (reviews) => {
    if (!reviews.length) return 'No reviews yet';
    const avg = reviews.reduce((avgRating, curReview) => avgRating + curReview.rating / reviews.length, 0);
    return `★${(Math.round(avg * 100) / 100).toFixed(2)}`;
  };

  useEffect(() => {
    dispatch(fetchSingleRental(rentalId))
  }, [dispatch]);

  return (
    <StyledRentalContainer>
      <StyledRentalName>{rental.rentalName}</StyledRentalName>
      <StyledRentalInfoContainer>
        <StyledRentalInfo>{rental.reviews && avgRating(rental.reviews)}</StyledRentalInfo>
        <StyledRentalInfo>{`${numOfReviews ? numOfReviews : "No"} reviews`}</StyledRentalInfo>
        <StyledRentalInfo>{rental.location}</StyledRentalInfo>
      </StyledRentalInfoContainer>
      <ImagesContainer>
        <MainImage image={rental.imageUrls && rental.imageUrls[0]} />
        <SmallImagesContainer>
          <SmallImage image={rental.imageUrls && rental.imageUrls[1]} />
          <SmallImage image={rental.imageUrls && rental.imageUrls[2]} />
          <SmallImage image={rental.imageUrls && rental.imageUrls[3]} />
          <SmallImage image={rental.imageUrls && rental.imageUrls[4]} />
        </SmallImagesContainer>
      </ImagesContainer>
    </StyledRentalContainer>
  )
};

export default RentalDetails;
