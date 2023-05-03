import { useArgs } from "@storybook/client-api";
import React, { Meta, StoryFn } from "@storybook/react";

import MovieHallBadge from "@/components/MovieHallBadge";

import { movieHallBadgeInfo } from "./config/index";

const { available, availableSeatsText, hallNumber, hallTitle, isActive, time } =
  movieHallBadgeInfo;

export default {
  title: "components/MovieBadgeHall",
  component: MovieHallBadge,
  args: {
    isActive,
    time,
    hallNumber,
    available,
    availableSeatsText,
    hallTitle,
  },
} as Meta<typeof MovieHallBadge>;

const Template: StoryFn<typeof MovieHallBadge> = (args) => {
  const [{ isActive }, updateArgs] = useArgs();
  const onClick = () => updateArgs({ isActive: !isActive });
  return <MovieHallBadge {...args} onClick={onClick}></MovieHallBadge>;
};

export const Default = Template.bind({});
Default.args = {};
