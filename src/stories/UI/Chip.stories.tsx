import React, { Meta, StoryFn } from "@storybook/react";

import Chip from "@/components/Chip/index";

export default {
  title: "components/Chip",
  component: Chip,
  argTypes: {},
} as Meta<typeof Chip>;

const Template: StoryFn<typeof Chip> = (args) => <Chip {...args}></Chip>;

/**Chip: for displaying tags. */
export const Default = Template.bind({});
Default.args = {
  text: "chip example",
};
