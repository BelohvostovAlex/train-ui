import React, { Meta, StoryFn } from "@storybook/react";

import { CloseSvg } from "@/assets/svg/CloseSvg";
import RoundButton from "@/components/RoundButton";
import { Colors } from "@/constants/styles/colors";

export default {
  title: "components/RoundButtons/CloseButton",
  component: RoundButton,
  argTypes: {},
} as Meta<typeof RoundButton>;

const Template: StoryFn<typeof RoundButton> = (args) => (
  <RoundButton {...args}></RoundButton>
);

export const closeModalButton = Template.bind({});
closeModalButton.args = {
  children: <CloseSvg />,
  background: Colors.EXTRA_DARK_GRAY,
};
