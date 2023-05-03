import React, { FunctionComponent } from "react";

import { FacebookSvg } from "@/assets/svg/FacebookSvg";

import Button from "../Button";
import { ButtonProps } from "../Button/interfaces";

const FacebookButton: FunctionComponent<ButtonProps> = ({
  typography,
  backgroundColor,
  buttonTypes,
  children,
  color,
  fontSize,
  height,
  margin,
  onClick,
  variant,
  width,
}) => {
  return (
    <Button
      typography={typography}
      width={width}
      height={height}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      color={color}
      onClick={onClick}
      icon={<FacebookSvg />}
      buttonTypes={buttonTypes}
      margin={margin}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default FacebookButton;
