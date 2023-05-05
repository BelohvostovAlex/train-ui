import React, { Meta, StoryFn } from "@storybook/react";

import Ticket from "@/components/Ticket";
import { moviesImdbNew } from "@/constants/movies";

export default {
  title: "components/Ticket",
  component: Ticket,
  args: {},
} as Meta<typeof Ticket>;

const Template: StoryFn<typeof Ticket> = (args) => <Ticket {...args}></Ticket>;

/**Movie Ticket: displaying the info of your booked ticket, also you can cancel the booking by clicking on button */
export const Default = Template.bind({});
Default.args = {
  date: "10",
  id: moviesImdbNew[0].id,
  isUpcoming: true,
  movie: moviesImdbNew[0].title,
  price: 10,
  seatsAmount: 1,
  time: "2:30PM - 3:40PM",
};
