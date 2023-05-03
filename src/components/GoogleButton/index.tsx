import React, { FunctionComponent } from "react";

import { GoogleSvg } from "@/assets/svg/GoogleSvg";

import Button from "../Button";
import { ButtonProps } from "../Button/interfaces";

const GoogleButton: FunctionComponent<ButtonProps> = ({
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
      icon={<GoogleSvg />}
      buttonTypes={buttonTypes}
      margin={margin}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default GoogleButton;
