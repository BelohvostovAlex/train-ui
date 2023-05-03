import { useTranslation } from "react-i18next";

export const useMovieHallBadgeText = () => {
  const { t } = useTranslation();

  return {
    movieBadgeHallTitle: t("Movie.movieBadgeHallTitle"),
    availableSeatsText: t("Movie.availableSeats"),
    noAvailableSeats: t("Movie.noAvailableSeats"),
  };
};
