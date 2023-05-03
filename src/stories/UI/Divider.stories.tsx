import React, { Meta, StoryFn } from "@storybook/react";

import Divider from "@/components/Divider";

export default {
  title: "components/Divider",
  component: Divider,
  argTypes: {},
} as Meta<typeof Divider>;

const Template: StoryFn<typeof Divider> = (args) => (
  <Divider {...args}></Divider>
);

export const Default = Template.bind({});
Default.args = {};
