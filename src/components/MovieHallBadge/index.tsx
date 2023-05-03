import React, { FunctionComponent } from "react";

import { SeatSvg } from "@/assets/svg/SeatSvg";

import { useMovieHallBadgeText } from "./config/useMovieHallBadgeText";
import { MovieHallBadgeProps } from "./interfaces";
import {
  MovieHallBadgeNumber,
  MovieHallBadgeSeats,
  MovieHallBadgeTime,
  MovieHallBadgeWrapper,
} from "./styles";

const MovieHallBadge: FunctionComponent<MovieHallBadgeProps> = ({
  isActive,
  time,
  hallNumber,
  available,
  onClick,
}) => {
  const { movieBadgeHallTitle, availableSeatsText } = useMovieHallBadgeText();
  return (
    <MovieHallBadgeWrapper isActive={isActive} onClick={onClick}>
      <MovieHallBadgeTime>{time}</MovieHallBadgeTime>
      <MovieHallBadgeNumber>
        {movieBadgeHallTitle}: {hallNumber}
      </MovieHallBadgeNumber>
      <MovieHallBadgeSeats>
        <SeatSvg />
        {available} {availableSeatsText}
      </MovieHallBadgeSeats>
    </MovieHallBadgeWrapper>
  );
};

export default MovieHallBadge;
