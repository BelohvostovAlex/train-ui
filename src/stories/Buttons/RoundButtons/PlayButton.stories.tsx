import React, { Meta, StoryFn } from "@storybook/react";

import { PlaySvg } from "@/assets/svg/PlaySvg";
import RoundButton from "@/components/RoundButton";

export default {
  title: "components/RoundButtons/PlayButton",
  component: RoundButton,
  argTypes: {},
} as Meta<typeof RoundButton>;

const Template: StoryFn<typeof RoundButton> = (args) => (
  <RoundButton {...args}></RoundButton>
);

/**Round button with play icon inside, using for audio/video components */
export const playButton = Template.bind({});
playButton.args = {
  children: <PlaySvg />,
};
