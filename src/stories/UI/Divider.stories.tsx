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

/**Divider: you can divide the sections, blocks using divider comp. It accepts background color, dimensions */
export const Default = Template.bind({});
Default.args = {};
