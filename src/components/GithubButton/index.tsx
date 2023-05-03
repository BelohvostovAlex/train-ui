import React, { FunctionComponent } from "react";

import { GithubSvg } from "@/assets/svg/GithubSvg";

import Button from "../Button";
import { ButtonProps } from "../Button/interfaces";

const GithubButton: FunctionComponent<ButtonProps> = ({
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
      icon={<GithubSvg />}
      buttonTypes={buttonTypes}
      margin={margin}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default GithubButton;
