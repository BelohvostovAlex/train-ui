import React, { Meta, StoryFn } from "@storybook/react";

import { Button } from "@/components";
import Alert from "@/components/Alert";
import { AlertTypes } from "@/constants/alert";
import { TypographyVariant } from "@/constants/styles/typography";
import { useActions } from "@/hooks/useActionts";

export default {
  title: "components/Alert",
  component: Alert,
  argTypes: {},
} as Meta<typeof Alert>;

const TemplateSuccess: StoryFn<typeof Alert> = (args) => {
  const { setIsAlertOpen } = useActions();
  const handleAlert = () => {
    setIsAlertOpen({
      isOpen: true,
      text: "Alert Success",
      type: AlertTypes.SUCCESS,
    });
  };
  return (
    <>
      <Button typography={TypographyVariant.inria_l_ital} onClick={handleAlert}>
        Show Alert Success
      </Button>
      <Alert {...args}></Alert>
    </>
  );
};

const TemplateError: StoryFn<typeof Alert> = (args) => {
  const { setIsAlertOpen } = useActions();
  const handleAlert = () => {
    setIsAlertOpen({
      isOpen: true,
      text: "Alert Error",
      type: AlertTypes.ERROR,
    });
  };
  return (
    <>
      <Button typography={TypographyVariant.inria_l_ital} onClick={handleAlert}>
        Show Alert Error
      </Button>
      <Alert {...args}></Alert>
    </>
  );
};

/** Alert success example, controlled by redux-toolkit */
export const successAlert = TemplateSuccess.bind({});
successAlert.args = {};

/** Alert error example, controlled by redux-toolkit */
export const errorAlert = TemplateError.bind({});
errorAlert.args = {};
