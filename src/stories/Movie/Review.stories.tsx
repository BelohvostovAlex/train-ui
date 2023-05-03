import React, { Meta, StoryFn } from "@storybook/react";

import Review from "@/components/Review";

import { reviewText } from "./config";

const { from, text } = reviewText;

export default {
  title: "components/Review",
  component: Review,
  argTypes: {},
} as Meta<typeof Review>;

const Template: StoryFn<typeof Review> = (args) => <Review {...args}></Review>;

export const Default = Template.bind({});
Default.args = {
  author: from,
  text: text,
};
