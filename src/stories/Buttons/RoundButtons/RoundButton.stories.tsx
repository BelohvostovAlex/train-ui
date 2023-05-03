import React, { Meta, StoryFn } from "@storybook/react";

import { CloseSvg } from "@/assets/svg/CloseSvg";
import RoundButton from "@/components/RoundButton";

export default {
  title: "components/RoundButtons/RoundButton",
  component: RoundButton,
  argTypes: {},
} as Meta<typeof RoundButton>;

const Template: StoryFn<typeof RoundButton> = (args) => (
  <RoundButton {...args}></RoundButton>
);

export const defaultButton = Template.bind({});
defaultButton.args = {
  children: <CloseSvg />,
};
