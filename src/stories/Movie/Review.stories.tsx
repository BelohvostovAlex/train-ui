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

/**Review: for displaying the review author, text. Text has limit number of chars, so you have the button to expand the review text and hide it */
export const Default = Template.bind({});
Default.args = {
  author: from,
  text: text,
};
