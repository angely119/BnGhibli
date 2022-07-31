import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleRental } from "../store/singleRental";
import { RentalBookingForm } from "./index";
import {
  RentalContainer,
  RentalHeaderName,
  RentalHeaderContainer,
  RentalHeaderInfo,
  ImagesContainer,
  MainImage,
  SmallImagesContainer,
  SmallImage,
  RentalDetailsContainer,
  RentalDetailsLeftContainer,
  RentalDetailsHeader,
  RentalDetailsHeaderLeft,
  RentalDetailsTitle,
  RentalDetailsSubtitle,
  RentalDetailsHostIcon,
  RentalDetailsHostBio,
  RentalDetailsRightContainer
} from "./styles";

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
  const defaultHostBio = 'Born in Tokyo during the height of World War II, Hayao Mizayaki has been dreaming about the sky since early childhood. His father was the director of Miyazaki Airplane, a manufacturing concern that built parts for planes. The theme of flying, sometimes on the most fantastic aircrafts, has been crucial in Miyazaki\'s every work — starting with "Laputa: The Castle in the Sky," finding its place in "Porco Rosso" and "Howl\'s Moving Castle", and culminating in the director\'s latest work "The Wind Rises."';
  const defaultHostProfile = 'http://images5.fanpop.com/image/photos/29100000/Porco-Rosso-porco-rosso-29177376-200-200.jpg';

  useEffect(() => {
    dispatch(fetchSingleRental(rentalId))
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <RentalContainer>
      <RentalHeaderName>{rental.rentalName}</RentalHeaderName>
      <RentalHeaderContainer>
        <RentalHeaderInfo>{rental.reviews && avgRating(rental.reviews)}</RentalHeaderInfo>
        <RentalHeaderInfo>{`${numOfReviews ? numOfReviews : "No"} review(s)`}</RentalHeaderInfo>
        <RentalHeaderInfo>{`⚑ Superhost`}</RentalHeaderInfo>
        <RentalHeaderInfo>{rental.location && rental.location.name}</RentalHeaderInfo>
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
            <RentalDetailsHostIcon image={rental.host ? rental.host.profileImageUrl : defaultHostProfile}/>
          </RentalDetailsHeader>
          <RentalDetailsHostBio>
            <h3>About your host:</h3>
            <p>{rental.host ? rental.host.bio : defaultHostBio}</p>
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
