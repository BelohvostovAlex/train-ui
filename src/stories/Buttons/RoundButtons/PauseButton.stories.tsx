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

/**Round button with pause icon inside, using for audio/video components */
export const pauseButton = Template.bind({});
pauseButton.args = {
  children: <PauseSvg />,
};
