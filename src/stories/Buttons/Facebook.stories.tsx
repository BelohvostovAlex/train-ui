import React, { Meta, StoryFn } from "@storybook/react";

import { FacebookSvg } from "@/assets/svg/FacebookSvg";
import Button from "@/components/Button";
import { Colors } from "@/constants/styles/colors";
import { TypographyVariant } from "@/constants/styles/typography";

import { socialBtnFontSize, socialBtnHeight, socialBtnWidth } from "./config";

export default {
  title: "components/Buttons/social/FacebookButton",
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args}></Button>;

/**Facebook button with branded colors and icon */
export const facebookButton = Template.bind({});
facebookButton.args = {
  typography: TypographyVariant.inter_sb,
  width: socialBtnWidth,
  height: socialBtnHeight,
  fontSize: socialBtnFontSize,
  backgroundColor: Colors.FACEBOOK,
  color: Colors.WHITE,
  icon: <FacebookSvg />,
  children: "Sign in with facebook",
};
