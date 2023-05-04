import React, { Meta, StoryFn } from "@storybook/react";

import GoogleButton from "@/components/GoogleButton";
import { Colors } from "@/constants/styles/colors";
import { TypographyVariant } from "@/constants/styles/typography";

import { socialBtnFontSize, socialBtnHeight, socialBtnWidth } from "./config";

export default {
  title: "components/Buttons/social/GoogleButton",
  component: GoogleButton,
  argTypes: {},
} as Meta<typeof GoogleButton>;

const Template: StoryFn<typeof GoogleButton> = (args) => (
  <GoogleButton {...args}></GoogleButton>
);

/**Google button with branded colors and icon */
export const googleButton = Template.bind({});
googleButton.args = {
  typography: TypographyVariant.inter_sb,
  width: socialBtnWidth,
  height: socialBtnHeight,
  fontSize: socialBtnFontSize,
  backgroundColor: Colors.WHITE,
  color: Colors.BLACK,
  children: "Continue with Google",
};
