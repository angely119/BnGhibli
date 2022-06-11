import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleRental } from "../store/singleRental";
import { RentalBookingForm } from "./index";
import styled from "styled-components";

// STYLED COMPONENTS
const RentalContainer = styled.div`
  padding: 40px 80px
`;

const RentalHeaderName = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
`;

const RentalHeaderContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const RentalHeaderInfo = styled.span`
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
  gap: 10px;
`;
//   border: solid grey 1px;

const MainImage = styled.div`
  background-image: url(${props => props.image});
  display: flex;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const SmallImagesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: row wrap;
  gap: 10px 10px;
`;

const SmallImage = styled.div`
  background-image: url(${props => props.image});
  display: flex;
  width: 49%;
  background-size: cover;
  background-position: center;
`;

const RentalDetailsContainer = styled.div`
  display: flex;
  height: 500px;
`;

const RentalDetailsLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  padding: 50px 0px;
  padding-right: 15px;
`;

const RentalDetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding-bottom: 20px;
  border-bottom: solid #dad9d4 1px;
  width: 100%;
`;

const RentalDetailsHeaderLeft = styled.div`
  width: 558px;
  height: 60px;
`;

const RentalDetailsTitle = styled.span`
  font-size: 21px;
  font-weight: 500;
`;

const RentalDetailsSubtitle = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: grey;
`;

const RentalDetailsHostIcon = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
`;

const RentalDetailsHostBio = styled.div`
  height: 210px;
  width: 100%;
  border-bottom: solid #dad9d4 1px;
  padding: 32px 0px;
  font-size: 16px;
`;

const RentalDetailsAmenities = styled.div`
  height: 470px;
  width: 100%;
  border-bottom: solid #dad9d4 1px;
  padding: 48px 0px;
  font-size: 16px;
`;

const RentalDetailsRightContainer= styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 40%;
  padding: 50px 0px;
`;

// FUNCTIONAL COMPONENT
const RentalDetails = (props) => {
  const rental = useSelector((state) => state.singleRental);
  const rentalId = props.match.params.rentalId;
  const dispatch = useDispatch();
  const numOfReviews = rental.reviews && rental.reviews.length;
  const avgRating = (reviews) => {
    if (!reviews.length) return 'No ratings yet';
    const avg = reviews.reduce((avgRating, curReview) => avgRating + curReview.rating / reviews.length, 0);
    return `★ ${(Math.round(avg * 100) / 100).toFixed(2)}`;
  };

  useEffect(() => {
    dispatch(fetchSingleRental(rentalId))
  }, [dispatch]);
  return (
    <RentalContainer>
      <RentalHeaderName>{rental.rentalName}</RentalHeaderName>
      <RentalHeaderContainer>
        <RentalHeaderInfo>{rental.reviews && avgRating(rental.reviews)}</RentalHeaderInfo>
        <RentalHeaderInfo>{`${numOfReviews ? numOfReviews : "No"} review(s)`}</RentalHeaderInfo>
        <RentalHeaderInfo>🏆 Superhost</RentalHeaderInfo>
        <RentalHeaderInfo>{rental.location}</RentalHeaderInfo>
      </RentalHeaderContainer>
      <ImagesContainer>
        <MainImage image={rental.imageUrls && rental.imageUrls[0]} />
        <SmallImagesContainer>
          <SmallImage image={rental.imageUrls && rental.imageUrls[1]} />
          <SmallImage image={rental.imageUrls && rental.imageUrls[2]} />
          <SmallImage image={rental.imageUrls && rental.imageUrls[3]} />
          <SmallImage image={rental.imageUrls && rental.imageUrls[4]} />
        </SmallImagesContainer>
      </ImagesContainer>
      <RentalDetailsContainer>
        <RentalDetailsLeftContainer>
          <RentalDetailsHeader>
            <RentalDetailsHeaderLeft>
              <RentalDetailsTitle>{rental.rentalType &&`Entire ${rental.rentalType} `}</RentalDetailsTitle>
              <RentalDetailsTitle>{`hosted by ${rental.host ? rental.host.username : 'Hayao Miyazaki'}`}</RentalDetailsTitle>
              <RentalDetailsSubtitle>5 guests · 2 bedrooms · 2 beds · 1 bath</RentalDetailsSubtitle>
            </RentalDetailsHeaderLeft>
            <RentalDetailsHostIcon image={rental.host && rental.host.profileImageUrl}/>
          </RentalDetailsHeader>
          <RentalDetailsHostBio>
            <h3>About your host:</h3>
            <p>{rental.host && rental.host.bio}</p>
          </RentalDetailsHostBio>
          {/* <RentalDetailsAmenities>
            <h3>What this place offers</h3>
          </RentalDetailsAmenities> */}
        </RentalDetailsLeftContainer>
        <RentalDetailsRightContainer>
          <RentalBookingForm rental={rental} numOfReviews={numOfReviews} avgRating={avgRating}/>
        </RentalDetailsRightContainer>
      </RentalDetailsContainer>
    </RentalContainer>
  )
};

export default RentalDetails;
