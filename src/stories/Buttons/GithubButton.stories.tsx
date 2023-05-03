import React, { Meta, StoryFn } from "@storybook/react";

import { GithubSvg } from "@/assets/svg/GithubSvg";
import Button from "@/components/Button";
import { Colors } from "@/constants/styles/colors";
import { TypographyVariant } from "@/constants/styles/typography";

import { socialBtnFontSize, socialBtnHeight, socialBtnWidth } from "./config";

export default {
  title: "components/Buttons/social/GithubButton",
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args}></Button>;

export const githubButton = Template.bind({});
githubButton.args = {
  typography: TypographyVariant.inter_sb,
  width: socialBtnWidth,
  height: socialBtnHeight,
  fontSize: socialBtnFontSize,
  backgroundColor: Colors.BLACK,
  color: Colors.WHITE,
  icon: <GithubSvg />,
  children: "Sign in with Github",
};
