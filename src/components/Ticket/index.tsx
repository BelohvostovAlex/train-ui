import React, { FunctionComponent } from "react";

import { CancelSvg } from "@/assets/svg/CancelSvg";
import { RateSvg } from "@/assets/svg/RateSvg";
import { TicketSvg } from "@/assets/svg/TicketSvg";
import { Colors } from "@/constants/styles/colors";
import { TypographyVariant } from "@/constants/styles/typography";
// import { useActions } from "@/hooks/useActionts";
import { useAppSelector } from "@/hooks/useAppSelector";
import { moviesSelector } from "@/store/slices/movieSlice/selectors";

import Button from "../Button";
import Divider from "../Divider";
import { dividerExtraStyles } from "./config";
import { handleSeatsText } from "./config/handleSeatsText";
import { useBookingText } from "./config/useBookingText";
import { TicketProps } from "./interfaces";
import {
  TicketBottom,
  TicketContent,
  TicketDate,
  TicketHeader,
  TicketId,
  TicketImg,
  TicketPrice,
  TicketRating,
  TicketSeats,
  TicketSeatsWrapper,
  TicketTitle,
  TicketWrapper,
} from "./styles";

const Ticket: FunctionComponent<TicketProps> = ({
  movie,
  price,
  date,
  id,
  seatsAmount,
  time,
  isUpcoming,
}) => {
  const movies = useAppSelector(moviesSelector);
  const { cancelBtn, dateText, timeText, seatText, seatsText } =
    useBookingText();
  // const { removeTicket } = useActions();
  const currMovie = movies.find((mov) => mov.title === movie);
  if (!currMovie) return null;

  // const cancelBooking = () => {
  //   removeTicket(id);
  // };
  return (
    <TicketWrapper>
      <TicketImg src={currMovie.image} />
      <TicketContent>
        <TicketHeader>
          <TicketTitle>{movie}</TicketTitle>
          <TicketRating>
            {currMovie.imDbRating} <RateSvg />
          </TicketRating>
        </TicketHeader>
        <TicketDate>
          {dateText}: {date}
        </TicketDate>
        <TicketDate>
          {timeText}: {time}
        </TicketDate>
        <TicketId>
          <TicketSvg /> TC{id.slice(0, 8)}
        </TicketId>
        <Divider
          color={Colors.WHITE}
          height={dividerExtraStyles.height}
          width={dividerExtraStyles.width}
        />
        <TicketBottom>
          <TicketSeatsWrapper>
            <TicketSeats>
              {seatsAmount} {handleSeatsText(seatsAmount, seatText, seatsText)}
            </TicketSeats>
            <TicketPrice>{price} $</TicketPrice>
          </TicketSeatsWrapper>
          {isUpcoming && (
            <Button
              typography={TypographyVariant.poppins_l}
              color={Colors.BLACK}
              backgroundColor={Colors.ORANGE}
              onClick={() => "canceled"}
            >
              {cancelBtn}
              <CancelSvg />
            </Button>
          )}
        </TicketBottom>
      </TicketContent>
    </TicketWrapper>
  );
};

export default Ticket;
