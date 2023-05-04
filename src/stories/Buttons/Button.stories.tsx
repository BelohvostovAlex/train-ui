import React, { Meta, StoryFn } from "@storybook/react";

import Button from "@/components/Button";
import { ButtonVariants } from "@/constants/buttons";
import { TypographyVariant } from "@/constants/styles/typography";

import { fontSize } from "./config";

export default {
  title: "components/Buttons/Button",
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args}></Button>;

/** Primary Button for Cinema App. (choose dark background) */
export const primary = Template.bind({});
primary.args = {
  typography: TypographyVariant.poppins_l,
  fontSize,
  variant: ButtonVariants.PRIMARY,
  children: "Primary",
};

/** Primary Button for Cinema App */
export const secondary = Template.bind({});
secondary.args = {
  typography: TypographyVariant.poppins_l,
  fontSize,
  variant: ButtonVariants.SECONDARY,
  children: "Secondary",
};
