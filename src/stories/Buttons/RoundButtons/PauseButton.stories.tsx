import React, { Meta, StoryFn } from "@storybook/react";

import { PauseSvg } from "@/assets/svg/PauseSvg";
import RoundButton from "@/components/RoundButton";

export default {
  title: "components/RoundButtons/PauseButton",
  component: RoundButton,
  argTypes: {},
} as Meta<typeof RoundButton>;

const Template: StoryFn<typeof RoundButton> = (args) => (
  <RoundButton {...args}></RoundButton>
);

export const pauseButton = Template.bind({});
pauseButton.args = {
  children: <PauseSvg />,
};
