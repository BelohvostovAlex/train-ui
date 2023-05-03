import styled from "styled-components";

import { MovieHallBadgeWrapperProps } from "./interfaces";

const MovieHallBadgeWrapperWidthPercent = 31;
const MovieHallBadgeWrapperWidthPercentM = 100;
const SeatSvgHeight = 20;

export const MovieHallBadgeWrapper = styled.div<MovieHallBadgeWrapperProps>`
  width: ${MovieHallBadgeWrapperWidthPercent}%;
  max-width: fit-content;
  background: ${({ theme }) => theme.colors.extraDarkGray};
  border-radius: ${({ theme }) => theme.border_radius[20]};
  border: ${({ isActive, theme }) =>
    isActive
      ? `solid 3px ${theme.colors.secondary}`
      : `solid 3px ${theme.colors.extraDarkGray}`};
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.m}px`}) {
    width: ${MovieHallBadgeWrapperWidthPercentM}%;
    max-width: ${MovieHallBadgeWrapperWidthPercentM}%;
    margin-bottom: 10px;
  }
`;

export const MovieHallBadgeTime = styled.h3`
  ${({ theme }) => theme.typography.poppins_sb};
  font-size: ${({ theme }) => theme.fontSize[14]};
`;

export const MovieHallBadgeNumber = styled.h4`
  ${({ theme }) => theme.typography.poppins_r};
  font-size: ${({ theme }) => theme.fontSize[14]};
`;

export const MovieHallBadgeSeats = styled.p`
  ${({ theme }) => theme.typography.poppins_l};
  font-size: ${({ theme }) => theme.fontSize[10]};
  ${({ theme }) => theme.flexAlignCenter};
  svg {
    margin-right: 5px;
    height: ${SeatSvgHeight}px;
    width: auto;
  }
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
